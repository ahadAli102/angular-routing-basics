import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  email: string = ''
  name: string = ''

  constructor(private userService: UserService) { }

  login() {
    this.userService.validateLogin(this.email, this.name).subscribe((users) =>{
      if(users.length > 0){
        console.log('Conform login',users);
      }
      else{
        console.log('no user exists');
      }
    });
  }

}
