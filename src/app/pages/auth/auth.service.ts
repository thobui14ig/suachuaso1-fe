// authentication.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthApi } from 'src/app/api/auth.api';
import { ResponseLogin } from 'src/app/types/auth.type';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://example.com/api'; // Thay đổi URL API tại đây

  constructor(private http: HttpClient, private authApi: AuthApi) { }

  async login(name: string, password: string) {
    return this.authApi.login({ name, password })
  }

  // Các phương thức khác liên quan đến xử lý đăng nhập (ví dụ: đăng xuất, kiểm tra trạng thái đăng nhập, v.v.)
}
