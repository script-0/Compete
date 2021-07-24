import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    first_name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    type: new FormControl(''),
  });

  registerFailed : boolean = false;
  registerSuccessed : boolean = false;
  isWorking : boolean = true;

  activeSection : number = 0;

  constructor(private router:Router , private userService: UserService) { }

  ngAfterViewInit(): void {
    this.isWorking = false;
  }

  ngOnInit(): void {
  }

  submit():void{
    this.isWorking = true;
    this.signUp(this.profileForm.value.name,
                this.profileForm.value.first_name,
                this.profileForm.value.username,
                this.profileForm.value.email,
                this.profileForm.value.password,
                this.profileForm.value.type);
    this.isWorking = false;
  }
  
  signUp(name:string,first_name:string,username:string,email:string,password:string,type:string) : true{
    return true;
  }

  previousSection(){
    if (this.activeSection > 0){
      this.activeSection -=1;
    }
  }

  nextSection(){
    if (this.activeSection < 5){
      this.activeSection +=1;
    }
  }

  activeSectionFilled() : boolean{
    switch(this.activeSection){
      case 0 :
        return this.profileForm.value.name == "";
      case 1 : 
        return this.profileForm.value.first_name == "";
      case 2 : 
        return this.profileForm.value.username == "";
      case 3 : 
        return this.profileForm.value.email == "";
      case 4 : 
        return this.profileForm.value.password == "";
      case 5 : 
        return this.profileForm.value.type == "";
      default : 
        return true;
    }
  }

}
