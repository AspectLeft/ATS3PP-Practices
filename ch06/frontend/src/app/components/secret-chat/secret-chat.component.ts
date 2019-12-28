import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChatMessagesService} from '../../services/chat-messages.service';

@Component({
  selector: 'atsp-secret-chat',
  templateUrl: './secret-chat.component.html',
  styleUrls: ['./secret-chat.component.scss']
})
export class SecretChatComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  messages: string[] = [];
  CurrentMessage: string;
  constructor(private chatMessagesService: ChatMessagesService) { }

  ngOnInit() {
    this.messages = [];
    this.subscription = this.chatMessagesService.GetMessages('secret').subscribe((msg: string) => {
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
