import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthUserModel } from '../models/auth-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  authUser:AuthUserModel;
  constructor(private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    this.authUser=JSON.parse(localStorage.getItem("user"));
    if(this.authUser && this.authUser.pid && this.authUser.token)
      {
        return true
      }else{
        this.router.navigate(['/account/signin'],{ queryParams: { returnUrl: state.url }})
        return false
      }
  }
  
}
