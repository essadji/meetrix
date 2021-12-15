import { Injectable } from '@angular/core';
import { meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {

  constructor() { }

  meetingList: meeting[] = [
    { date: '2018-04-12', name: "Examen", topics: 'Corona', attendees: ['Bjarne', 'Robbe', 'Maarten'], commentary: "Algemeen commentaar: goede samenwerking" },
    { date: '2021-11-13', name: "Netwerken", topics: 'Examens', attendees: ['Robbe', 'Jonas'], commentary: "Algemeen commentaar: goed" },
    { date: '2021-11-12', name: "examens juli", topics: 'Examens', attendees: ['Robbe', 'Maarten'], commentary: "Algemeen commentaar: makkelijke examens" },
    { date: '2021-11-14', name: "Netwerken2", topics: 'Examens', attendees: ['Robbe', 'Jonas'], commentary: "Algemeen commentaar: goed" },
    { date: '2021-11-12', name: "Netwerken", topics: 'Examens', attendees: ['Robbe', 'Jonas'], commentary: "Algemeen commentaar: goed" },
    { date: '2021-11-16', name: "Netwerken", topics: 'Examens', attendees: ['Robbe', 'Jonas'], commentary: "Algemeen commentaar: goed" },
  ];
  // OPGELET: wanneer er meerdere meetings zijn met zowel identieke datum als naam, geeft het wijzigen van de commentaren problemen!
}
