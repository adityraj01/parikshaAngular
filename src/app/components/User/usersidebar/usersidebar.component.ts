import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-usersidebar',
  templateUrl: './usersidebar.component.html',
  styleUrls: ['./usersidebar.component.css']
})
export class UsersidebarComponent implements OnInit{
  categories : any;
  constructor(private _cat: CategoryService, private _snack : MatSnackBar){}
  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data : any)=>{
        this.categories = data;
        console.log(data);
      },
      (error)=>{
        this._snack.open('Error inloadinf categories from server', '',{
          duration : 3000,
        })
      }
    )
  }
}
