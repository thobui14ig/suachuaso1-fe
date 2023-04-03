import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { UserOnlineComponent } from './chat/components/user-online/user-online.component';
import { ChatBodyComponent } from './chat/components/chat-body/chat-body.component';
import { ApiService } from './api/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ChatComponent,
    ChatBodyComponent,
    UserOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
