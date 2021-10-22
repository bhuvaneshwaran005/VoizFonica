import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCRMComponent } from './admin-crm/admin-crm.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminDongleComponent } from './admin-dongle/admin-dongle.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';
import { AdminPostpaidComponent } from './admin-postpaid/admin-postpaid.component';
import { AdminPrepaidComponent } from './admin-prepaid/admin-prepaid.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

import { ComplaintComponent } from './complaint/complaint.component';
import { DongleUserComponent } from './dongle-user/dongle-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
//import { AuthGuard } from './guards/auth.guard';
import { LoginUserComponent } from './login-user/login-user.component';
import { NewplanComponent } from './newplan/newplan.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostpaidUserComponent } from './postpaid-user/postpaid-user.component';
import { PrepaidUserComponent } from './prepaid-user/prepaid-user.component';
import { RegisterComponent } from './register/register.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginUserComponent},
  {path: 'forgotpassword', component:ForgotPasswordComponent},
  {path:'userdashboard',component:UserNavComponent},
  {path: 'complaint', component:ComplaintComponent},
  {path:'userprofile',component:UserProfileComponent},
  {path:'newplan',component:NewplanComponent},
  {path:'prepaiduser',component:PrepaidUserComponent},
  {path:'postpaiduser',component:PostpaidUserComponent},
  {path:'dongleuser',component:DongleUserComponent},
  {path:'', redirectTo:'/login',pathMatch:'full'},
  { path: '**', component: PageNotFoundComponent },
  {path: 'adminlogin',component: AdminLoginComponent},
  {path: 'admindashboard',component: AdminNavigationComponent},
  {
    path: 'adminproduct',
    component: AdminProductComponent
  },
  {
    path: 'adminprepaid',
    component: AdminPrepaidComponent
  },
  {
    path: 'adminpostpaid',
    component: AdminPostpaidComponent
  },
  {
    path: 'admindongle',
    component: AdminDongleComponent
  },
  {
    path: 'admincustomers',
    component: AdminCustomersComponent
  },
  {
    path: 'admincrm',
    component: AdminCRMComponent
  },
  {
    path: 'adminlogout',
    redirectTo: '/adminlogin', pathMatch: 'full'
    
  },
  
  {
    path: '',
    redirectTo: '/adminlogin', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
