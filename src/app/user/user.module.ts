import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { UserComponent } from './user.component';

import { UserAddEditComponent } from './user-add-edit.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
  ],
  imports: [
RouterModule.forChild([
{ path: "user", component: UserComponent }
])
  ],
  providers: [UserService],
})
export class AppModule { }
