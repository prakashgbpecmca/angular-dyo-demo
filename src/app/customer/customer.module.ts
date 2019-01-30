import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerService } from './customer.service';
import { CustomerAddEditComponent } from './customer-add-edit.component';

@NgModule({
  declarations: [
    CustomerAddEditComponent
  ],
  imports: [
    CommonModule
  ],
providers: [CustomerService]
})
export class CustomerModule { }
