import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meetrix';
  active = "welcome";
  activate(x:any){
    console.log(x)
    this.active = x;
  }
}
