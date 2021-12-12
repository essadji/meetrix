import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

@Output() active:EventEmitter<string> = new EventEmitter();
items:string[] = ["main","meetings","members"];
activate($event:any){
  this.active.emit($event.target.innerHTML)
}
  ngOnInit(): void {
  }

}
