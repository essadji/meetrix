import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topic/topic.component';
import { MemberComponent } from './member/member.component';

import { MenuComponent } from './menu/menu.component';

import { HttpClientModule } from '@angular/common/http'; // IMPORTANT !!!
import { WebComponent } from './web/web.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    MeetingsComponent,
    TopicsComponent,
    TopicComponent,
    MemberComponent,
    MenuComponent,
    WebComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
    HttpClientModule  // ALSO IMPORTANT !!!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
