import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


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

  links = [
    {
      name : 'About',
      component : 'About',
      index : 1
    },
    {
      name : 'Services',
      component : 'Services',
      index : 2
    },
    {
      name : 'CyberGames',
      component : 'CyberGames',
      index : 3
    }
  ];

  activeLink = 1;

  user = {
    name : 'Isaac NDEMA',
    type : 'Student',
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
    },8000);

    //Ip localisation
    this.openSnackBar('Some operations pending', 'close', 5);

    setTimeout(()=>{this.getIPAddress();} , 2000);
    
  }

  loadPage(index: number):void{
    this.activeLink = index;
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
        this.openSnackBar('All done', 'close', 5);
        clearInterval(this.feedbackInterval);
      });

      this.locationSubcriptions.push(tmp2);
    });

    this.locationSubcriptions.push(tmp);
  }

  openSnackBar(content: string, buttonName: string,durationInSeconds:number) {
    if (durationInSeconds > 0){
      this._snackBar.open(content, buttonName);
    }else{
      this._snackBar.open(content, buttonName,{
        duration: durationInSeconds * 1000,
      });
    }
  }
}
