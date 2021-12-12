import { Component, OnInit } from '@angular/core';
import { LastAddedService } from '../last-added.service';
import { NotificationInterface } from '../notification-interface';
import { TopicInterface } from '../topic-interface';
import { TopicsServiceService } from '../topics-service.service';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  showList: number[] = [];
  topicsList: TopicInterface[] = [];
  lastAddedList: NotificationInterface[] = [];
  topicList:object[]=[];

  constructor(public topicsService: TopicsServiceService, public lastAdded: LastAddedService) {


   }

  ngOnInit(): void {
    this.topicsService.getItem();
    // >>> MAARTEN
    for (var i = 0; i < this.topicsList.length; i++) {
      this.showList.push(i); //TODO why loop?
    }
    // <<<MAARTEN
  }
  addTopic(x: string, y: string) {
    if (x != "" || y != "") {
      this.topicsList.push({ "name": x, "color": y, "amount": 0 });
      this.lastAddedList.push({ type: "topic", number: this.topicsList.length - 1 });
    }
    else {
      alert("vul waarde in");
    }
  }
  // OaddTopic(x:string, y:string){
  //    this.topicsService.topicList.push({"id":11,"name":x,"color":y});
  //  }
}
