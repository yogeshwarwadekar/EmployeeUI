import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppComponent } from './app.component';
import { serviceClass } from './services/services';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { datestampPipe } from './pipe/datestamp.pipe';
import { OnlynumberDirective } from './directive/onlynumber.directive';
import { GlobalErrorHandlerService } from './services/GlobalErrorHandle';

@NgModule({
  declarations: [ 
                  AppComponent, 
                  EmployeeformComponent,
                  datestampPipe,
                  OnlynumberDirective
                ],
  imports: [
              FormsModule,
              ReactiveFormsModule,
              BrowserModule,    
              HttpModule,
              ModalModule.forRoot(),
              BsDatepickerModule.forRoot(),
              AppRoutingModule,
              AutoCompleteModule,
              BrowserAnimationsModule    
  ],
  exports: [ModalModule],
  providers: [
                serviceClass,
                GlobalErrorHandlerService,
                { provide: ErrorHandler, useClass: GlobalErrorHandlerService }
             ],
  bootstrap: [AppComponent],
  entryComponents:[EmployeeformComponent]
})
export class AppModule { }