import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  
  topicsHidden: boolean = false;
  membersHidden: boolean = false;
  meetingsHidden: boolean = false;
  startHidden: boolean = false;
  // myLinksVisuability: boolean = true;
  // page: string = 'Home';
  
  @Input() active: string = '';
  @Output() naarBoven: EventEmitter<string> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void {}

  openPage(page: string) {
    this.naarBoven.emit(page);
  }

  // openTopics(){
  //   this.naarBoven.emit("topics");
  //   this.topicsHidden = true;
  //   this.membersHidden = false;
  //   this.meetingsHidden = false;
  //   this.startHidden = false;
  // }
  // openMembers(){
  //   this.naarBoven.emit("members");
  //   this.topicsHidden = false;
  //   this.membersHidden = true;
  //   this.meetingsHidden = false;
  //   this.startHidden = false;
  // }
  // openMeetings(){
  //   this.naarBoven.emit("meetings");
  //   this.topicsHidden = false;
  //   this.membersHidden = false;
  //   this.meetingsHidden = true;
  //   this.startHidden = false;
  // }
  // openLinks() {
  //   this.myLinksVisuability = !this.myLinksVisuability;
  // }
  // openHome() {
  //   this.naarBoven.emit("home");
  //   this.startHidden = true;
  //   this.topicsHidden = false;
  //   this.membersHidden = false;
  //   this.meetingsHidden = false;
  //   // this.myLinksVisuability = true;
  //   // this.page = "Home"
  // }
  
}
