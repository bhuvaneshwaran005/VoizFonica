import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
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
import { PopularplanComponent } from './prepaid-user/popularplan/popularplan.component';
import { PostpaidPlansComponent } from './postpaid-user/postpaid-plans/postpaid-plans.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BillingComponent } from './billing/billing.component';
import { PaymentComponent } from './payment/payment.component';
import {MatRadioModule} from '@angular/material/radio';
import { CustomerPlansComponent } from './customer-plans/customer-plans.component';
import { ModifyComponent } from './modify/modify.component';
import { AddplanComponent } from './addplan/addplan.component';
import { PostpaidPaymentComponent } from './postpaid-payment/postpaid-payment.component';
import { DonglePaymentComponent } from './dongle-payment/dongle-payment.component';
import { ModifyPostpaidComponent } from './modify-postpaid/modify-postpaid.component';
import { ModifyDongleComponent } from './modify-dongle/modify-dongle.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortComponent } from './port/port.component';
import { GetconnComponent } from './getconn/getconn.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminLogoutComponent,
    AdminNavigationComponent,
    AdminCustomersComponent,
    AdminCRMComponent,
    RegisterComponent,
    LoginUserComponent,
    ComplaintComponent,
    ForgotPasswordComponent,
    DashboardUserComponent,
    UserProfileComponent,
    UserNavComponent,
    NewplanComponent,
    PrepaidUserComponent,
    PostpaidUserComponent,
    DongleUserComponent,
    PageNotFoundComponent,
    PopularplanComponent,
    PostpaidPlansComponent,
    FeedbackComponent,
    BillingComponent,
    PaymentComponent,
    CustomerPlansComponent,
    ModifyComponent,
    AddplanComponent,
    PostpaidPaymentComponent,
    DonglePaymentComponent,
    ModifyPostpaidComponent,
    ModifyDongleComponent,
    UpdatecustomerComponent,
    AddcustomerComponent,
    AddpostpaidComponent,
    AdddongleComponent,
    HomeComponent,
    AboutusComponent,
    PortComponent,
    GetconnComponent,


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
    CdkAccordionModule,
    MatRadioModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}