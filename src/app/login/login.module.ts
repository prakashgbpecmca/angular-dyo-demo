
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const logined: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(logined)],
  exports: [RouterModule]
})
export class LoginModule { }
