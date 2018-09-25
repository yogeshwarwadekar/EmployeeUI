import { Component } from '@angular/core';
export interface IEmployee {
    Emp_ID: number,
    Emp_First_Name:string,
    Emp_Last_Name:string,
    Emp_Email_ID:string,
    Emp_Mobile_Number:string,
    State_Name: string,
    City_Name: string,
    Skill_Name: string,
    Emp_DOB: Date,
    Emp_DOJ: Date,
    Department_Name: string,
    Emp_Rating: string
}