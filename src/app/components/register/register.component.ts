import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { environment } from './../../../environments/environment.prod';

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
        ]),
        transition(':leave',[
        ])
      ]
    )
  ]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  strongRegex : RegExp = new RegExp(environment.passwordValidtor.strong);
  mediumRegex! : RegExp ;

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
                                  Validators.pattern(this.strongRegex)
                                  ]
                              ),
    type: new FormControl(''),
  });

  registerFailed! : boolean;
  registerSuccessed! : boolean;
  isWorking : boolean = true;

  activeSection : number = 5;

  pwdStrenghStyle  = {
    ind_1 : 'empty-indicator',
    ind_2 : 'empty-indicator',
    ind_3 : 'empty-indicator',
    title : "Empty",
    color : "black"
  }

  managePwdPopover = (pwdpopover:any)=>{
    if(this.profileForm.value.password !='') 
    {
      pwdpopover.open();
    }else{
      pwdpopover.close();
    }
  } 

  constructor(private router:Router , private userService: UserService) { }

  ngAfterViewInit(): void {
    this.isWorking = false;
    this.registerFailed  = false;
    this.registerSuccessed  = false;
    this.mediumRegex = new RegExp(environment.passwordValidtor.medium);
  }

  testPwd():void{
    let tmp:string = this.profileForm.value.password;
    if(tmp === ''){
      this.pwdStrenghStyle.ind_1 = 'empty-indicator';
      this.pwdStrenghStyle.ind_2 = 'empty-indicator';
      this.pwdStrenghStyle.ind_3 = 'empty-indicator';
      this.pwdStrenghStyle.title = 'Empty';
      this.pwdStrenghStyle.color = 'black';
    }else if (tmp.length <= 4){
      this.pwdStrenghStyle.ind_1 = 'weak-indicator';
      this.pwdStrenghStyle.ind_2 = 'empty-indicator';
      this.pwdStrenghStyle.ind_3 = 'empty-indicator';
      this.pwdStrenghStyle.title = 'Weak';
      this.pwdStrenghStyle.color = 'red';
    }else if (this.mediumRegex.test(tmp)){
      this.pwdStrenghStyle.ind_1 = 'medium-indicator';
      this.pwdStrenghStyle.ind_2 = 'medium-indicator';
      this.pwdStrenghStyle.ind_3 = 'empty-indicator';
      this.pwdStrenghStyle.title = 'Medium';
      this.pwdStrenghStyle.color = 'orange';
    }else if (this.strongRegex.test(tmp)){
      this.pwdStrenghStyle.ind_1 = 'strong-indicator';
      this.pwdStrenghStyle.ind_2 = 'strong-indicator';
      this.pwdStrenghStyle.ind_3 = 'strong-indicator';
      this.pwdStrenghStyle.title = 'Strong';
      this.pwdStrenghStyle.color = 'green';
    }else{

    }
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
    if (this.activeSection < 6){
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
          return this.profileForm.value.type == "";
      case 3 : 
        let tmp_e = this.profileForm.get('email');
        if(tmp_e!=null){
          return tmp_e.invalid;
        }
        return false; //Check email synthax
      case 4 : 
        let tmp_u = this.profileForm.get('username');
        if(tmp_u!=null){
          return tmp_u.invalid;
        }
        return false; //Check Username length
      case 5 :
        let tmp_p = this.profileForm.get('password');
        if(tmp_p!=null){
          return tmp_p.invalid;
        }
        return false; //Check Password length
      case 6 : 
        return this.profileForm.value.type == "";
      default : 
        return true;
    }
  }

}
