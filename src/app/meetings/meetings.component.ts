import { Component, OnInit } from '@angular/core';
import { meeting } from '../meeting-interface';
import { LastAddedService } from '../last-added.service';
import { MeetingServiceService } from '../meeting-service.service';
import { MembersInfoInterface } from '../members-info-interface';
import { MembersInterface } from '../members-interface';
import { MembersServiceService } from '../members-service.service';
import { NotificationInterface } from '../notification-interface';
import { TopicInterface } from '../topic-interface';
import { TopicsServiceService } from '../topics-service.service';
// import { meeting } from '../Omeeting';

@Component({
  selector: 'meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  meetingList: meeting[] = [];
  meetings: meeting[] = [];
  topicList: TopicInterface[] = [];
  membersList: MembersInterface[] = [];
  membersInfoList: MembersInfoInterface[] = [];
  lastAddedList: NotificationInterface[] = [];

  constructor(public meetingService: MeetingServiceService, public topicsService: TopicsServiceService, public memberService: MembersServiceService, public lastAdded: LastAddedService) {
    this.meetings = this.meetingService.meetingList;
    this.meetingList = this.meetingService.meetingList;
    this.topicList = this.topicsService.topicList;
    this.membersList = this.memberService.memberList;
    this.membersInfoList = memberService.membersInfo;
    this.lastAddedList = lastAdded.lastAddedList;
  }

  ngOnInit(): void {
    for (var i = 0; i < this.meetingList.length; i++) {
      this.showList.push(i); //TODO why?
    }
  }

  addMeeting(date: string, name: string, topics: any, attendees: any, commentary: string) {
    console.log([...arguments])
    this.addHidden = true;
    if (date != "" && name != "" && topics.length > 0 && attendees.length > 0 && commentary != "") {
      console.log(this.lastAddedList);
      this.meetingList.push({ date: date, name: name, topics: topics.value, attendees: this.extract(attendees), commentary: commentary });
      this.lastAddedList.push({ type: "meeting", number: this.meetingList.length - 1 });
      console.log(this.lastAddedList);
      alert("meeting " + name + " toegevoegd");
    }
    else {
      alert("vul waarde in");
    }
  }

  extract(x: any): any {       
    let output: string[] = [];
    for (let i = 0; i < x.length; i++) {
      console.log(x[i].value)
      output.push(x[i].value)
      for (let j = 0; j < this.membersList.length; j++) {
        if (x[i].value == this.membersList[j].name) {
          this.membersInfoList[j].amount = this.membersInfoList[j].amount + 1;
        }
      }
    }
    return output;
  }

  person: any = ""
  commentary: any = ""
  existingCommentary: string = "";
  finalCommentary: string = "";
  txt: string = "";

  editThis(x: string, name: string) {
    // console.log("EDIT: "+x);
    for (let i = 0; i < this.meetingList.length; i++) {
      if (this.meetingList[i].date == x && this.meetingList[i].name == name) {
      console.log (this.meetingList[i].date +" =? "+"x"+" && " +this.meetingList[i].name+" =? " + name)
        this.existingCommentary = this.meetingList[i].commentary;
        // this.meetingService.meetingList[i].commentary = z;
        this.person = prompt("Geef je naam:");
        //controleer of persoon bstaat;
        if (this.chechAttendee(this.person, i) == true) {
          this.commentary = prompt("voeg het commentaar toe:");
          while (this.commentary == "") {
            this.commentary = prompt("Vul een waarde in:");
          }
          this.finalCommentary = this.existingCommentary + "\n" + this.person + ": " + this.commentary;
          this.meetingList[i].commentary = this.finalCommentary;
        }
        else {
          alert("persoon nam niet deel aan de meeting");
        }
      }
    }
  }
  exict: boolean = false;
  attendeeArray: string[] = [];

  chechAttendee(attendee: string, i: number) {
    this.exict = false;
    // for(let i = 0; i < this.meetingService.meetingList.length; i++){
    for (let j = 0; j < this.meetingList[i].attendees.length; j++) {
      if (this.meetingList[i].attendees[j] == attendee) {
        this.exict = true;
      }
    }
    return this.exict;
  }

  orderArray: number[] = [];
  order(x: string) {
    this.everythinVisibility = true;
    this.orderArray = [];
    for (let i = 0; i < this.meetingList.length; i++) {
      for (let j = 0; j < this.meetingList[i].attendees.length; j++) {
        if (x == this.meetingList[i].attendees[j]) {
          // this.orderArray.push(date: this.meetingService.meetingList[i], name: "Examen", topics:['Corona'], attendees:['Bjarne', 'Robbe', 'Maarten'],commentary:"")
          this.orderArray.push(i);
          console.log(i);
        }
      }
    }
  }
  topicArray: number[] = [];
  topic(x: string) {
    this.topicArray = [];
    for (let i = 0; i < this.meetingList.length; i++) {
      if (x == this.meetingList[i].topics) {
        // this.orderArray.push(date: this.meetingService.meetingList[i], name: "Examen", topics:['Corona'], attendees:['Bjarne', 'Robbe', 'Maarten'],commentary:"")
        this.topicArray.push(i);
      }
    }
  }
  topicVisibility: boolean = true;
  Ordervisibility: boolean = true;
  everythinVisibility: boolean = false;
  setOrder(x: boolean, y: boolean, z: boolean) {
    console.log("everything: " + x + " order " + y + " topic " + z);
    this.everythinVisibility = !x;
    this.Ordervisibility = !y;
    console.log(this.Ordervisibility);
    this.topicVisibility = !z;
  }
  changeOrder(x: any) {
    // console.log(x)
    if (x == "alles") {
      this.everythinVisibility = false;
      this.Ordervisibility = true;
      this.topicVisibility = true;
    }
    else if (x == "naam") {
      this.everythinVisibility = true;
      this.Ordervisibility = false;
      this.topicVisibility = true;
      this.order(this.membersList[0].name)
    }
    else if (x == "topic") {
      this.everythinVisibility = true;
      this.Ordervisibility = true;
      this.topicVisibility = false;
      this.topic(this.topicsService.topicList[0].name)
    }
  }
  navigationHidden: boolean = false;

  showMoreHidden: boolean = true;
  seeMoreNumber: number = 0; //geen nummer welke meeting getoont wordt
  seeMore(x: string, y: string) {
    this.navigationHidden = true;
    console.log(x, y);
    for (let i = 0; i < this.meetingList.length; i++) {
      if (this.meetingList[i].date == x && this.meetingList[i].name == y) {
        this.seeMoreNumber = i;
        this.showMoreHidden = false
      }
    }
  }
  closeFunction() {
    this.showMoreHidden = true
    this.navigationHidden = false;
  }
  addHidden: boolean = true;
  addSmall() {
    this.navigationHidden = true
    this.addHidden = false;
  }
  closeAddSmall() {
    this.addHidden = true;
    this.navigationHidden = false;
  }
  searchHidden: boolean = true;
  tableHidden: boolean = false;
  addTableHidden: boolean = true;
  visuable: string = "ALLE VERGADERINGEN"
  showAll() {
    this.tableHidden = false;
    this.searchHidden = true;
    this.addTableHidden = true;
    this.visuable = "ALLE VERGADERINGEN";
    for (var i = 0; i < this.meetingList.length; i++) {
      this.showList.push(i);
    }
  }
  showSearchMeeting() {
    this.searchHidden = false;
    this.tableHidden = false;
    this.addTableHidden = true;
    this.visuable = "ZOEK VERGADERING"
  }
  showAddMeeting() {
    this.searchHidden = true;
    this.tableHidden = true;
    this.addTableHidden = false;
    this.visuable = "VOEG VERGADERING TOE"
  }
  showList: number[] = [];
  nameExist: boolean = false;
  topicExict: boolean = false;
  memberExict: boolean = false;
  searchMeeting(inputName: string) {
    this.showList = [];
    for (var i = 0; i < this.meetingList.length; i++) {
      this.nameExist = this.meetingList[i].name.includes(inputName);
      if (this.nameExist == true || this.topicExict == true || this.memberExict == true) {
        this.showList.push(i)
      }
    }
  }

  // searchTopic(input:string){
  //   this.showList=[];
  //  for(var i=0; i<this.membersList.length; i++){
  //    this.nameExist= this.membersList[i].name.includes(input);
  //    this.numberExist=this.membersList[i].number.includes(input);
  //    if(this.nameExist==true || this.numberExist==true){
  //        this.showList.push(i);
  //       }
  //      }
  // }
}
