import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeComponent} from '../employee/employee.component';

const employeeRoutes: Routes = [
  {path: '', component: EmployeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(employeeRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class employeeRoutingModule {
}