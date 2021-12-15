import { Component, OnInit } from '@angular/core';
import { LastAddedService } from '../last-added.service';
import { NotificationInterface } from '../notification-interface';
import { TopicInterface } from '../topic-interface';
import { TopicsServiceService } from '../topics-service.service';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
})
export class TopicsComponent implements OnInit {
  showList: number[] = [];
  topicsList: TopicInterface[] = [];
  lastAddedList: NotificationInterface[] = [];
  topicList: object[] = [];
  visuable: string = 'Alle topics';
  topicHidden: boolean = false;
  addHidden: boolean = true;
  searchHidden: boolean = true;

  constructor(
    public topicsService: TopicsServiceService,
    public lastAdded: LastAddedService
  ) {
    this.topicsList = topicsService.topicList;
    this.lastAddedList = lastAdded.lastAddedList;
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
    if (x != '' || y != '') {
      this.topicsList.push({ name: x, color: y, amount: 0 });
      this.lastAddedList.push({
        type: 'topic',
        number: this.topicsList.length - 1,
      });
    } else {
      alert('vul waarde in');
    }
  }
  // OaddTopic(x:string, y:string){
  //    this.topicsService.topicList.push({"id":11,"name":x,"color":y});
  //  }
  showTopics() {
    this.topicHidden = false;
    this.addHidden = true;
    this.searchHidden = true;
    this.visuable = 'Alle topics';
  }
  showAdd() {
    this.topicHidden = true;
    this.addHidden = false;
    this.searchHidden = true;
    this.visuable = 'Add topic';
  }
  search() {
    this.topicHidden = true;
    this.addHidden = true;
    this.searchHidden = false;
    this.visuable = 'Zoeken';
  }
  nameExist: boolean = false;
  colorExist: boolean = false;
  searchTopic(input: string) {
    this.showList = [];
    for (var i = 0; i < this.topicsList.length; i++) {
      this.nameExist = this.topicsList[i].name.includes(input);
      this.colorExist = this.topicsList[i].color.includes(input);
      if (this.nameExist == true || this.colorExist == true) {
        this.showList.push(i);
      }
    }
  }
}
