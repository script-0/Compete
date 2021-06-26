import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let user = sessionStorage.getItem('user');
      if(user != null)
        var userParsed = JSON.parse(user);
        var currentDate = Date.now();
        if(userParsed != null && userParsed.date !=null){
          var secondEllapsed = Math.floor((currentDate - userParsed.date) / 1000);
          if (secondEllapsed < 60*60){
            return true;
          }
        }
      sessionStorage.removeItem('user');
      if(route.url[0].path){
        console.log('/login?redirectTo='+route.url[0].path);
        this.router.navigateByUrl('/login?redirectTo='+route.url[0].path);
        return false;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
