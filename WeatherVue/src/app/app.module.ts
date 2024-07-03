import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from 'primeng/table';
import {CommonModule} from "@angular/common";
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { LoginComponent } from './login/login.component';
import { AuthContentComponent } from './auth-content/auth-content.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    AuthContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    CommonModule,
    ButtonModule,
    PaginatorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
