import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  isSubmitted = false;
  loginForm!:FormGroup;

  userCredentials={
    username:'',
    password:''
  }

  constructor(private formBuilder:FormBuilder,private router:Router,private login : UserService,private _snack: MatSnackBar){}
  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',Validators.required]
    })
  }

  get fc(){
    return this.loginForm.controls; 
    //this.loginForm.controls['email'].value ~ this.fc['email'].value}
  }
  
  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) {
      console.log("ERROR");
      return;
    }

    // if(this.userCredentials.password!=null && this.userCredentials.username!=null){
    //   var userName = `${this.fc['username'].value}`;
    //   var password = `${this.fc['password'].value}`;
    //   console.log(userName,password);
    // }
    // else{
    //   console.log("Fields are empty");
    // }

    var userName = `${this.fc['username'].value}`;
    var password = `${this.fc['password'].value}`;

    debugger;
    this.login.generateToken({ username: userName, password: password }).subscribe(
      (data: any) => {
        console.log('success');
        console.log(data);

        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //redirect   ...ADMIN : admin-dashboard
            //redirect   ...NORMAL : normal-dashboard
            if(this.login.getUserRole() == "ADMIN"){
              window.location.href = '/admin';
              localStorage.setItem('isLoggedIn','true');
              localStorage.setItem('adminRole','ADMIN');

            }else if(this.login.getUserRole() == 'NORMAL'){
              window.location.href = '/user-dashboard/0';
              localStorage.setItem('isLoggedIn','true');
              localStorage.setItem('normalRole','NORMAL');
            }else{
              this.login.logout();
            }
          }
        )
      },
      (error) => {
        console.log('Error !');
        console.log(error);
        this._snack.open("Invalid Details !! Try Again",'',{duration:3000,})
      }
    )  
  }
}
