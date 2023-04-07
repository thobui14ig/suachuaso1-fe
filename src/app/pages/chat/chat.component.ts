import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  title = 'hello-world';
  roomId: number = 0;
  roomName: string = '';


  public handleAddMessage(){
    alert()
  }

  setRoomId(roomId: number){
    this.roomId = roomId
  }
}
