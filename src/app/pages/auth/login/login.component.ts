import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  name = 'admin';
  password = '111111';
  error = ''

  constructor(private router: Router, private authService: AuthenticationService,private userService: UserService) { }

  async login() {
    const { data } = await this.authService.login(this.name, this.password)
    if(data){
      this.userService.setUser(data?.user, data?.accessToken)

      this.router.navigate(['/']);
      return
    }else{
      alert('Thất bại')
    }
  }
}
