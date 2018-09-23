import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid/main';
import * as moment from 'moment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeformComponent } from '../employeeform/employeeform.component';
import { serviceClass } from '../services/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {
  public gridOptions: GridOptions;
  public rowData: any[];
  public columnDefs: any[];
  modalRef: BsModalRef;
  errorMessage: any;  

  constructor(private _serviceClass: serviceClass,
    private modalService: BsModalService ,
    private router: Router ) {
  }

  ngOnInit() {
    this.gridOptions = <GridOptions>{};
    this.createColumnDefs();
    this.createRowData();
  }

  createColumnDefs() {
    const columnDefs = [
      {        
        width:40,
        headerCheckboxSelection : true,
        headerTooltip: "Select All / Deselect All",
        checkboxSelection : true,
        suppressMenu: true,
        suppressSorting: true
      },
      {
        headerName: '<i class="fa fa-edit" style="font-size:20px;" ></i>',
        headerTooltip: 'Edit Employee',
        suppressMenu: true,
        suppressSorting: true,
        width:60,
        cellRenderer: this.editCellRenderer.bind(this)
      },
      {
        headerName: "Emp ID",
        field: "Emp_ID",
        width: 80,
        headerTooltip: "Employee ID",
        tooltipField: "Emp_ID",
        filter: "agNumberColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "First Name",
        field: "Emp_First_Name",
        width: 100,
        headerTooltip: "Employee First Name",
        tooltipField: "Emp_First_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "Last Name",
        field: "Emp_Last_Name",
        width: 100,
        headerTooltip: "Employee Last Name",
        tooltipField: "Emp_Last_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "Email ID",
        field: "Emp_Email_ID",
        width: 120,
        headerTooltip: "Emloyee Email Id",
        tooltipField: "Emp_Email_ID",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "Mobile Number",
        field: "Emp_Mobile_Number",
        width: 130,
        headerTooltip: "Employee Mobile Number",
        tooltipField: "Emp_Mobile_Number",
        filter: "agNumberColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "State",
        field: "State_Name",
        width: 100,
        headerTooltip: "Emloyee State",
        tooltipField: "State_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "City",
        field: "City_Name",
        width: 100,
        headerTooltip: "Employee City",
        tooltipField: "City_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "Skill",
        field: "Skill_Name",
        width: 100,
        headerTooltip: "Employee Skill",
        tooltipField: "Skill_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "Department",
        field: "Department_Name",
        width: 150,
        headerTooltip: "Emloyee Department",
        tooltipField: "Department_Name",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        headerName: "DATE OF BIRTH",
        field: "Emp_DOB",
        width: 130,
        headerTooltip: "Emloyee Date Of Birth",
        valueFormatter: function (data) { return moment(data.value).format('L') },        
        tooltipField: "Emp_DOB",
        filter: "agDateColumnFilter",
        filterParams: { 
          newRowsAction: 'keep',
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = moment(cellValue).format('DD/MM/YYYY');
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) { return 0 }
            if (cellDate < filterLocalDateAtMidnight) { return -1; }
            if (cellDate > filterLocalDateAtMidnight) { return 1; }
          }
        }
      },
      {
        headerName: "DATE OF JOINING",
        field: "Emp_DOJ",
        width: 130,
        headerTooltip: "Emloyee Date Of Joining",
        valueFormatter: function (data) { return moment(data.value).format('L') },
        tooltipField: "Emp_DOJ",
        filter: "agDateColumnFilter",
        filterParams: {
          newRowsAction: 'keep',
          comparator: function (filterLocalDateAtMidnight, cellValue) {
            var dateAsString = moment(cellValue).format('DD/MM/YYYY');
            var dateParts = dateAsString.split("/");
            var cellDate = new Date(Number(dateParts[2]), Number(dateParts[1]) - 1, Number(dateParts[0]));
            if (filterLocalDateAtMidnight.getTime() == cellDate.getTime()) { return 0 }
            if (cellDate < filterLocalDateAtMidnight) { return -1; }
            if (cellDate > filterLocalDateAtMidnight) { return 1; }
          }
        }
      },
      {
        headerName: "Rating",
        field: "Emp_Rating",
        width: 120,
        headerTooltip: "Emloyee Ratings",
        tooltipField: "Emp_Rating",
        filter: "agTextColumnFilter",
        filterParams: { newRowsAction: 'keep' }
      },
      {
        field:"Emp_City_ID",
        hide:true
      },
      {
        field:"Emp_State_ID",
        hide:true
      },
      {
        field:"Emp_Dept_ID",
        hide:true
      },
      {
        field:"Emp_Skill_ID",
        hide:true
      }
    ]
    this.columnDefs = columnDefs;
  }
 
  createRowData() {
    this._serviceClass.showEmployee()
      .subscribe(
        res => {          
          this.rowData = res;
        }
      )   
  }

  openModal() {
    this.modalRef = this.modalService.show(EmployeeformComponent);
    this.modalRef.content.event.subscribe(data => 
      {
          this.createRowData();
      });
  }

  deleteEmployee(){
    let selectedEmployee = null;
    let selectedRows = this.gridOptions.api.getSelectedRows();
    for(let i = 0; i < selectedRows.length; i++ ){
        selectedEmployee = selectedEmployee + (selectedRows[i].Emp_ID) + ",";
    }
    this._serviceClass.deleteEmployee(selectedEmployee)
    .subscribe((data) => {
      this.createRowData();
    }, error => this.errorMessage = error)
  }

  editCellRenderer (selectedValue: any) {
    var eDiv = document.createElement('div');   
    eDiv.innerHTML = '<i class="fa fa-edit" style="font-size:20px;" ></i>';
    var eButton = eDiv.querySelectorAll('.fa-edit')[0];
    eButton.addEventListener('click',() =>  {      
      console.log("editCellRenderer");
      this.modalRef = this.modalService.show(EmployeeformComponent);
      this.modalRef.content.onEditRow(selectedValue.data);
    });
    return eDiv;
  } 
}