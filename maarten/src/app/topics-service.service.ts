import { Injectable } from '@angular/core';
import { TopicInterface } from './topic-interface';


@Injectable({
  providedIn: 'root'
})
export class TopicsServiceService {

  constructor() { }
  
   topicList:TopicInterface[] =[
     {name: "Examens", color: "green", amount:5},
     { name: 'Gebouw', color: "blue", amount:0},
     { name: 'Corona', color: "black", amount:1},
     { name: 'Website', color: "red", amount:0},
     { name: 'Brandalarm', color: "red", amount:0},
     { name: 'Leerkrachten', color: "geel", amount:1}
   ] ;
   
   }