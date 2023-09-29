import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  constructor(private userService: UserService, private _snack:MatSnackBar){}
  ngOnInit(): void {}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username == '' || this.user.username == null){
      this._snack.open("username is required !!", '',{
        duration:2000,
      });
      return;   
    }
    if(this.user.password == '' || this.user.password == null){
      this._snack.open("password is required !!", '',{
        duration:2000,
      });
      return;   
    }
    if(this.user.firstName == '' || this.user.firstName == null){
      this._snack.open("firstName is required !!", '',{
        duration:2000,
      });
      return;   
    }
    if(this.user.lastName == '' || this.user.lastName == null){
      this._snack.open("lastname is required !!", '',{
        duration:2000,
      });
      return;   
    }
    if(this.user.email == '' || this.user.email == null){
      this._snack.open("email is required !!", '',{
        duration:2000,
      });
      return;   
    }

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success done','user is registered','success');
      },
      (error)=>{
        console.log("failed");
        this._snack.open("User already present!!",'',{duration:2000});
      }
    )
  }

}
