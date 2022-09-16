import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { UserModel } from 'src/app/models/user.model';
import { RegistrationBackEndService } from 'src/app/services/registration-back-end.service';
import { UserAddressModel } from 'src/app/models/user-address-model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  repassword:string='';
  userEmail:string;

  userModel:UserModel=new UserModel();
  userAddress: UserAddressModel = new UserAddressModel();
  savedUser=null;
  alertModel:AlertModel=new AlertModel(false,null,null,null);
  constructor(private backEndService:RegistrationBackEndService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.userEmail = param['email'];
      }
    );
    }


  onFormSubmit(formData:NgForm){
    this.userModel.email = this.userEmail;
    this.userModel.address = this.userAddress;
    console.log(this.userEmail + this.userAddress);
    this.backEndService.registerUser(this.userModel)    
    .subscribe( 
      result=>{ 
        console.log("result",result); 
        this.savedUser = result;
        this.router.navigate(['/signin'])
      },
      error=>{
        if(error['status'] == 403){
          localStorage.removeItem('user');
          this.router.navigate(['/signin'])
       }else if(error['status'] == 406){
        debugger
        let msg;
        if (error && error['error'] && error['error']['Phone']) {
          msg = error['error']['Phone'];
        }
        if (error && error['error'] && error['error']['email']) {
          msg = msg + ' , ' + error['error']['email'];
        }
        this.savedUser=null;
        this.alertModel=new AlertModel(true,"Fail","User Not Saved", msg)
       }else{
        var msg="We are not able to save the user. Please retry later."
        if(error!=null && error.status!=null && error.status==409){
          msg="We are not able to save the user. The email address already used."
        }
        this.savedUser=null;
        this.alertModel=new AlertModel(true,"Fail","User Not Saved",msg)
       }
        
      },
      ()=>{console.log("save completed with:"+this.savedUser);
    })
    

    
  }


}