import { Component, OnInit } from '@angular/core';
import {AdminMessageService} from '../admin-message/admin-message.service';

@Component({
  selector: 'app-chat-room-green',
  templateUrl: './chat-room-green.component.html',
  styleUrls: ['./chat-room-green.component.css']
})
export class ChatRoomGreenComponent implements OnInit {

  _messages : String[];

  constructor(adminMessage : AdminMessageService) {
    this._messages = [];
    adminMessage.message().subscribe(message => this._messages.push(message));
  }

  ngOnInit() {

  }
}
