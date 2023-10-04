import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(public login : UserService, private router: Router){};
  isLoggedIn = false;
  username = '';
  
  ngOnInit(): void {
    console.log(this.login.getUser().username);
    this.isLoggedIn = this.login.isLoggedIn();
    // this.username = this.login.getUser().username;
    
    this.setUsername(this.login.getUser().username);
  }
  private setUsername(username: string) {
    if(username == null){
      this.username = '';
    }
    this.username = username;
  }
  public logout(){
    this.login.logout();
    this.isLoggedIn = false;
    this.username = '';
    this.router.navigateByUrl('/');
  }
}
