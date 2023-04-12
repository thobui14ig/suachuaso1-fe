import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { CHAT } from "../types/chat.type";
import { ResponseLogin } from "../types/auth.type";



@Injectable({
    providedIn: 'root'
})
export class AuthApi{
    private url = '/auth'
    constructor(private api: ApiService){

    }

    login (user: { name: string; password: string }){
        return this.api.post<ResponseLogin>(`${this.url}/login`, user);
    }
}