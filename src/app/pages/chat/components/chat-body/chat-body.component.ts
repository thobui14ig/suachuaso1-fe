import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApi } from 'src/app/api/user.api';
import { TYPE_CHAT } from 'src/app/enum/chat.enum';
import { MESSAGE } from 'src/app/types/chat.type';
import { UserInfoType } from 'src/app/types/user.type';
import { ChatService } from '../../chat.service';
import { ChatApi } from './../../../../api/chat.api';
import { UserService } from './../../../user/user.service';


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
  user: null | UserInfoType = null

  constructor(private chatService: ChatService, private chatApi: ChatApi, private userService: UserService, private route: ActivatedRoute, private userApi: UserApi) {}

  ngOnInit() {
    this.user = this.userService.getUser()

    this.route.paramMap.subscribe(async(params) => {
      // Lấy giá trị của tham số 'id' từ URL
      const roomId = params.get('id');
      if(roomId){
        const { data } = await this.chatApi.getMessages(roomId)
        const { type, _id, users } = data
      

        if(type === TYPE_CHAT.user){
          const userSelected = users.find((item) => item !== this.user?._id)
          const userInfo = await this.userApi.getUser(userSelected as string)
          this.roomName = `${userInfo.data.name}`;
        }

        if(type === TYPE_CHAT.group){
          const { data } = await this.chatApi.getRoom(_id)
          this.roomName = `${data.name}`;
        }
        this.messages = data.messages   
      }

    });
    // this.chatService.roomName$.subscribe((roomName) => {
    //   if (roomName) {
    //     this.roomName = `${roomName}`;
    //   } else {
    //     this.roomName = 'Chưa chọn tin nhắn nào.';
    //   }
    // });
  }
} 
