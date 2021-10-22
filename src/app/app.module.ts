import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import {  HttpClientModule } from '@angular/common/http';
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
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}