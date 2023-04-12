import { Component, Input } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { ChatService } from '../../chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-online',
  templateUrl: './user-online.component.html',
  styleUrls: ['./user-online.component.scss']
})
export class UserOnlineComponent {
  @Input() handleAddMessage!: Function;
  @Input() setRoomId!: Function;
  @Input() context: any;

  messages: any[] = [];

  constructor(private apiService: ApiService, private chatService: ChatService, private router: Router) {
    
  }

  async ngOnInit(): Promise<any> {
    await this.apiService.get<any>('/chat-room/list-rooms/63e51c066c87521b8473125e')
    .then(async (dataChats) => {
      if (dataChats.data.listChats?.length > 0) {
        const data = await Promise.all(
          dataChats.data?.listChats.map(async (item: any) => {
            let isRead;
            if (!item?.chatUser?.isRead) {
              isRead = false;
            } else {
              isRead = item?.chatUser?.isRead;
            }

            if (item?.type === 'user') {
              return {
                id: item._id,
                name: 'Chưa lấy tên',
                type: item.type,
                isRead,
                message: item?.messages?.content,

              };
            }
            return {
              id: item._id,
              name: item.name,
              type: item.type,
              isRead,
              message: item?.messages?.content,
            };
          }),
        );

        this.messages = data

        return
      }
      this.messages = []
    })
    .catch((error) => {
      console.error(error);
    });
  }

  handleAdd(){
    this.context.setRoomId(new Date().getTime())
  }

  selectMessage(room: any) {
    this.router.navigate([`chat/${room?.id}`]);
  }
  
}
