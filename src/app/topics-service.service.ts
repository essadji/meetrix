import { Injectable } from '@angular/core';

interface meeting {
  id:number;
  color:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicsServiceService {

  constructor() { }
  
   topicList:meeting[] =[
     {id:1, name: "examens", color: "green"},
     {id: 2, name: 'testen', color: "blue"}
   ] ;

   nameI:any="";
   nameX:any="";
   getItem(){
    for(let index=0; index<this.topicList.length; index++ ){
      this.nameI = this.topicList[index];
       console.log(this.nameI);
    }
   }
   
   
}
/*
for(let index=0; index<this.topicList.length; index++ ){
       
     }*/