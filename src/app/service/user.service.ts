import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private API_URL:string = environment.apiUrl;

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.API_URL +'/users')
  }

  getUser(): Observable<User>{
    return this.http.get<User>(this.API_URL +'/users/1')
  }

  chrateUser(user:User) : Observable<User>{
    return this.http.post<User>(this.API_URL+'/users',user);
  }

  updateUser(user:User) : Observable<User>{
    return this.http.put<User>(this.API_URL+'/users/'+user.id,user);
  }

  patchUser(user:User) : Observable<User>{
    console.log('start patching');
    return this.http.patch<User>(this.API_URL+'/users/'+user.id,user);
  }

  deleteUser(id:number) : Observable<boolean>{
    console.log('start patching');
    return this.http.delete<boolean>(this.API_URL+'/users/'+id);
  }


}
