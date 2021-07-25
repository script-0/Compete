import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger(
      'slideInOut', 
      [
        transition(':enter', [
          style({transform: 'translateX(-50%)'}),
          animate('200ms ease-in', style({transform: 'translateX(0%)'}))
        ])
      ]
    )
  ]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    first_name: new FormControl(''),
    username: new FormControl('',[
                                  Validators.required,
                                  Validators.minLength(4)
                                  ]
                              ),
    email: new FormControl('',[ 
                                Validators.required,
                                Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
                              ]
                          ),
    password: new FormControl('',[
                                  Validators.required,
                                  Validators.minLength(4)
                                  ]
                              ),
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

  doNext(event:KeyboardEvent):void{
    if (event.key === "Enter") {
      if( !this.activeSectionFilled()) {
        this.nextSection()
      }
    }
  }

  signIn(event:MouseEvent):void{
    event.preventDefault();
    this.router.navigate(['/login']);
  }

  activeSectionFilled() : boolean{
    switch(this.activeSection){
      case 0 :
        return this.profileForm.value.name == "";
      case 1 : 
        return this.profileForm.value.first_name == "";
      case 2 : 
        let tmp_u = this.profileForm.get('username');
        if(tmp_u!=null){
          return tmp_u.invalid;
        }
        return false; //Check Username length
      case 3 : 
        let tmp_e = this.profileForm.get('email');
        if(tmp_e!=null){
          return tmp_e.invalid;
        }
        return false; //Check email synthax
      case 4 :
        let tmp_p = this.profileForm.get('password');
        if(tmp_p!=null){
          return tmp_p.invalid;
        }
        return false; //Check Password length
      case 5 : 
        return this.profileForm.value.type == "";
      default : 
        return true;
    }
  }

}
