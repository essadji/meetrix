import { Component, OnInit } from '@angular/core';
import { Meeting } from '../meeting';
import { MeetingServiceService } from '../meeting-service.service';


@Component({
  selector: 'meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
meetings:Meeting[] = [];
  constructor(public meetingService: MeetingServiceService) {
    this.meetings = this.meetingService.meetingList;
   }

  ngOnInit(): void {
  }

}
