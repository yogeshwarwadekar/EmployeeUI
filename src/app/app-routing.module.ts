import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [    
    {path: '', loadChildren: '../app/employee/employee.module#employeeModule' }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

  export class AppRoutingModule {
}
  