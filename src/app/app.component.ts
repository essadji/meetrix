import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Meetrix';
  active: string = '';

  go(x: string) {
    this.active = x;
    // if (this.openPagina == 'topics') {
    //   this.topicsHidden = false;
    //   this.membersHidden = true;
    //   this.meetingsHidden = true;
    //   this.divHidden = true;
    //   this.startHidden = true;
    // } else if (this.openPagina == 'members') {
    //   this.topicsHidden = true;
    //   this.membersHidden = false;
    //   this.meetingsHidden = true;
    //   this.divHidden = true;
    //   this.startHidden = true;
    // } else if (this.openPagina == 'meetings') {
    //   this.topicsHidden = true;
    //   this.membersHidden = true;
    //   this.meetingsHidden = false;
    //   this.divHidden = true;
    //   this.startHidden = true;
    // } else if (this.openPagina == 'start') {
    //   this.topicsHidden = true;
    //   this.membersHidden = true;
    //   this.meetingsHidden = true;
    //   this.startHidden = false;
    //   this.startHidden = true;
    // }
  }
}
