import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './pages/user/user.service';
import { UserInfoType } from './types/user.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = true;
  user: UserInfoType | null = null;

  constructor(public router: Router, private userService: UserService){}

  ngOnInit(): void {
    this.userService.getUserObservable().subscribe((user: UserInfoType) => {
      const userLocal = this.userService.getUser()
      if(userLocal){
        this.user = userLocal
        return
      }
      this.user = user; // Cập nhật giá trị người dùng khi BehaviorSubject thay đổi
    });
  }

  logout(){
    this.userService.clearUser()
    this.router.navigate(['/login']);
  }

}
