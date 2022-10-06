import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { IUserLogin } from '../interfaces/i-user-login';
import { USER_LOGIN_URL, USER_REGISTER_URL } from '../constants/url';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { IUserRegister } from '../interfaces/i-user-register';

const USER_KEY = 'User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
public userObservable: Observable<User>
  constructor(private http: HttpClient, private toastrService: ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Food Palace ${user.name}!`,
            'login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse, 'Login Failed');
        }
      })
    );
  }

  register(userRegister: IUserRegister): Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to the Food Palace ${user.name}`,
            'Registered Successfully'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 
            'Registration Failure'
            )
        }
      })
    )
  }

  get currentUser(): User {
    return this.userSubject.value;
  }

  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User){
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User{
    const userJson = localStorage.getItem(USER_KEY);
    if(userJson) return JSON.parse(userJson) as User;
    return new User();
  }

}
