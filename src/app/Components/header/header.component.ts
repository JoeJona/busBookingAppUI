import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthUserModel } from 'src/app/models/auth-user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authUser: AuthUserModel = null;
  userRole: String;
  private user: any;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.authenticationService.user.subscribe((userinfo) => {
      // console.log("user info is header:", userinfo);
      this.authUser = userinfo;
      // this.userRole = this.authUser?.roles[0];
      // console.log(this.userRole);      
      // this.userRole = this.authUser.roles[0];
      
    });
  }

  dashboardPage() {
    let data = localStorage.getItem('user')
    this.user = JSON.parse(data)
    this.authenticationService.user.subscribe((res:any) => {
      if(this.checkRole(this.user, 'USER')){
        this.router.navigate(["user/dashboard/"+ this.user.pid]);
      }else if(this.checkRole(this.user, 'ADMIN')){
        this.router.navigate(['admin-dashboard']);
      }else{
        this.router.navigate(["/home"]);
      }            
    });
  }

  checkRole(userInfo: any, role:String) {
    const rolesFound = userInfo['roles'];
    return rolesFound.includes(role);
  }

  getName() {
    // debugger
    let fullName = ''
    if (this.authenticationService.userValue != null) {
      fullName =
        this.authenticationService.userValue.firstName +
        "  " +
        this.authenticationService.userValue.lastName;

    }
    return fullName;
  }

  logout() {
    console.log("logged out");
    this.authenticationService.removeSession();
    this.authUser = null;
    this.router.navigate(["/home"]);
  }
}
