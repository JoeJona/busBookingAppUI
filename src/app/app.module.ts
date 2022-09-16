import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu'


import { FlexLayoutModule } from '@angular/flex-layout';
// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { HeaderComponent } from './Components/header/header.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';


import { HttpClientModule } from '@angular/common/http';
import { UploadFormComponent } from './Components/foundation/Image-uploads/single upload/upload-form/upload-form.component';
import { UploaderComponent } from './Components/foundation/Image-uploads/Drag and Drop/uploader/uploader.component';
import { DropzoneDirective } from './Components/foundation/Image-uploads/Drag and Drop/dropzone.directive';
import { UploadTaskComponent } from './Components/foundation/Image-uploads/Drag and Drop/upload-task/upload-task.component';
import { ImageWyswygComponent } from './Components/image-wyswyg/image-wyswyg.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { SigninComponent } from './pages/signin/signin/signin.component';
import { SignupComponent } from './pages/signup/signup/signup.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password/forget-password.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard/user-dashboard.component';
import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email/confirm-email.component';
import { VerificationCodeComponent } from './pages/verification-code/verification-code/verification-code.component';
import { ForgetVerificationCodeComponent } from './pages/forget-verification-code/forget-verification-code/forget-verification-code.component';
import { ChangePasswordComponent } from './pages/change-password/change-password/change-password.component';
import { AdmindashbordComponent } from './pages/admindashbord/admindashbord.component';
import { ApproverestaurantpageComponent } from './pages/approverestaurantpage/approverestaurantpage.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UploadFormComponent,
    UploaderComponent,
    UploadTaskComponent,
    DropzoneDirective,
    ImageWyswygComponent,
    HomeComponent,
    AboutusComponent,
    FooterComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    ForgetPasswordComponent,
    UserDashboardComponent,
    ConfirmEmailComponent,
    VerificationCodeComponent,
    ForgetVerificationCodeComponent,
    ChangePasswordComponent,
    AdmindashbordComponent,
    ApproverestaurantpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EditorModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatTabsModule,
    MatSidenavModule,
    MatMenuModule,
    HttpClientModule,
    MatListModule,
    FlexLayoutModule,
    CarouselModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MaterialModule,
  ],
  providers: [ { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
