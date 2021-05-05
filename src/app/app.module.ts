import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ViewTicketsComponent } from './components/view-tickets/view-tickets.component';
import { ViewTicketDetailsComponent } from './components/view-ticket-details/view-ticket-details.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { UpdateTicketComponent } from './components/update-ticket/update-ticket.component';
import { AdminViewTicketComponent } from './components/admin-view-ticket/admin-view-ticket.component';
import { AdminUpdateTicketComponent } from './components/admin-update-ticket/admin-update-ticket.component';
@NgModule({
  declarations: [
    AppComponent,
    UserRegisterComponent,
    UserLoginComponent,
    HomePageComponent,
    ForgotPassComponent,
    CreateTicketComponent,
    ViewTicketsComponent,
    ViewTicketDetailsComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    UpdateTicketComponent,
    AdminViewTicketComponent,
    AdminUpdateTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
