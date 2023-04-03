import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  // abc: string;
  title = 'hello-world';
  roomId: number = 0;


  public handleAddMessage(){
    alert()
  }

  setRoomId(roomId: number){
    this.roomId = roomId
  }
}
