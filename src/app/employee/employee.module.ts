import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee/employee.component';
import { employeeRoutingModule } from '../employee/employee-routing.module';
import { AgGridModule } from 'ag-grid-angular/main';
import {AutoCompleteModule} from 'primeng/primeng';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    employeeRoutingModule,
    AgGridModule.withComponents([EmployeeComponent]),
    AutoCompleteModule    
  ],
  declarations: [EmployeeComponent]
})

export class employeeModule {}
