import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
    private selectedMessageId = new BehaviorSubject<string|null>(null);
    selectedMessageId$ = this.selectedMessageId.asObservable();

    private roomName = new BehaviorSubject<string|null>(null);
    roomName$ = this.roomName.asObservable();
  
    getRoom(messageId: string) {
      this.selectedMessageId.next(messageId);
    }

    setRoom(room: any) {
      this.roomName.next(room.name);
      this.selectedMessageId.next(room.id);
    }
}