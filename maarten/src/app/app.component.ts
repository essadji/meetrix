import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
// <<<<<<< Maarten
  title = 'meetricks';

  openPagina :string =" ";

  topicsHidden:boolean = true;
  membersHidden:boolean = true;
  meetingsHidden:boolean = true;
  startHidden:boolean = false;
  
  leesIn(x:string){
    this.openPagina=x
    console.log(this.openPagina);

    if(this.openPagina == "topics"){
      this.topicsHidden = false;
      this.membersHidden=true;
      this.meetingsHidden= true;
      this.startHidden = true;
    }
    else if(this.openPagina == "members"){
      this.topicsHidden = true;
      this.membersHidden=false;
      this.meetingsHidden= true;
      this.startHidden = true;
    }
    else if(this.openPagina == "meetings"){
      this.topicsHidden = true;
      this.membersHidden=true;
      this.meetingsHidden= false;
      this.startHidden = true;
    }
    else if(this.openPagina == "start"){
      this.topicsHidden = true;
      this.membersHidden=true;
      this.meetingsHidden= true;
      this.startHidden = false;
    }
    
// >>>>>>> master
  }
}

