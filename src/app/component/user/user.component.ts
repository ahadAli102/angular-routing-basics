import { Component } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  showUser = false;

  allUsers: User[] = []

  private newUser: any = {
    name: 'Ahad Ali',
    username: 'Ali',
    email: 'ahad.a@gmail.com',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  private updateUser: User = {
    id: 1,
    name: 'Abdullah Al',
    username: 'Abdullah',
    email: 'abdullah.a@gmail.com',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  };

  private patchUser: any = {
    id: 2,
    name: 'Abdullah Al',
    username: 'Abdullah',
    email: 'abdullah.a@gmail.com',

  };



  constructor(private userService: UserService) { }

  ngAfterViewInit(): void {
    /*
    type HttpResponse = {code:number, data:string};
    const observable = new Observable<HttpResponse>(subscriber =>{
      console.log('Inside subscriber');
      subscriber.next({code:200,data:'this is data1...'});
      subscriber.next({code:200,data:'this is data2...'});
      subscriber.next({code:200,data:'this is data3...'});
      // subscriber.error({code:500,mgs:'An error occure'});
      subscriber.next({code:200,data:'this is data4...'});
      setTimeout(() => {
        subscriber.next({code:200,data:'this is more data...'});
        subscriber.complete();
      }, 5 * 1000);
      console.log('subscriber is done emmiting');
    });
    observable.subscribe({
      next(response: HttpResponse) {
        console.log('got response',response);
      },error(message:any) {
        console.log('got error',message);
      },complete() {
        console.log('complete all response');
      }
    });
    */

  }

  ngOnInit(): void {
    this.onGetUsers();
    // this.onAddUser(this.newUser);
    // this.onUpdateUser(this.updateUser);
    // this.onPatchUser();
    // this.onDeleteUser(5);
  }

  onGetUsers(): void {
    const ref = this;
    this.userService.getUsers().subscribe({
      next(response: User[]) {
        ref.showUser = response.length > 0;
        ref.allUsers = response;
        // console.log('users got response',response);
      }, error(message: any) {
        // console.log('users got error',message);
      }, complete() {
        // console.log('users complete all response');
      }
    })
  }

  onGetUser(): void {
    const ref = this;
    this.userService.getUser().subscribe({
      next(response: User) {
        // console.log('user got response',response);
      }, error(message: any) {
        // console.log('user got error',message);
      }, complete() {
        // console.log('user complete all response');
      }
    })
  }

  onAddUser(user: User): void {
    const ref = this;
    this.userService.chrateUser(user).subscribe({
      next(response: User) {
        ref.allUsers.push(response);
        // console.log('new user got response',response,ref.allUsers);
      }, error(message: any) {
        // console.log('new user got error',message);
      }, complete() {
        // console.log('new user complete');
      }
    })
  }

  onUpdateUser(user: User): void {
    const ref = this;
    this.userService.updateUser(user).subscribe({
      next(response: User) {
        // console.log('update user got response',response);
        let index = -1;
        ref.allUsers.forEach((user, i) => {
          if (user.id === response.id) {
            index = i;
          }
        })
        ref.allUsers[index] = response;
        // console.log('update user got response final json',ref.allUsers);
      }, error(message: any) {
        // console.log('update user got error',message);
      }, complete() {
        // console.log('update user complete');
      }
    })
  }

  onPatchUser(): void {
    console.log('patch');
    const ref = this;
    this.userService.patchUser(ref.patchUser).subscribe({
      next(response: User) {
        console.log('patch user got response', response);
        let index = -1;
        ref.allUsers.forEach((user, i) => {
          if (user.id === response.id) {
            index = i;
          }
        })
        ref.allUsers[index] = response;
        // console.log('update user got response final json',ref.allUsers);
      }, error(message: any) {
        console.log('patch user got error', message);
      }, complete() {
        console.log('patch user complete');
      }
    })
  }

  onDeleteUser(id: number): void {
    const ref = this;
    this.userService.deleteUser(ref.patchUser).subscribe({
      next(response: boolean) {
        console.log('delete user got response', response);

        if (response) {
          let index = -1;
          ref.allUsers.forEach((user, i) => {
            if (user.id === id) {
              index = i;
            }
          })

          ref.allUsers.splice(index, 1);
        }

        // console.log('update user got response final json',ref.allUsers);
      }, error(message: any) {
        console.log('patch user got error', message);
      }, complete() {
        console.log('patch user complete');
      }
    })
  }

}
