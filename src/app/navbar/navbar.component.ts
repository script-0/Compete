import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  locationSubcriptions : Subscription[];

  constructor(private http:HttpClient) {
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

  ngOnInit(): void {
    //Ip localisation
    this.getIPAddress();
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
      });

      this.locationSubcriptions.push(tmp2);
    });

    this.locationSubcriptions.push(tmp);
  }

}
