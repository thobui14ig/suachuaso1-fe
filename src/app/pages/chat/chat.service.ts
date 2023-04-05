import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
    private selectedMessageIdSource = new BehaviorSubject<string>('');
    selectedMessageId$ = this.selectedMessageIdSource.asObservable();

    private roomName = new BehaviorSubject<string>('');
    roomName$ = this.roomName.asObservable();
  
    getRoom(messageId: string) {
      this.selectedMessageIdSource.next(messageId);
    }

    setRoom(room: any) {
      this.roomName.next(room.name);
      this.selectedMessageIdSource.next(room.id);
    }
}