import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
