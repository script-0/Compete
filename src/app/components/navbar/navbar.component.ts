import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../../environments/environment.prod';
import {MatMenuTrigger} from '@angular/material/menu';
import { UserInfos, UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  locationSubcriptions : Subscription[];

  constructor(private _snackBar: MatSnackBar, private _feedbacksnackBar: MatSnackBar, private _userServices:UserService) {
    this.locationSubcriptions = [];
   }

  ngOnDestroy(): void {
    clearInterval(this.feedbackInterval);
    this._feedbacksnackBar.dismiss();
    this._snackBar.dismiss();
    this.locationSubcriptions.forEach( (item:Subscription) =>{
      item.unsubscribe();
    });
  }
  
  @Input()  links!: any;
  @Input()  activeLink!: number;
  @Input()  loadComponent!: () => void;
  @Output() activeLinkChange = new EventEmitter<number>();
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  user : UserInfos = {
    name : '',
    type : '',
    location : {
      ip : '',
      country : '',
      city    : '',
      gps     : '',
      isp     : ''
    }
  }
   
  feedbackInterval : any;

  ngOnInit(): void {
    //Lauchning FeedBack Snack Bar
    this.feedbackInterval = setInterval(()=>{
      let ref = this._feedbacksnackBar.open('Some operations Failed', 'Try again');
      ref.afterDismissed().subscribe(()=>{
          this.getIPAddress();
      });
    },environment.delayAfterOperationConsideredAsFailed);

    this.loadUserInfos();

    //Ip localisation
    this.openSnackBar('Some operations pending', 'close', environment.delayAfterSnackBarDismiss );

    setTimeout(()=>{this.getIPAddress();} , environment.delayBeforeInitiateGeolocalisation);

  }

  manageAccount = () =>{
    console.log("Manage Account");
  }

  logout = () =>{
    this._userServices.logout();
  }

  changeAccount = () => {
    console.log("Change Account");
  }

  loadPage(index: number):void{
    this.activeLink = index;
    this.activeLinkChange.emit(this.activeLink);
    this.loadComponent();
  }

  getIPAddress(){
    this._userServices.getIPAddress(this.user , ()=>{
        this._snackBar.dismiss();
        clearInterval(this.feedbackInterval);
        this._feedbacksnackBar.dismiss();
        this.openSnackBar('All done', 'close', environment.delayAfterSnackBarDismiss);
      },
      (subscription : Subscription)=>{
        this.locationSubcriptions.push(subscription);
      }
    );

  }

  loadUserInfos() : void{
    let user_tmp:UserInfos|null = this._userServices.loadUserInfos(this.user);
    if(user_tmp){
      this.user = user_tmp;
    }
  }

  openSnackBar(content: string, buttonName: string,durationInSeconds:number) {
    if (durationInSeconds <= 0){
      this._snackBar.open(content, buttonName);
    }else{
      this._snackBar.open(content, buttonName,{
        duration: durationInSeconds * 1000,
      });
    }
  }
}
