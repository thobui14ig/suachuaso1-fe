import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  name = '';
  password = '';
  error = ''

  constructor(private router: Router, private authService: AuthenticationService) { }

  async login() {
    const { data } = await this.authService.login(this.name, this.password)
    if(data){
      this.router.navigate(['/']);
      return
    }
    alert('Thất bại')
    // Xử lý đăng nhập ở đây
    
    // Sau khi đăng nhập thành công, chuyển hướng đến trang Home
   
  }
}
