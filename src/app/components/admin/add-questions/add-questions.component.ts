import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit{
  qId:any;
  qTitle:any;
  question = {
    quiz:{
      qid:''
    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:'',
    image : '',
    quesId:'',
  };
  constructor(private _route: ActivatedRoute, private _question:QuestionsService) {}
  ngOnInit(): void {
    this.qId=this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['qTitle'];
    this.question.quiz['qid'] =  this.qId;
  }

  formSubmit(){
    if(this.question.content.trim()=='' || this.question.content==null){
      return;
    }
    if(this.question.answer.trim()=='' || this.question.answer==null){
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option2==null){
      return;
    }
    if(this.question.option3.trim()=='' || this.question.option3==null){
      return;
    }
    if(this.question.option4.trim()=='' || this.question.option4==null){
      return;
    }
    this._question.addQuestion(this.question).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Success ','Question Added, Add another', 'success');
        this.question.content = '';
        this.question.answer = '';
        this.question.option1 = '';
        this.question.option2 = '';
        this.question.option3 = '';
        this.question.option4 = '';
      },
      (error)=>{
        Swal.fire('Error','Error in adding question','error');
      }

    )
  }

}
