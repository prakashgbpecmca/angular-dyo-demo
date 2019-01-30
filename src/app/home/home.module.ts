
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [RouterModule, CommonModule,  BsDropdownModule.forRoot()],
  exports: [
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
