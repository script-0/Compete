import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


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

  constructor() { }

  ngOnInit(): void {
  }

  submit():void{
    this.signIn(this.profileForm.value.username, this.profileForm.value.password);
  }

  signIn(username:string , password: string ): void{
    console.log('User : ', username , ' | password : ',password);
    if(username === 'isaac' && password === "pass"){
      
    }
    //Process Authentification
  }

}
