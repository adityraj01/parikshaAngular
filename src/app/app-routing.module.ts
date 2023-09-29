import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './components/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './components/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';
import { CreateNotesComponent } from './components/admin/create-notes/create-notes.component';
import { LoadquizComponent } from './components/User/loadquiz/loadquiz.component';
import { InstructionsComponent } from './components/User/instructions/instructions.component';
import { StartQuizComponent } from './components/User/start-quiz/start-quiz.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'signup', 
    component: SignUpComponent,
    pathMatch:'full'
  },
  {
    path: 'admin', 
    component: DashboardComponent,
    // canActivate : [adminGuard],
    children :[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-categories',
        component:AddCategoriesComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'quiz/:qid',
        component:UpdateQuizComponent
      },
      {
        path:'view-questions/:qid/:title',
        component:ViewQuizQuestionsComponent
      },
      {
        path:'add-question/:qid/:qTitle',
        component:AddQuestionsComponent
      },
      {
        path:'createNotes',
        component:CreateNotesComponent
      }
    ]
  },
  {
    path:'start/:qid',
    component:StartQuizComponent,
    // canActivate : [normalGuard],
  },
  {
    path: 'user-dashboard', 
    component: UserDashboardComponent,
    // canActivate : [normalGuard],
    children :[
      {
        path:':catId',
        component:LoadquizComponent
      },
      {
        path:'instructions/:qid',
        component:InstructionsComponent
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
