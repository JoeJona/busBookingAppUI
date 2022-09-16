import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
import { UserPasswordResetModel } from '../models/user-password-reset-model';
@Injectable({
  providedIn: 'root'
})
export class ResetBackEndService {


  private usersBaseUrl: string;
  private publicBaseUrl: string;
  private agentUrl: string;
  private agencyUrl: string;
  private adminUrl: string;


  constructor(private httpClinet: HttpClient) {
    this.usersBaseUrl = environment.baseUserUrl;
    this.publicBaseUrl = environment.basePublicUrl;
    this.agentUrl = environment.baseAgentUrl;
    this.agencyUrl = environment.baseAgencyUrl;
    this.adminUrl = environment.baseAdminUrl;
  }

  public resetPassword(userPasswordResetModel: UserPasswordResetModel): Observable<Object> {
    debugger
    return this.httpClinet.post(this.publicBaseUrl + '/reset-password', userPasswordResetModel);
  }

  public resetUserName(userPasswordResetModel: UserPasswordResetModel): Observable<Object> {
    return this.httpClinet.post(this.publicBaseUrl + '/reset-user-name', userPasswordResetModel);
  }

}














