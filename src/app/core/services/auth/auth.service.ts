import { Router } from '@angular/router';
import { UserResponse } from './../../interfaces/user.interface';
import { HttpService } from './../http/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpService,
    private router: Router
  ) { }

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  loginUser(data) {
    this.http.postReq('/user/login', data).subscribe((res: UserResponse) => {
      this.setToken(res.token);
      console.log(res)
    })
  }

  logoutUser() {   
    this.clearToken();
    this.router.navigate['/auth'];
  }
  
}
