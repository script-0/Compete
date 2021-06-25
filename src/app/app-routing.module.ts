import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path:'register',component:RegisterComponent},
  { path:'quiz',component:QuizComponent, canActivate : [AuthGuard]},
  { path:'result',component:ResultComponent, canActivate : [AuthGuard]},
  { path:'login',component:SignInComponent},
  { path:'login?redirectTo=:redirect',component:SignInComponent},
  { path:'dashboard',component:NavbarComponent, canActivate : [AuthGuard]},
  { path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
