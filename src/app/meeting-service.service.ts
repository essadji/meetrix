import { Injectable } from '@angular/core';
import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {

  constructor() { }
  meetingList:Meeting[] = [
    { date: '12/04/201', name: "Examen", attendees: ['bjarne', 'Robbe', 'Maarten'] },
    { date: '12/11/2021', name: "Netwerken", attendees: ['Robbe', 'Jonas'] }
  ];
}
