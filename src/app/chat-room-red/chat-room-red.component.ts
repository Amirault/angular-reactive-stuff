import { Component, OnInit } from '@angular/core';
import {AdminMessageService} from '../admin-message/admin-message.service';

@Component({
  selector: 'app-chat-room-red',
  templateUrl: './chat-room-red.component.html',
  styleUrls: ['./chat-room-red.component.css']
})
export class ChatRoomRedComponent implements OnInit {

  _messages : String[];

  constructor(adminMessage : AdminMessageService) {
    this._messages = [];
    adminMessage.message().subscribe(message => this._messages.push(message));
  }

  ngOnInit() {

  }

}
