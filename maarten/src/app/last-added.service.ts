import { Injectable } from '@angular/core';
import { NotificationInterface } from './notification-interface';

@Injectable({
  providedIn: 'root'
})
export class LastAddedService {
  
  constructor() { }

  lastAddedList:NotificationInterface[]=[
    {type:"meeting", number: 6},
    {type:"topic", number: 1},
    {type:"member", number: 1}
  ];
}
