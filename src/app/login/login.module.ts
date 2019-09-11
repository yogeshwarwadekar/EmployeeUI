import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { LoginComponent } from './login.component';
import { HeaderInterceptor } from '../Interceptor/headerinterceptor';
import { ResponseInterceptor } from '../Interceptor/responceinterceptor';
import { loginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      HttpClientModule,
      loginRoutingModule      
    ],
    declarations: [LoginComponent],
    providers:[
      { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi:true }
    ]
  })

export class loginModule {}