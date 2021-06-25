import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizComponent} from './quiz/quiz.component';
import {RegisterComponent} from './register/register.component';
import {ResultComponent} from './result/result.component';
import {SignInComponent} from './sign-in/sign-in.component';

const routes: Routes = [
  { path:'register',component:RegisterComponent},
  { path:'quiz',component:QuizComponent},
  { path:'result',component:ResultComponent},
  { path:'login',component:SignInComponent},
  { path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
