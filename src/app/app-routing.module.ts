import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdddongleComponent } from './adddongle/adddongle.component';
import { AddplanComponent } from './addplan/addplan.component';
import { AddpostpaidComponent } from './addpostpaid/addpostpaid.component';
import { AdminCRMComponent } from './admin-crm/admin-crm.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { CustomerPlansComponent } from './customer-plans/customer-plans.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { BillingComponent } from './billing/billing.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DonglePaymentComponent } from './dongle-payment/dongle-payment.component';
import { DongleUserComponent } from './dongle-user/dongle-user.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { ModifyDongleComponent } from './modify-dongle/modify-dongle.component';
import { ModifyPostpaidComponent } from './modify-postpaid/modify-postpaid.component';
import { ModifyComponent } from './modify/modify.component';
import { NewplanComponent } from './newplan/newplan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PostpaidPaymentComponent } from './postpaid-payment/postpaid-payment.component';
import { PostpaidUserComponent } from './postpaid-user/postpaid-user.component';
import { PrepaidUserComponent } from './prepaid-user/prepaid-user.component';
import { RegisterComponent } from './register/register.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PortComponent } from './port/port.component';
import { GetconnComponent } from './getconn/getconn.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './admin.guard';
import { AuthauardGuard } from './authauard.guard';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginUserComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  {
    path: 'userdashboard', component: UserNavComponent, children: [
      { path: 'userprofile', component: UserProfileComponent },
      { path: 'customerplans', component: CustomerPlansComponent },
      { path: 'support', component: ComplaintComponent },
      { path: 'feedback', component: FeedbackComponent },
      { path: 'billing', component: BillingComponent },
      { path: 'port', component: PortComponent },
      { path: 'newconnection', component: GetconnComponent },
      { path: 'dashboard', component: DashboardUserComponent },
      { path: 'newplan', component: NewplanComponent },
      { path: 'newplan/prepaiduser', component: PrepaidUserComponent },
      { path: 'newplan/postpaiduser', component: PostpaidUserComponent },
      { path: 'newplan/dongleuser', component: DongleUserComponent },
      { path: 'newplan/prepaiduser/payment', component: PaymentComponent },
      { path: 'newplan/dongleuser/donglepayment', component: DonglePaymentComponent },
      { path: 'newplan/postpaiduser/postpaidpayment', component: PostpaidPaymentComponent },
      { path: '', redirectTo: '/userdashboard/newplan', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },

    ], canActivate: [AuthauardGuard]
  },

  { path: 'newconnection', component: GetconnComponent },
  { path: 'port', component: PortComponent },
  { path: 'support', component: ComplaintComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'prepaiduser', component: PrepaidUserComponent },
  { path: 'postpaiduser', component: PostpaidUserComponent },
  { path: 'dongleuser', component: DongleUserComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'postpaidpayment', component: PostpaidPaymentComponent },
  { path: 'donglepayment', component: DonglePaymentComponent },

  { path: 'adminlogin', component: AdminLoginComponent },
  {
    path: 'admindashboard', component: AdminNavigationComponent, children: [
      { path: 'page', component: AdminDashboardComponent },
      { path: 'newplan', component: NewplanComponent },
      { path: 'newplan/prepaiduser', component: PrepaidUserComponent },
      { path: 'newplan/postpaiduser', component: PostpaidUserComponent },
      { path: 'newplan/dongleuser', component: DongleUserComponent },
      { path: '', redirectTo: '/admindashboard/page', pathMatch: 'full' },
      { path: 'admincustomers', component: AdminCustomersComponent },
      { path: 'admincrm', component: AdminCRMComponent },
      { path: 'updatecustomer', component: UpdatecustomerComponent },
      { path: 'adminlogout', redirectTo: '/adminlogin', pathMatch: 'full' },
      { path: 'customerplans', component: CustomerPlansComponent },
      { path: 'addcustomer', component: AddcustomerComponent },
      { path: 'modify', component: ModifyComponent },
      { path: 'modifypostpaid', component: ModifyPostpaidComponent },
      { path: 'modifydongle', component: ModifyDongleComponent },
      { path: 'addplan', component: AddplanComponent },
      { path: 'addpostpaidplan', component: AddpostpaidComponent },
      { path: 'adddongle', component: AdddongleComponent },

    ], canActivate: [AdminGuard]
  },


  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
