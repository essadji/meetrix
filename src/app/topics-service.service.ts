import { Injectable } from '@angular/core';

interface topic {
  color:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicsServiceService {

  constructor() { }
  
   topicList:topic[] =[
     {name: "examens", color: "green"},
     { name: 'testen', color: "blue"}
   ] ;
   
   }
   
   
/*
for(let index=0; index<this.topicList.length; index++ ){
       
     }*/