import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
    private selectedMessageIdSource = new BehaviorSubject<string>('');
    selectedMessageId$ = this.selectedMessageIdSource.asObservable();
  
    setSelectedMessageId(messageId: string) {
      this.selectedMessageIdSource.next(messageId);
    }
}