import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfoType } from 'src/app/types/user.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userKey = 'user'; // Khóa lưu trữ thông tin người dùng trong localStorage
  private token = 'token'
  private userSubject = new BehaviorSubject<any>(null);

  constructor() { }

  setUser(user: any, token: string): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
    localStorage.setItem(this.token, JSON.stringify(token));
    this.userSubject.next(user);
  }

  getUser(): UserInfoType {
    const userString = localStorage.getItem(this.userKey);
    return JSON.parse(userString as string);
  }

  clearUser(): void {
    localStorage.removeItem(this.userKey);
  }

  getUserObservable(): any {
    return this.userSubject.asObservable() // Trả về BehaviorSubject như một Observable để có thể theo dõi sự thay đổi từ các thành phần khác
  }
}
