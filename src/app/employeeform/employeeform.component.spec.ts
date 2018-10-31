import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeformComponent } from './employeeform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';
import { serviceClass } from '../services/services';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

fdescribe('EmployeeformComponent', () => {
  let component: EmployeeformComponent;
  let fixture: ComponentFixture<EmployeeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
                  FormsModule,
                  ReactiveFormsModule,
                  AutoCompleteModule,
                  HttpModule,
                  BrowserAnimationsModule,
                  ModalModule.forRoot(),
               ],
      declarations: [ EmployeeformComponent ],
      providers:[
                   serviceClass
                ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee Form Component.', () => {
    expect(component).toBeTruthy();
  });
});
