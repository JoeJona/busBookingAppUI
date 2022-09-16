import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserModel } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class RegistrationBackEndService {


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

  public registerUser(user: UserModel): Observable<Object> {
    debugger
    return this.httpClinet.post(this.publicBaseUrl + '/createUser', user);
  }

  public authenticate(username: string, password: string): Observable<Object> {
    return this.httpClinet.post(this.publicBaseUrl + '/authenticate', { "userName": username, "password": password });
  }

}














