import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.css']
})
export class LoadquizComponent implements OnInit{
  catId : any;
  quizzes : any;
  constructor(private _route:ActivatedRoute, private _quiz: QuizService) {};
  ngOnInit(): void {
    this._route.params.subscribe((params)=>{
      this.catId = params['catId'];
      if(this.catId == 0){
        console.log("Load all the quiz");
        this._quiz.getActiveQuizzes().subscribe(
          (data : any)=>{
            this.quizzes = data;
            console.log(this.quizzes);
          },
          (error)=>{
            console.log(error);
            alert('error in loading all quizzes');
          }
        )
      }
      else{
      console.log("load specific quiz");
      this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
        (data:any)=>{
          this.quizzes=data;
        },
        (error)=>{
          alert("error in loading data");
        }
      )
      }

    });
    // this.catId = this._route.snapshot.params['catId'];
    // console.log(this.catId);
    // if(this.catId == 0){
    //   console.log("load all the quiz");
    //   this._quiz.quizzes().subscribe(
    //     (data:any)=>{
    //       this.quizzes = data;
    //       console.log(this.quizzes);
    //     },
    //     (error)=>{
    //       console.log(error);
    //       alert("error in alerting all quizzes");
    //     }
    //   )
    // }
    // else{
    //   console.log("load specific quiz");
    // }
  }

}
