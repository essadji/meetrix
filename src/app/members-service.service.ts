import { Injectable } from '@angular/core';

interface member {
  number:string;
  name:string;
}
@Injectable({
  providedIn: 'root'
})
export class MembersServiceService {

  constructor() { }
  
  memberList:member[] =[
    {number: 'r08428', name: "Maarten"},
    {number: 'r08782', name: "Lennert"}
  ] ;
}
