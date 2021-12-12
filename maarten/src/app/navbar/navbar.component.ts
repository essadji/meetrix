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
  myLinksVisuability:boolean=true;
  page:string="Home";
  ngOnInit(): void {
  }
  @Output() naarBoven:EventEmitter<string>=new EventEmitter();
  openTopics(){
    this.naarBoven.emit("topics");
    this.myLinksVisuability=true;
    this.page="Topics"
  }
  openMembers(){
    this.naarBoven.emit("members");
    this.myLinksVisuability=true;
    this.page= "Deelnemers"
  }
  openMeetings(){
    this.naarBoven.emit("meetings");
    this.myLinksVisuability=true;
    this.page="Vergaderingen"
  }
  openLinks(){
    this.myLinksVisuability =! this.myLinksVisuability;
  }
  openStart(){
    this.naarBoven.emit("start");
    this.myLinksVisuability=true;
    this.page="Home"
  }
}

