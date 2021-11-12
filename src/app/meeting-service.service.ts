import { Injectable } from '@angular/core';

interface meeting {
  date:string;
  name:string;
  attendees:string[];
}

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {

  constructor() { }
  meetingList:meeting[] =[
    {date: '12/04/201', name: "Examen", attendees:['bjarne', 'Robbe', 'Maarten']},
    {date: '12/11/2021', name: "Netwerken", attendees:['Robbe', 'Jonas']}
  ] ;
}
