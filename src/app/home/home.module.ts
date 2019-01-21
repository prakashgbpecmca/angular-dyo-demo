
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { CustomerComponent } from '../customer/customer.component';
import { UserComponent } from '../user/user.component';
import { AccessControlComponent } from '../accessControl/accessControl.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  exports: [
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
