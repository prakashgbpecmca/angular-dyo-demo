import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { HttpInterceptorModule } from './http-interceptor.module';

@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule,
    HttpInterceptorModule
  ]
})
export class SecurityModule { }
