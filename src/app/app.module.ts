import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminPrepaidComponent } from './admin-prepaid/admin-prepaid.component';
import { AdminPostpaidComponent } from './admin-postpaid/admin-postpaid.component';
import { AdminDongleComponent } from './admin-dongle/admin-dongle.component';
import { AdminLogoutComponent } from './admin-logout/admin-logout.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminCRMComponent } from './admin-crm/admin-crm.component';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginUserComponent } from './login-user/login-user.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MatSelectModule} from '@angular/material/select';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { NewplanComponent } from './newplan/newplan.component';
import { PrepaidUserComponent } from './prepaid-user/prepaid-user.component';
import { PostpaidUserComponent } from './postpaid-user/postpaid-user.component';
import { DongleUserComponent } from './dongle-user/dongle-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';



@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminProductComponent,
    AdminPrepaidComponent,
    AdminPostpaidComponent,
    AdminDongleComponent,
    AdminLogoutComponent,
    AdminNavigationComponent,
    AdminCustomersComponent,
    AdminCRMComponent,
    RegisterComponent,
    LoginUserComponent,
    ComplaintComponent,
    ConfirmationDialogComponent,
    ForgotPasswordComponent,
    DashboardUserComponent,
    UserProfileComponent,
    UserNavComponent,
    NewplanComponent,
    PrepaidUserComponent,
    PostpaidUserComponent,
    DongleUserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatSidenavModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatExpansionModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}