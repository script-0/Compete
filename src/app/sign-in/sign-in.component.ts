import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router , ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  redirect = '';

  authFailed = false;

  constructor(private router:Router , private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.redirect = this.activatedRoute.snapshot.queryParams['redirectTo'];
  }

  submit():void{
    this.signIn(this.profileForm.value.username, this.profileForm.value.password);
  }

  signIn(username:string , password: string ): void{
    console.log('User : ', username , ' | password : ',password);
    if(username === 'isaac' && password === "pass"){
      sessionStorage.removeItem('user');
      sessionStorage.setItem('user', JSON.stringify({name : 'Isaac NDEMA', username : 'isaac' ,usertype : 'Professional' ,ip : '148.56.2.86', date : Date.now()}) );

      if(this.redirect) {
        this.router.navigate([this.redirect]);
      }else{
        this.router.navigate(['/dashboard']);
      }
      
    }else{
      this.authFailed = true;
      setTimeout(() => {
        this.authFailed = false;
      }, 4000);
    }
    //Process Authentification
  }

}
