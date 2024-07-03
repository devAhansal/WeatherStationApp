import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthContentComponent} from "./auth-content/auth-content.component";
const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "login", component: LoginComponent},
  {path:"", component: AuthContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
