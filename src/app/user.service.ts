import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

export interface UserInfos{
  name : string,
  type : string,
  location : {
    ip : string,
    country : string,
    city    : string,
    gps     : string,
    isp     : string
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }

  loadUserInfos = (user : UserInfos) : UserInfos | null => {
    let user_tmp = sessionStorage.getItem('user');
    if(user_tmp){
      let user_tmp_parse = JSON.parse(user_tmp);
      if(user_tmp_parse && user_tmp_parse.name && user_tmp_parse.usertype){
        user.type = user_tmp_parse.usertype;
        user.name =  user_tmp_parse.name;
        return user;
      }
    }
    return null;
  }

  getIPAddress = (user : UserInfos, dismissSnackbar : ()=>void , addSubcription :(subcription:Subscription)=>void) =>{
    let tmp = this.http.get("http://api.ipify.org/?format=json").subscribe((res:any)=>{
      let tmp2 = this.http.get('https://api.ipgeolocation.io/ipgeo?apiKey=f156be1d536d44068d79a532b774d286&ip='+res.ip).subscribe((data:any)=>{
        user.location.country = data.country_name;
        user.location.city  = data.city;
        user.location.gps   = data.latitude + ',' + data.longitude ;
        user.location.isp    = data.isp;
        user.location.ip = res.ip;
        dismissSnackbar();
      });
      addSubcription(tmp2);
    });
    addSubcription(tmp);
  }

  logout = () =>{
    sessionStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
