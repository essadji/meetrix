import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MembersServiceService {

  constructor() { }
  
  memberList:object[] =[
    {number: 'r08428', name: "Maarten"},
    {number: 'r08782', name: "Lennert"}
  ] ;
}
