import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {

  constructor(private userService: UserService) { }

  newUser: User = {
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  };

  rating!: number


  submitUser(userForm: NgForm) {
    console.log('add user', this.newUser);
    this.userService.chrateUser(this.newUser).subscribe((data) => {
      console.log('user added', data);
      // userForm.resetForm();
      userForm.resetForm({
        name: 'new user',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      })
    });
  }
}
