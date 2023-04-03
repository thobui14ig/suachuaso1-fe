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
    this.chatService.selectedMessageId$.subscribe((messageId) => {
      if (messageId) {
        console.log(33333, messageId)
        // Lấy nội dung của tin nhắn từ server bằng ID của tin nhắn
        this.messageContent = `${messageId}`;
      } else {
        this.messageContent = 'Chưa chọn tin nhắn nào.';
      }
    });
  }

  
} 
