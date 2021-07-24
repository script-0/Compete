import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router , ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  redirect = '';

  authFailed : boolean = false;
  authSuccessed : boolean = false;
  isWorking : boolean = true;

  constructor(private router:Router , private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngAfterViewInit(): void {
    this.isWorking = false;
  }

  ngOnInit(): void {
    let user = sessionStorage.getItem('user');
    if(user != null){
      this.router.navigate(['/dashboard']);
      return;
    }
    this.redirect = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  submit():void{
    this.isWorking = true;
    this.signIn(this.profileForm.value.username, this.profileForm.value.password);
    this.isWorking = false;
  }

  signIn(username:string , password: string ): void{
    if( this.userService.signIn( username , password ) ){
      if(this.redirect) {
        this.authSuccessed = true;
        this.router.navigate([this.redirect]);
      }else{
        this.authSuccessed = true;
        this.router.navigate(['/dashboard']);
      }
      
    }else{
      this.authFailed = true;
      setTimeout(() => {
        this.authFailed = false;
      }, environment.delayAfterCloseAuthentificationFailedBox);
    }
  }

}
