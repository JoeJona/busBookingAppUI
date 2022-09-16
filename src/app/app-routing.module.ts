import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdmindashbordComponent } from './pages/admindashbord/admindashbord.component';
import { AuthGuardGuard } from './authguard/auth-guard.guard';
import { UploaderComponent } from './Components/foundation/Image-uploads/Drag and Drop/uploader/uploader.component';
import { UploadFormComponent } from './Components/foundation/Image-uploads/single upload/upload-form/upload-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { ImageWyswygComponent } from './Components/image-wyswyg/image-wyswyg.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './pages/change-password/change-password/change-password.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email/confirm-email.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
import { ForgetVerificationCodeComponent } from './pages/forget-verification-code/forget-verification-code/forget-verification-code.component';
import { SigninComponent } from './pages/signin/signin/signin.component';
import { SignupComponent } from './pages/signup/signup/signup.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard/user-dashboard.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code/verification-code.component';
import { ApproverestaurantpageComponent } from './pages/approverestaurantpage/approverestaurantpage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: ConfirmEmailComponent },
  { path: 'verify-email/:email', component: VerificationCodeComponent },
  { path: 'register/:email', component: SignupComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'forget-code/:email', component: ForgetVerificationCodeComponent },
  { path: 'change-password/:email', component: ChangePasswordComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: "user/dashboard/:upid", component: UserDashboardComponent, canActivate: [AuthGuardGuard] },
  { path: "wyswyg", component: ImageWyswygComponent },
  { path: 'admin-dashboard', component: AdmindashbordComponent },
  { path: 'restaurant/:id', component: ApproverestaurantpageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
