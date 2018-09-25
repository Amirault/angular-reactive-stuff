import { Component, OnInit } from '@angular/core';
import {AdminMessageService} from '../admin-message/admin-message.service';

@Component({
  selector: 'app-chat-room-blue',
  templateUrl: './chat-room-blue.component.html',
  styleUrls: ['./chat-room-blue.component.css']
})
export class ChatRoomBlueComponent implements OnInit {

  _messages : String[];

  constructor(adminMessage : AdminMessageService) {
    this._messages = [];
    adminMessage.message().subscribe(message => this._messages.push(message));
  }

  ngOnInit() {

  }

}
