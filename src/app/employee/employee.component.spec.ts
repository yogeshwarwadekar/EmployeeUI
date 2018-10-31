import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { AgGridModule } from 'ag-grid-angular/main';
import { serviceClass } from '../services/services';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';

fdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ], 
      imports:[
                AgGridModule.withComponents([EmployeeComponent]),
                HttpModule,
                BrowserAnimationsModule,
                ModalModule.forRoot(),
                AppRoutingModule
              ],
      providers:[
                  serviceClass,
                  {provide: APP_BASE_HREF, useValue : '/' }
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee Component.', () => {
    expect(component).toBeTruthy();
  });
});
