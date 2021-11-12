import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  topicsHidden:boolean = false;
  membersHidden:boolean = false;
  meetingsHidden:boolean = false;

  ngOnInit(): void {
  }
  @Output() naarBoven:EventEmitter<string>=new EventEmitter();
  openTopics(){
    this.naarBoven.emit("topics");
    this.topicsHidden = true;
    this.membersHidden = false;
    this.meetingsHidden = false;
  }
  openMembers(){
    this.naarBoven.emit("members");
    this.topicsHidden = false;
    this.membersHidden = true;
    this.meetingsHidden = false;
  }
  openMeetings(){
    this.naarBoven.emit("meetings");
    this.topicsHidden = false;
    this.membersHidden = false;
    this.meetingsHidden = true;
  }
}
