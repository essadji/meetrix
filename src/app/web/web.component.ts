import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  constructor(public api: ApiService) { }
  test1: any = 'none';
  test2: any = '';
  test3: any = '';
  ngOnInit(): void {
    this.api.string_api().subscribe(
      (res) => {
        this.test1 = res;
        // this.api.json_api().subscribe(
        //   (res) => { this.test2 = res; }
        // )
      }
    )
    this.api.json_api().subscribe(
      (res) => {
        this.test2 = res;
    
      }
    )
    this.api.local_api().subscribe(
      (res) => {
        this.test3 = res;
    
      }
    )
  }

}
