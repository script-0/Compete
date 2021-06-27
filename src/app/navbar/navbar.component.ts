import { Component, OnDestroy, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment.prod';
import {MatMenuTrigger} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  locationSubcriptions : Subscription[];

  constructor(private http:HttpClient, private _snackBar: MatSnackBar, private _feedbacksnackBar: MatSnackBar) {
    this.locationSubcriptions = [];
   }

  ngOnDestroy(): void {
    this.locationSubcriptions.forEach( (item:Subscription) =>{
      item.unsubscribe();
    });

  }
  
  @Input()  links!: any;
  @Input()  activeLink!: number;
  @Input()  loadComponent!: () => void;
  @Output() activeLinkChange = new EventEmitter<number>();
  @ViewChild('menuTrigger') menuTrigger!: MatMenuTrigger;

  user = {
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

  loadPage(index: number):void{
    this.activeLink = index;
    this.activeLinkChange.emit(this.activeLink);
    this.loadComponent();
  }

  getIPAddress(){
    let tmp = this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      let tmp2 = this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=f156be1d536d44068d79a532b774d286&ip='+res.ip).subscribe((data:any)=>{
        this.user.location.country = data.country_name;
        this.user.location.city  = data.city;
        this.user.location.gps   = data.latitude + ',' + data.longitude ;
        this.user.location.isp    = data.isp;
        this.user.location.ip = res.ip;
        this._snackBar.dismiss();
        clearInterval(this.feedbackInterval);
        this._feedbacksnackBar.dismiss();
        this.openSnackBar('All done', 'close', environment.delayAfterSnackBarDismiss);
      });

      this.locationSubcriptions.push(tmp2);
    });

    this.locationSubcriptions.push(tmp);
  }

  loadUserInfos() : void{
    let user_tmp = sessionStorage.getItem('user');
    if(user_tmp){
      let user_tmp_parse = JSON.parse(user_tmp);
      if(user_tmp_parse && user_tmp_parse.name && user_tmp_parse.usertype){
        this.user.type = user_tmp_parse.usertype;
        this.user.name =  user_tmp_parse.name;
        return;
      }
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
