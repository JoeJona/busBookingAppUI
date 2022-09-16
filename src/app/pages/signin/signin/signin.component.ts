import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { AuthUserModel } from 'src/app/models/auth-user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RegistrationBackEndService } from 'src/app/services/registration-back-end.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  alertModel: AlertModel = new AlertModel(false, null, null, null);

  email="";
  password="";
  authResulte:AuthUserModel;
  messege:string;
  returnUrl: string;

  constructor(private backeEndService:RegistrationBackEndService,
    private router:Router,
    private authenticationService:AuthenticationService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit(form:NgForm){
    const username=form.value.email;
      const password=form.value.password;
      this.backeEndService.authenticate(username,password).subscribe(result=>{
        
        if(result!=null){
          this.authResulte=result as AuthUserModel;

          const userData = JSON.stringify(this.authResulte)          


          if(this.authResulte && this.authResulte.token && this.authResulte.pid){
            localStorage.setItem('user',JSON.stringify(this.authResulte))
            this.authenticationService.userValue=this.authResulte;
            if(this.checkRole(this.authResulte, 'USER')){
              this.router.navigate(["user/dashboard/"+ this.authResulte.pid]);
            }else if(this.checkRole(this.authResulte, 'AGENT')){
              this.router.navigate(["agent/dashboard/"+ this.authResulte.pid]);
            }else if(this.checkRole(this.authResulte, 'ADMIN')){
              this.router.navigate(['admin-dashboard']);
            }else{
              this.router.navigate(["/home"]);
            }
          }

        }
      },
      error=>{
        this.alertModel = new AlertModel(true, 'Fail', "Un authenticated user", "Please insert correct username and password.");
        this.messege="Invalid user credential.";
        if(error['status'] == 403){
          localStorage.removeItem('user');
          this.router.navigate(['/account/signin'])
       }
      });
  }
  checkRole(authResulte: any, role:String) {
    const rolesFound = authResulte['roles'];
    return rolesFound.includes(role);
  }

}
