import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private router: Router) { }

  login() {
    // Xử lý đăng nhập ở đây
    
    // Sau khi đăng nhập thành công, chuyển hướng đến trang Home
    this.router.navigate(['/']);
  }
}
