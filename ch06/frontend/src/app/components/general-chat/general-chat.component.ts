import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatMessagesService} from '../../services/chat-messages.service';

@Component({
  selector: 'atsp-general-chat',
  templateUrl: './general-chat.component.html',
  styleUrls: ['./general-chat.component.scss']
})
export class GeneralChatComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private chatMessagesService: ChatMessagesService) { }
  CurrentMessage: string;
  messages: string[] = [];
  ngOnInit() {
    this.subscription = this.chatMessagesService.GetMessages('').subscribe((msg: string) =>{
      this.messages.push(msg);
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  SendMessage(): void {
    this.chatMessagesService.SendMessage(this.CurrentMessage);
    this.CurrentMessage = '';
  }
}
