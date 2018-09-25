import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputChatBoxComponent } from './input-chat-box/input-chat-box.component';
import { ChatRoomBlueComponent } from './chat-room-blue/chat-room-blue.component';
import { ChatRoomRedComponent } from './chat-room-red/chat-room-red.component';
import { ChatRoomGreenComponent } from './chat-room-green/chat-room-green.component';
import {AdminMessageService} from './admin-message/admin-message.service';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    InputChatBoxComponent,
    ChatRoomBlueComponent,
    ChatRoomRedComponent,
    ChatRoomGreenComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdminMessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
