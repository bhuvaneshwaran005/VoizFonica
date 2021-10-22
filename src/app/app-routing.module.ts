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


const routes: Routes = [
  {
    path: 'adminlogin',
    component: AdminLoginComponent
  },

  {
    path: 'admindashboard',
    component: AdminNavigationComponent
  },
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
