
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ProfileComponent } from '../profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule,  BsDropdownModule.forRoot()],
  exports: [
  ],
  declarations: [HomeComponent, ProfileComponent],
  entryComponents: [ProfileComponent]
})
export class HomeModule {}
