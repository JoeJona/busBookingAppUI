import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { SecureTokenModel } from 'src/app/models/secure-token-model';
import { UserPasswordResetModel } from 'src/app/models/user-password-reset-model';
import { UserModel } from 'src/app/models/user.model';
import { VerificationBackEndService } from 'src/app/services/verification-back-end.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  alertModel:AlertModel=new AlertModel(false,null,null,null);

  userEmail:UserModel = new UserModel();
  savedSecureToken=null;

  constructor(private verificationBackEndServices:VerificationBackEndService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(formData:NgForm){
    this.verificationBackEndServices.checkUsersEmail(this.userEmail)
    .subscribe( 
      result=>{ 
        console.log("result",result); 
        this.savedSecureToken=result;
      },
      error=>{
        if(error['status'] == 200){
          this.router.navigate(['/forget-code/'+ this.userEmail.userName]);
        }
        if(error['status'] == 403){
          this.router.navigate(['/forget-password'])
       }
        var msg="Please retry later."
        if(error!=null && error.status!=null && error.status==409){
          msg="The email address already used."
        }
        this.savedSecureToken=null;
        this.alertModel=new AlertModel(true,"Fail","Email",msg)
      },
      ()=>{console.log("save completed with:"+this.savedSecureToken);
    })
    
  }

}