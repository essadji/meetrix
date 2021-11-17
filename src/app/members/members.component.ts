import { Component, OnInit } from '@angular/core';
import { MembersServiceService } from '../members-service.service';

@Component({
  selector: 'members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public memberService: MembersServiceService) { }

  ngOnInit(): void {
  }
  addTopic(x: string, y: string) {
    this.memberService.memberList.push({ "number": x, "name": y });
  }
}
