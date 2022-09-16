import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { SecureTokenModel } from 'src/app/models/secure-token-model';
import { UserModel } from 'src/app/models/user.model';
import { VerificationBackEndService } from 'src/app/services/verification-back-end.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  alertModel:AlertModel=new AlertModel(false,null,null,null);

  user: UserModel = new UserModel();
  saveduser = null;

  constructor(private verificationBackEndServices:VerificationBackEndService,private router:Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(formData:NgForm){
    this.verificationBackEndServices.confirmEmail(this.user)
    .subscribe(result => {
      console.log(result);
      },
      error=>{
        if(error['status'] == 200){
          this.user.email = this.user.userName
          this.router.navigate(['/verify-email/'+ this.user.email])
       }
        if(error['status'] == 403){
          this.router.navigate(['/signup'])
       }
        var msg="Please retry later."
        
        if(error!=null && error.status!=null && error.status==409){
          msg="The email address already used."
        }
        this.saveduser=null;
        this.alertModel=new AlertModel(true,"Fail","Email",msg)
      },
      ()=>{console.log("save completed with:"+this.saveduser);
    }
    )
    
  }

}
