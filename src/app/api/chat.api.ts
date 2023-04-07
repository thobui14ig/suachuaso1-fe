import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { CHAT } from "../types/chat.type";


@Injectable({
    providedIn: 'root'
  })
export class ChatApi{
    private url = '/chat-room'
    constructor(private api: ApiService){

    }
    getMessages(roomId: string){
        return this.api.get<CHAT>(`${this.url}/get-messages/${roomId}/0`)
    }
}