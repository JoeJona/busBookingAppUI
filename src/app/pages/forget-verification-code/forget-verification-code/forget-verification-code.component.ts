import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { SecureTokenModel } from 'src/app/models/secure-token-model';
import { VerificationBackEndService } from 'src/app/services/verification-back-end.service';

@Component({
  selector: 'app-forget-verification-code',
  templateUrl: './forget-verification-code.component.html',
  styleUrls: ['./forget-verification-code.component.css']
})
export class ForgetVerificationCodeComponent implements OnInit {

  alertModel: AlertModel = new AlertModel(false, null, null, null);

  secureToken: string;
  removeSecureToken = null;
  userEmail: string;

  constructor(private verificationBackEndServices: VerificationBackEndService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(
      param => {
        this.userEmail = param['email'];
      }
    );
  }

  onFormSubmit(formData: NgForm) {
    debugger
    this.verificationBackEndServices.verifyEmail(this.secureToken, this.userEmail).subscribe(data => {
      console.log(data);
      console.log("data", data);
      this.router.navigate(['/change-password/'+ this.userEmail])

    },
      error => {
        if (error['status'] == 200) {
          this.router.navigate(['/change-password/'+ this.userEmail])
        }
        if (error['status'] == 403) {
          this.router.navigate(['/forget-password'])
        }
        var msg = "Please try again."
        if (error != null && error.status != null && error.status == 409) {
          msg = "The verification code is incorrect."
        }
        this.removeSecureToken = null;
        this.alertModel = new AlertModel(true, "Fail", "Incorrect", msg)
      },
      () => {
        console.log("remove completed with:" + this.removeSecureToken);
      })

  }

}
