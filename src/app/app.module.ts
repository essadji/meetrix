import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MembersComponent } from './members/members.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicComponent } from './topic/topic.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MembersComponent,
    MeetingsComponent,
    TopicsComponent,
    TopicComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
