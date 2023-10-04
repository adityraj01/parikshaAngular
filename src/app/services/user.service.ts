import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './helper';

let httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public addUser(user:any){
    debugger;
    console.log(user.username);
    console.log(user.password);
    localStorage.setItem('newUserName',user.username);
    localStorage.setItem('newUserPassword',user.password);
    
    return this.http.post(`${baseUrl}/user/`,user);
  }

  public getCurrentUser(){
    debugger;
    return this.http.get(`${baseUrl}/auth/current-user`,httpOptions);
  }

  public generateToken(loginData : any){
    debugger;
    return this.http.post(`${baseUrl}/auth/login`,loginData);
  }

  public loginUser(token : any){
    localStorage.setItem('token',token);
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    else{
      return true;
    }
  }

  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser()
  {
    let userStr = localStorage.getItem("user");
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;    
    }
  }

  public getUserRole(){
    let user =  this.getUser();
    return user.authorities[0].authority;
  }
}
