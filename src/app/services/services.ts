import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { IEmployee } from '../interface/IEmployee';
import { IState } from '../interface/IState';
import { ICity } from '../interface/ICity';
import { IDepartment } from '../interface/IDepartment';
import { IRating } from '../interface/IRating';
import { ISkill } from '../interface/ISkill';

@Injectable()
export class serviceClass {
  
  private ShowEmployee =  "https://localhost:44360/api/employee/showEmployee";
  private AddEmployee =  "https://localhost:44360/api/employee/addEmployee";
  private UpdateEmployee =  "https://localhost:44360/api/employee/UpdateEmployee";
  private DeleteEmployee =  "https://localhost:44360/api/employee/DeleteEmployee";
  private ShowState =  "https://localhost:44360/api/state/ShowState";
  private ShowCity =  "https://localhost:44360/api/city/showCity";
  private ShowDepartment =  "https://localhost:44360/api/Department/showDepartment";
  private ShowSkill =  "https://localhost:44360/api/Skill/showSkill";
  private ShowRating =  "https://localhost:44360/api/Rating/showRating";
  private jwtLogin = "https://localhost:44360/api/Login/jwtLogin";  

  constructor(private _http: Http) { }

  public showEmployee(): Observable<IEmployee> {
    return this._http.get(this.ShowEmployee)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public addEmployee(employee): Observable<any> {
    return this._http.post(this.AddEmployee, employee)      
      .catch(err => this.handleError(err));
  }

  public updateEmployee(empID, employee): Observable<any> {
    return this._http.put(this.UpdateEmployee + "?empID=" + empID, employee)
      .catch(err => this.handleError(err));
  }

  public deleteEmployee(selectedEmployees): Observable<any> {
    return this._http.delete(this.DeleteEmployee + "?employeeIds=" + selectedEmployees)
      .catch(err => this.handleError(err));
  }

  public showState(): Observable<IState>{
    return this._http.get(this.ShowState)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showCity(stateValue): Observable<ICity>{
    return this._http.get(this.ShowCity + "?stateValue=" + stateValue )
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showDepartment() : Observable<IDepartment>{
    return this._http.get(this.ShowDepartment)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showSkill(): Observable<ISkill>{
    return this._http.get(this.ShowSkill)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }
  
  public showRatings():Observable<IRating[]> {
    return this._http.get(this.ShowRating)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public loginEmployee(UserDetail):Observable<any>{
    return this._http.post(this.jwtLogin, UserDetail)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  private handleError(error: Response) {    
    return Observable.throw('Server error');
  }
}