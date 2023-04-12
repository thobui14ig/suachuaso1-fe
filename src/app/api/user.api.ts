import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { CHAT } from "../types/chat.type";
import { UserInfoType } from "../types/user.type";


@Injectable({
    providedIn: 'root'
  })
export class UserApi{
    private url = '/users'
    constructor(private api: ApiService){

    }
    getUser(id: string) {
        return this.api.get<UserInfoType>(`${this.url}/${id}`)
    }
}