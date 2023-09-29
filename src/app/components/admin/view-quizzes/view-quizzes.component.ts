import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

interface Quiz {
  qid:number;
  title: string;
  category: {
    title: string;
  };
  description: string;
  maxMarks: number;
  numberOfQuestions: number;
  // other properties...
}

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
  quizzes: Quiz[] = [];

  constructor(private _quiz:QuizService){}
  ngOnInit(): void {
    debugger
    this._quiz.quizzes().subscribe(
      (data:any)=>{
        this.quizzes=data;
        console.log(this.quizzes);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!','Server Error !!','error');
      }
      );
    }
  
  deleteQuiz(qId: number) {
    Swal.fire({
      icon: 'info',
      title: "Are you sure ?",
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        debugger;
        console.log(qId);
        this._quiz.deleteQuiz(qId)
          .subscribe((data) => {
            this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qId);
            Swal.fire('Success', 'Quiz deleted', 'success');
          }, (error) => {
            Swal.fire('Error', 'Error in deleting', 'error');
          });
      }
    });
    
  }

}
