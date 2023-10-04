import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUserName: string = '';
  newUserPassword: string = '';

  constructor(private userService: UserService, private _snack: MatSnackBar, private router: Router) {}
  
  ngOnInit(): void {
    
  }

  public user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      this._snack.open("username is required !!", '', {
        duration: 2000,
      });
      return;
    }
    if (this.user.password == '' || this.user.password == null) {
      this._snack.open("password is required !!", '', {
        duration: 2000,
      });
      return;
    }
    if (this.user.firstName == '' || this.user.firstName == null) {
      this._snack.open("firstName is required !!", '', {
        duration: 2000,
      });
      return;
    }
    if (this.user.lastName == '' || this.user.lastName == null) {
      this._snack.open("lastname is required !!", '', {
        duration: 2000,
      });
      return;
    }
    if (this.user.email == '' || this.user.email == null) {
      this._snack.open("email is required !!", '', {
        duration: 2000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe(
      (data) => {
        debugger;
        Swal.fire('Success done', 'user is registered', 'success');
        this.resetUserData();
        this.newUserName = localStorage.getItem('newUserName') || '';
        this.newUserPassword = localStorage.getItem('newUserPassword') || '';
        this.userService.generateToken({ username: this.newUserName, password: this.newUserPassword }).subscribe(
          (data: any) => {
    
            this.userService.loginUser(data.token);
            this.userService.getCurrentUser().subscribe(
              (user:any)=>{
                this.userService.setUser(user);
                
                if(this.userService.getUserRole() == 'NORMAL'){
                  window.location.href = '/user-dashboard/0';
                  localStorage.setItem('isLoggedIn','true');
                  localStorage.setItem('normalRole','NORMAL');
                }else{
                  this.userService.logout();
                }
              }
            )
          },
          (error) => {
            this._snack.open("Invalid Details !! Try Again",'',{duration:3000,})
          }
        )
      },
      (error) => {
        this._snack.open("User already present!!", '', { duration: 2000 });
      }
    );
  }

  // Define resetUserData() function inside the component class
  resetUserData() {
    this.user = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
  }
}
