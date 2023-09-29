import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  constructor(private _http:HttpClient){}

  public quizzes(){
    return this._http.get(`${baseUrl}/quiz/`);
  }

  //add quiz
  public addQuiz(quiz: any): Observable<any>{
    return this._http.post(`${baseUrl}/quiz/`, quiz);
  }

  //delete quiz
  public deleteQuiz(qId : any){
    debugger;
    console.log(qId);
    return this._http.delete(`${baseUrl}/quiz/${qId}`);
  }

  //get the single quiz
  public getQuiz(qId : any){
    debugger;
    return this._http.get(`${baseUrl}/quiz/${qId}`);
  }

  //updateQuiz
  public updateQuiz(quiz : any){
    debugger;
    return this._http.put(`${baseUrl}/quiz/`, quiz);
  }

  //get quizzes of category
  public getQuizzesOfCategory(cid : any){
    return this._http.get(`${baseUrl}/quiz/category/${cid}`);
  }
  
  //get active quizzes
  public getActiveQuizzes(){
    return this._http.get(`${baseUrl}/quiz/active`);
  }

  //get active quizzes of category
  public getActiveQuizzesOfCategory(cid : any){
    return this._http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
