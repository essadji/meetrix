import { Injectable } from '@angular/core';

import { TopicInterface } from './topic-interface';

interface meeting {
  id: number;
  color: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class TopicsServiceService {

  constructor() { }

  topicList: TopicInterface[] = [
    { name: "Examens", color: "green", amount: 5 },
    { name: 'Gebouw', color: "blue", amount: 0 },
    { name: 'Corona', color: "black", amount: 1 },
    { name: 'Website', color: "red", amount: 0 },
    { name: 'Brandalarm', color: "red", amount: 0 },
    { name: 'Leerkrachten', color: "geel", amount: 1 }
  ];

  topicsList: meeting[] = [
    { id: 1, name: "examens", color: "green" },
    { id: 2, name: 'testen', color: "blue" }
  ];

  nameI: any = "";
  nameX: any = "";

  getItem() {
    for (let index = 0; index < this.topicList.length; index++) {
      this.nameI = this.topicList[index];
      //  console.log(this.nameI);
    }
  }

}