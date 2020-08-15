import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventsComponent } from './events/events.component';
import {PersonEventsComponent} from './person-events/person-events.component';
import{AuthGuard} from '../app/auth.guard'
import { RestEventsComponent } from './rest-events/rest-events.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component:WelcomeComponent,canActivate: [AuthGuard] },
  {path: 'registration', component:RegistrationComponent},
  {path: 'addEvent', component:AddEventComponent,canActivate: [AuthGuard]},
  {path: 'events', component:EventsComponent,canActivate: [AuthGuard] },
  {path: ':name/events', component:PersonEventsComponent,canActivate: [AuthGuard] },
  {path: 'events/:type', component:RestEventsComponent,canActivate: [AuthGuard] },
  {path: 'changePassword', component:ChangePasswordComponent},
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
