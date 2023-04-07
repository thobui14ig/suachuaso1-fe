import { ChatApi } from './../../../../api/chat.api';
import { Component, Input } from '@angular/core';
import { ChatService } from '../../chat.service';
import { MESSAGE } from 'src/app/types/chat.type';
import { distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.scss']
})
export class ChatBodyComponent {
  @Input()  title!: string;
  @Input()  roomId!: number;
  roomName!: string;
  messages!: MESSAGE[];

  constructor(private chatService: ChatService, private chatApi: ChatApi) {}

  ngOnInit() {
    this.chatService.roomName$.subscribe((roomName) => {
      if (roomName) {
        this.roomName = `${roomName}`;
      } else {
        this.roomName = 'Chưa chọn tin nhắn nào.';
      }
    });

    this.chatService.selectedMessageId$.pipe(
      distinctUntilChanged()
    ).subscribe(async (roomId) => {
        const { data } = await this.chatApi.getMessages(roomId)
        this.messages = data.messages
        console.log(9999, data.messages)
    
    });
  }

  
} 
