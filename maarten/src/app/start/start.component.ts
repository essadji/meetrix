import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LastAddedService } from '../last-added.service';
import { meeting } from '../meeting';
import { MeetingServiceService } from '../meeting-service.service';
import { MembersInterface } from '../members-interface';
import { MembersServiceService } from '../members-service.service';
import { NotificationInterface } from '../notification-interface';
import { TopicInterface } from '../topic-interface';
import { TopicsServiceService } from '../topics-service.service';


interface testInterface{
  title:string;
  date:string;
  comment:string;
}
@Component({
  selector: 'start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  meeting:meeting[]=[];
  lastAddedList:NotificationInterface[]=[];
  topicList:TopicInterface[]=[];
  membersList:MembersInterface[]=[];
  constructor(public meetingService: MeetingServiceService, public membersService :MembersServiceService,public topicsService: TopicsServiceService, public lastAdded: LastAddedService) {
    this.meeting= meetingService.meetingList;
    this.topicList=topicsService.topicList;
    this.membersList=membersService.memberList;
    this.lastAddedList= lastAdded.lastAddedList;
  }

  ngOnInit(): void {
    this.fillRandomArray();
    this.showNotifications();
  }
  @Output() naarBoven:EventEmitter<string>=new EventEmitter();
  openTopics(){
    this.naarBoven.emit("topics");
  }
  openMembers(){
    this.naarBoven.emit("members");
  }
  

  randomMembers:number[]=[];
  randomTopics:number[]=[];
  length:number=0;
  isEqual:boolean = false;
  randomNumber:number=0;
  lastMeeting:number=0;
  fillRandomArray(){
    this.lastMeeting= this.meetingService.meetingList.length-1;
    this.length=this.membersService.memberList.length;
    if(this.length<5){
      for(var i=0; i<=this.length; i++){
        this.randomMembers[i]=i;
      }
    }else {
      while(this.randomMembers.length <4){
        this.randomNumber=Math.floor(Math.random()*this.length);
        if(this.randomMembers.indexOf(this.randomNumber)==-1){
          this.randomMembers.push(this.randomNumber);
        }
      }
    }
    //randomTopics
    this.length=this.topicsService.topicList.length;
    if(this.length<5){
        for(var i=0; i<=this.length; i++){
          this.randomTopics[i]=i;
        }
        }else {
          while(this.randomTopics.length <5){
            this.randomNumber=Math.floor(Math.random()*this.length);
            if(this.randomTopics.indexOf(this.randomNumber)==-1){
              this.randomTopics.push(this.randomNumber);
            }
          }
        }
      }
      notificationListTile:string[]=[];
      notificationListDate:string[]=[];
      notificationListComment:string[]=[];
      notificationListType:string[]=[];
      counter:number=0;
      amount:number=3;
      showNotifications(){
        this.amount=this.lastAddedList.length;
        this.notificationsHidden=false;
        this.emptyHidden=true;
        this.counter=0;
        this.notificationsHidden=false;
        console.log(this.lastAddedList.length);
        for(var i=0; i< this.lastAddedList.length; i++){
          if(this.lastAddedList[i].type=="meeting"){
            console.log(this.meeting[this.lastAddedList[i].number].name);
              this.notificationListTile[this.counter]=this.meeting[this.lastAddedList[i].number].name;
              this.notificationListComment[this.counter]="topics: " +this.meeting[this.lastAddedList[i].number].topics;
              this.notificationListDate[this.counter]=this.meeting[this.lastAddedList[i].number].date;
              this.notificationListType[this.counter]="meeting";
          }else if(this.lastAddedList[i].type=="topic"){
              this.notificationListTile[this.counter]=this.topicList[this.lastAddedList[i].number].name;
              this.notificationListComment[this.counter]="kleur: " +this.topicList[this.lastAddedList[i].number].color;
              this.notificationListDate[this.counter]=""
              this.notificationListType[this.counter]="topic";
          }
          else if(this.lastAddedList[i].type=="member"){
              this.notificationListTile[this.counter]=this.membersList[this.lastAddedList[i].number].name;
              this.notificationListComment[this.counter]="nummer: " +this.membersList[this.lastAddedList[i].number].number;
              this.notificationListDate[this.counter]=""
              this.notificationListType[this.counter]="deelnemer";
          }
          this.counter++;
          // this.notificationList.push(this.text);
        console.log(this.lastAddedList);
        console.log(this.notificationListTile[this.amount-1]);
        }
      }
      emptyCommentaryList:number[]=[];
      notificationsHidden:boolean=false;
      emptyHidden:boolean=true;
      emptyCommentary(){
        this.notificationsHidden=true;
        this.emptyHidden=false;
        this.emptyHidden=false;
        for(var i=0; i<this.meeting.length; i++){
          console.log(this.meeting[i].commentary+'.')
            if(this.meeting[i].commentary== "Algemeen commentaar: "){
                this.emptyCommentaryList.push(i);
            }
        }
      }
}
