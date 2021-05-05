import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


const routes: Routes = [
  { path: 'register', component: UserRegisterComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'home', component: HomePageComponent},
  { path: 'forgotpassword', component: ForgotPassComponent},
  { path: 'createticket', component: CreateTicketComponent},
  { path: 'viewtickets', component: ViewTicketsComponent },
  { path: 'viewticket/:id', component: ViewTicketDetailsComponent },
  { path: 'adminlogin', component: AdminLoginComponent},
  { path: 'adminhome', component: AdminHomeComponent},
  { path: 'updateticket/:id', component: UpdateTicketComponent },
  { path: 'admin/updateticket/:id', component: AdminUpdateTicketComponent },
  { path: 'ticketdetail/:id', component: AdminViewTicketComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
