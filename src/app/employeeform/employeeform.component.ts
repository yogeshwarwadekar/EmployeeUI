import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { serviceClass } from '../services/services';
import * as moment from 'moment';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css'],
  providers: [serviceClass]
})

export class EmployeeformComponent implements OnInit {
  employeeForm: FormGroup;
  modalRef: BsModalRef;
  errorMessage: any;
  myDateValue: Date;
  states: any;
  cities: any;
  skills: any;
  department: any;
  empId: number;
  filteredRating: any[];
  ratings: any[];
  public event: EventEmitter<any> = new EventEmitter();

  constructor(private _serviceClass: serviceClass,
    private frmbuilder: FormBuilder,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.employeeValidator();
    this.showState();
    this.showDepartment();
    this.showSkill();
  }

  Save() {
    if(this.empId > 0 && this.empId != null && this.empId != undefined)
    {
      this._serviceClass.updateEmployee(this.empId,this.employeeForm.value) 
        .subscribe((data) => {
          this.event.emit({data:'success'});
        },error => this.errorMessage = error)
    }
    else
    {
      this._serviceClass.addEmployee(this.employeeForm.value)
        .subscribe((data) => {
          this.event.emit({data:'success'});
      }, error => this.errorMessage = error)
    }
    this.closeModal();
  }

  closeModal() {
    this.employeeForm.reset();
    this.modalService.hide(1);
  }

  showState() {
    this._serviceClass.showState()
      .subscribe(
        res => {
          this.states = res
        }
      )
  }

  onStateChange(stateValue) {
    this.showCity(stateValue);
  }

  showCity(stateValue) {
    this._serviceClass.showCity(stateValue)
      .subscribe(
        res => {          
          this.cities = res;          
        }
      )
  }

  showSkill() {
    this._serviceClass.showSkill()
      .subscribe(
        res => {
          this.skills = res
        }
      )
  }

  showDepartment() {
    this._serviceClass.showDepartment()
      .subscribe(
        res => {
          this.department = res
        }
      )
  }

  employeeValidator() {
    this.employeeForm = this.frmbuilder.group({
      Emp_First_Name: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_Last_Name: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_Email_ID: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.maxLength(50)])],
      Emp_Mobile_Number: ['', Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(1)])],
      Emp_State_ID: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_City_ID: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_Skill_ID: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_DOB: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_DOJ: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_Dept_ID: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Emp_Rating:['', Validators.compose([Validators.required, Validators.maxLength(15), Validators.minLength(1)])]
    });
  }

  onEditRow(selectedValue: any) {
    this.empId = selectedValue.Emp_ID;
    this.showCity(selectedValue.State_ID);
    this.employeeForm.patchValue({
      Emp_First_Name: selectedValue.Emp_First_Name,
      Emp_Last_Name: selectedValue.Emp_Last_Name,
      Emp_Email_ID: selectedValue.Emp_Email_ID,
      Emp_Mobile_Number: selectedValue.Emp_Mobile_Number,
      Emp_Dept_ID: selectedValue.Department_ID,
      Emp_DOB: moment(selectedValue.Emp_DOB).format('L'),
      Emp_DOJ: moment(selectedValue.Emp_DOJ).format('L'),
      Emp_Skill_ID: selectedValue.Skill_ID,
      Emp_State_ID: selectedValue.State_ID,
      Emp_City_ID: selectedValue.City_ID,
      Emp_Rating: selectedValue.Emp_Rating
    });
  }

  filterRating(event) {
    let query = event.query;           
    this._serviceClass.showRatings().
    subscribe(
      res => {
        this.filteredRating = this.getFilteredRating(query, res);
      }
    )
  }

  getFilteredRating(query, ratings: any[]):any[] {    
    let filtered : any[] = [];
    for(let i = 0; i < ratings.length; i++) {
        let rate = ratings[i];
        if(rate.Rating_Name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(rate.Rating_Name);
        }
    }
    return filtered;
  }
}