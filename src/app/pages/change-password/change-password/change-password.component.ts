import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertModel } from 'src/app/models/alert.model';
import { UserPasswordResetModel } from 'src/app/models/user-password-reset-model';
import { UserModel } from 'src/app/models/user.model';
import { ResetBackEndService } from 'src/app/services/reset-back-end.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  email: string;
  pid: String;
  userModel: UserModel = new UserModel();
  userPasswordResetModel: UserPasswordResetModel = new UserPasswordResetModel();
  updatedUser = null;
  alertModel: AlertModel = new AlertModel(false, null, null, null);
  confirmedUserName: String = '';
  confirmedPassword: String = '';

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  public toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  constructor(private resetBackEndService: ResetBackEndService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.params['email']
  }

  onSubmitFormPasswordReset() {
    this.userPasswordResetModel.email = this.email;
    this.resetBackEndService.resetPassword(this.userPasswordResetModel)
      .subscribe(
        result => {
          debugger
          this.updatedUser = result;
          if (result) {
            this.router.navigate(['/signin'])
          }
        },
        error => {
          var msg = "We are not able to update the password. Please retry later."
          console.error(error);
          this.updatedUser = null;
          this.alertModel = new AlertModel(true, "Fail", "user password Not Updated", msg)
          if (error['status'] == 200) {
            this.router.navigate(['/signin'])
          }
        },
        () => {
          console.log("Updated completed with:" + this.userPasswordResetModel);
        })


    console.log("the saved value is:" + this.userPasswordResetModel);
    console.log("the saved alert is:" + this.alertModel);

  }

  onSubmitFormUsernameReset() {
    this.userPasswordResetModel.email = this.email;
    this.resetBackEndService.resetUserName(this.userPasswordResetModel)
      .subscribe(
        result => {
          debugger
          this.updatedUser = result;
          // this.router.navigate(['/signin'])
        },
        error => {
          var msg = "We are not able to update the username. Please retry later."
          this.updatedUser = null;
          this.alertModel = new AlertModel(true, "Fail", "user username Not Updated", msg);
          if (error['status'] == 200) {
            this.router.navigate(['/signin'])
          }
          if (error['status'] == 403) {
            localStorage.removeItem('user');
            this.router.navigate(['/signin'])
          }
        },
        () => {
          console.log("Updated completed with:" + this.userPasswordResetModel);
        })
  }

}