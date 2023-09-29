import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthInterceptor } from './services/auth.interceptor';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './components/User/user-dashboard/user-dashboard.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { WelcomeComponent } from './components/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './components/admin/view-categories/view-categories.component';
import { AddCategoriesComponent } from './components/admin/add-categories/add-categories.component';
import { ViewQuizzesComponent } from './components/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './components/admin/add-quiz/add-quiz.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './components/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './components/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './components/admin/add-questions/add-questions.component';
import { CreateNotesComponent } from './components/admin/create-notes/create-notes.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UsersidebarComponent } from './components/User/usersidebar/usersidebar.component';
import { LoadquizComponent } from './components/User/loadquiz/loadquiz.component';
import { InstructionsComponent } from './components/User/instructions/instructions.component';
import { StartQuizComponent } from './components/User/start-quiz/start-quiz.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    NavBarComponent,
    SignUpComponent,
    DashboardComponent,
    UserDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    ViewCategoriesComponent,
    AddCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionsComponent,
    CreateNotesComponent,
    UsersidebarComponent,
    LoadquizComponent,
    InstructionsComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground : true,
    })
    // MatCardActions
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
