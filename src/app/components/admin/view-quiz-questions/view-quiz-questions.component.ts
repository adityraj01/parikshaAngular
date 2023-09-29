import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

interface question_interface {
  content:number;
  option1:string;
  option2:string;
  option3:string;
  option4:string;
  answer:string;
  quesId:number;
}

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent {
  qId:any;
  qTitle:any;
  questionsList : question_interface[] =[];

  constructor(private _route:ActivatedRoute, private _question:QuestionsService,private _sank:MatSnackBar){}

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
      console.log(data);
      this.questionsList = data;
    },
    (error)=>{
      console.log(error);
    }
    )
    console.log(this.qId);
    console.log(this.qTitle);
  }

  deleteQuestion(questionId : any){
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure, you want to delete!!'
    }).then((result)=>{
        if(result.isConfirmed){
          debugger;
          this._question.deleteQuestion(questionId).subscribe((data)=>{
            this._sank.open('Question deleted','',{
              duration:3000,
            });
            this.questionsList = this.questionsList.filter((q)=>q.quesId != questionId);
          },
          (error)=>{
            this._sank.open('Error in deleting questions','',{
              duration:3000,
            });
            console.log(error);
          });
        }
    });
  }

}
