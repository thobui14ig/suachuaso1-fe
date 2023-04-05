import { Component, Input } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent {
  @Input()  title!: string;
  @Input()  roomId!: number;
  messageContent!: string;

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.roomName$.subscribe((roomName) => {
      if (roomName) {
        this.messageContent = `${roomName}`;
      } else {
        this.messageContent = 'Chưa chọn tin nhắn nào.';
      }
    });
  }

  
} 
