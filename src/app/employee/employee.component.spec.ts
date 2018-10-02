import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeComponent } from './employee.component';
import { AgGridModule } from 'ag-grid-angular/main';

fdescribe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ]
      //import:[AgGridModule.withComponents([EmployeeComponent])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
