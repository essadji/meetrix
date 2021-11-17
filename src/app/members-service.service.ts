import { Injectable } from '@angular/core';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class MembersServiceService {

  constructor() { }
  
  memberList:Member[] =[
    {number: 'r08428', name: "Maarten"},
    {number: 'r08782', name: "Lennert"}
  ] ;
}
