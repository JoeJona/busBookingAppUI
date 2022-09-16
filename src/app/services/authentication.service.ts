import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUserModel } from '../models/auth-user.model';
import { RegistrationBackEndService } from './registration-back-end.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  private userSubject: BehaviorSubject<AuthUserModel>;
  public user: Observable<AuthUserModel>;
  constructor(
    private backeEndService: RegistrationBackEndService,
    private httpClinet: HttpClient) {
    this.userSubject = new BehaviorSubject<AuthUserModel>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();  
  }

  public get userValue(): AuthUserModel {
    return this.userSubject.value;
  }
  
  public set userValue(authUser:AuthUserModel) {
    this.userSubject.next(authUser);
  }

  public removeSession(){
    this.userSubject.next(null);
    localStorage.removeItem('user');
    localStorage.clear()
    window.localStorage.clear()
  }

  

  
}
