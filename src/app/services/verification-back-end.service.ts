import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserPasswordResetModel } from '../models/user-password-reset-model';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class VerificationBackEndService {

  private publicBaseUrl: string;

  constructor(private httpClinet: HttpClient) {
    this.publicBaseUrl = environment.basePublicUrl;
  }

  public confirmEmail(user: UserModel): Observable<Object> {
    debugger
    return this.httpClinet.post(this.publicBaseUrl + '/send-email-conformation', user);
  }

  public verifyEmail(token: string, email: string ): Observable<Object> {
    debugger
    return this.httpClinet.get(this.publicBaseUrl + '/check-token', {
      params : new HttpParams().set('token', token).set('email', email),
    });
  }

  public checkUsersEmail(userEmail: UserModel): Observable<Object> {
    debugger
    return this.httpClinet.post(this.publicBaseUrl + '/forget-password', userEmail);
  }

  public resetUserPassword(userPasswordResetModel: UserPasswordResetModel): Observable<Object> {
    debugger
    return this.httpClinet.post(this.publicBaseUrl + '/reset-password', userPasswordResetModel);
  }

}














