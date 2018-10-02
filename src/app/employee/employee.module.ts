import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import { employeeRoutingModule } from '../employee/employee-routing.module';
import { AgGridModule } from 'ag-grid-angular/main';
import { AutoCompleteModule } from 'primeng/primeng';
import { HeaderInterceptor } from "../Interceptor/headerinterceptor";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { ResponseInterceptor } from '../Interceptor/responceinterceptor';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    employeeRoutingModule,
    AgGridModule.withComponents([EmployeeComponent]),
    AutoCompleteModule,
    HttpClientModule
  ],
  declarations: [EmployeeComponent],
  providers:[
              { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
              { provide: HTTP_INTERCEPTORS, useClass: ResponseInterceptor, multi:true }
            ]
})

export class employeeModule {}
