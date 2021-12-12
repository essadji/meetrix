import { Component, OnInit } from '@angular/core';
import { LastAddedService } from '../last-added.service';
import { MembersInfoInterface } from '../members-info-interface';
import { MembersInterface } from '../members-interface';
import { MembersServiceService } from '../members-service.service';
import { NotificationInterface } from '../notification-interface';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  membersList:MembersInterface[]=[];
  membersInfoList:MembersInfoInterface[]=[];
  lastAddedList:NotificationInterface[]=[];
  constructor(public memberService:MembersServiceService, public lasAdded:LastAddedService) { 
    this.membersList=memberService.memberList;
    this.membersInfoList=memberService.membersInfo;
    this.lastAddedList=lasAdded.lastAddedList;
  }

  showList:number[]=[];
  ngOnInit(): void {
    for(var i=0; i<this.membersList.length; i++){
      this.showList.push(i);
    }
  }
  
  addTopic(x:string, y:string){
    if(x ==""||y==""){
      alert("vul waarde in");
    }
    else{
      this.membersList.push({"number":x,"name":y});
      this.lastAddedList.push({type:"member", number: this.membersList.length-1});
    }
    
  }
  inputHidden:boolean=true;
  orderValue:string="";
  changeOrder(x:string){
    console.log(x);
    if(x =="default"){
      this.inputHidden=true;
      this.orderValue = x;
    }
    else if(x =="naam"){
      this.inputHidden=false;
      this.orderValue=x;
    }
    else if(x =="nummer"){
      this.inputHidden=false;
      this.orderValue=x;
    }
  }
  nameExist:boolean=false;
  numberExist:boolean=false;
  search(input:string){
    this.showList=[];
    for(var i=0; i<this.membersList.length; i++){
      this.nameExist = this.membersList[i].name.includes(input);
      this.numberExist = this.membersList[i].number.includes(input);
      if(this.nameExist==true || this.numberExist==true){
        this.showList.push(i);
      }
    }
  }
  showMoreHidden = true;
  showInfoString:string="";
  showInfo(number:string){
    for(let i=0; i<this.membersInfoList.length;i++){
      if(number == this.membersInfoList[i].number){
        this.showInfoString= this.membersList[i].name + " met nummer " + this.membersInfoList[i].number + " nam deel aan "+ this.membersInfoList[i].amount + " meetings";
      }
    }
    this.showMoreHidden=false;
  }
  closeFunction(){
  this.showMoreHidden=true;
  }

  memberHidden:boolean=false;
  addHidden:boolean=true;
  searchHidden:boolean=true;
  visuable:string="Alle deelnemers";
  showMembers(){
    this.memberHidden=false;
    this.addHidden=true;
    this.searchHidden=true;
    this.visuable="Alle deelnemers"
   }
   showAdd(){
    this.memberHidden=true;
    this.addHidden=false;
    this.searchHidden=true;
    this.visuable="Voeg deelnemer toe"
   }
   showSearch(){
    this.memberHidden=true;
    this.addHidden=true;
    this.searchHidden=false;
    this.visuable="Zoeken"
   }
  searchTopic(input:string){
    this.showList=[];
   for(var i=0; i<this.membersList.length; i++){
     this.nameExist= this.membersList[i].name.includes(input);
     this.numberExist=this.membersList[i].number.includes(input)
     if(this.nameExist==true || this.numberExist==true){
         this.showList.push(i);
        }
       }
  }
}
