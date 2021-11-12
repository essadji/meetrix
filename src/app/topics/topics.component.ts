import { Component, OnInit } from '@angular/core';
import { TopicsServiceService } from '../topics-service.service';

@Component({
  selector: 'topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(public topicsService:TopicsServiceService) { }

  topicList:object[]=[];
  ngOnInit(): void {
    this.topicsService.getItem();
    
  }

  addTopic(x:string, y:string){
     this.topicsService.topicList.push({"id":11,"name":x,"color":y});
   }
}
