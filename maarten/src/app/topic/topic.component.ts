import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() topicName:any ="";
  @Input() topicColor:any ="";
  @Input() topicAmount:any ="";
  constructor() { }
  
  ngOnInit(): void {
    
  }
   

}
