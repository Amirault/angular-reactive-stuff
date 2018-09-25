import {Component, Inject, OnInit} from '@angular/core';
import {AdminMessageService} from '../admin-message/admin-message.service';

@Component({
  selector: 'app-input-chat-box',
  templateUrl: './input-chat-box.component.html',
  styleUrls: ['./input-chat-box.component.css']
})
export class InputChatBoxComponent implements OnInit {

  constructor(private adminMessage: AdminMessageService) {
  }

  ngOnInit() {
  }


  public sendAlertCloseRoom() {
    this.adminMessage.publishNewMessage('Good bye everyone, your room is now closed!');
  }
}
