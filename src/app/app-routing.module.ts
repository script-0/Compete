import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { ResultComponent } from './result/result.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { MainComponent } from './main/main.component';
import { GamesComponent } from './games/games.component';

const routes: Routes = [
  { path:'games',component:GamesComponent},
  { path:'register',component:RegisterComponent},
  { path:'quiz',component:QuizComponent, canActivate : [AuthGuard]},
  { path:'result',component:ResultComponent, canActivate : [AuthGuard]},
  { path:'login',component:SignInComponent},
  { path:'login?redirectTo=:redirect',component:SignInComponent, pathMatch: 'full'},
  { path:'dashboard',component:MainComponent, canActivate : [AuthGuard]},
  { path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
