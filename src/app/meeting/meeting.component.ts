import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})
export class MeetingComponent implements OnInit {

  constructor(public meetingService:MeetingServiceService) { }

  ngOnInit(): void {
  }

}
