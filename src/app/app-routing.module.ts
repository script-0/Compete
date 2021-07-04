import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { RegisterComponent } from './components/register/register.component';
import { ResultComponent } from './components/result/result.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AuthGuard } from './services/auth/auth.guard';
import { MainComponent } from './components/main/main.component';
import { GamesComponent } from './components/games/games.component';
import { AccountPopupComponent } from './components/account-popup/account-popup.component';

const routes: Routes = [
  { path:'games',component:GamesComponent},
  { path:'account',component:AccountPopupComponent},
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
