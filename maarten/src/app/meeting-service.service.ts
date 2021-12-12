import { Injectable } from '@angular/core';
import { meeting} from './meeting';


@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {

  constructor() { }
  meetingList:meeting[] =[
    {date: '2018-04-12', name: "Examen", topics:'Corona', attendees:['Bjarne', 'Robbe', 'Maarten'],commentary:"Algemeen commentaar: goede samenwerking"},
    {date: '2021-11-12', name: "Netwerken", topics:'Examens' ,attendees:['Robbe', 'Jonas'], commentary:"Algemeen commentaar: goed"},
    {date: '2021-11-12', name: "examens juli", topics:'Examens' ,attendees:['Robbe', 'Maarten'], commentary:"Algemeen commentaar: makkelijke examens"},
    {date: '2021-11-12', name: "Segers", topics:'Leerkrachten' ,attendees:['Jonas', 'Bjarne'], commentary:"Algemeen commentaar: ontslaan"},
    {date: '2021-11-12', name: "Netwerken", topics:'Examens' ,attendees:['Robbe', 'Jonas'], commentary:"Algemeen commentaar: goed"},
    {date: '2021-11-12', name: "Netwerken", topics:'Examens' ,attendees:['Robbe', 'Jonas'], commentary:"Algemeen commentaar: goed"},
    {date: '2021-11-12', name: "Netwerken", topics:'Examens' ,attendees:['Robbe', 'Jonas'], commentary:"Algemeen commentaar: goed"},
  ] ;
}
