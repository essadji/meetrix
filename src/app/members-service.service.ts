import { Injectable } from '@angular/core';
import { Member } from './member';
import { MembersInfoInterface } from './members-info-interface';
import { MembersInterface } from './members-interface';

@Injectable({
  providedIn: 'root'
})
export class MembersServiceService {

  constructor() { }
  
  members:Member[] =[
    {number: 'r08428', name: "Maarten"},
    {number: 'r08782', name: "Lennert"}
  ] ;
  memberList: MembersInterface[] = [
    { number: 'r08428', name: "Maarten" },
    { number: 'r08782', name: "Jonas" },
    { number: 'r28591', name: "Bjarne" },
    { number: 'r12458', name: "Robbe" },
    { number: 'r48281', name: "Pratik" },
  ];
  membersInfo: MembersInfoInterface[] = [
    { number: 'r08428', amount: 2 },
    { number: 'r08782', amount: 5 },
    { number: 'r28591', amount: 2 },
    { number: 'r12458', amount: 6 },
    { number: 'r48281', amount: 0 },
  ]
}
