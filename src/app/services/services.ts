import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class serviceClass {
  private webURLShowEmployee = "http://localhost/Employee_API/showEmployee";
  private webURLAddEmployee = "http://localhost/Employee_API/addEmployee";
  private webURLUpdateEmployee = "http://localhost/Employee_API/updateEmployee";
  private webURLDeleteEmployee = "http://localhost/Employee_API/deleteEmployee";
  private webURLShowState = "http://localhost/Employee_API/showState";
  private webURLShowCity = "http://localhost/Employee_API/showCity";
  private webURLShowDepartment = "http://localhost/Employee_API/showDepartment";
  private webURLShowSkill = "http://localhost/Employee_API/showSkill";
  private webURLShowRating = "http://localhost/Employee_API/showRating";

  constructor(private _http: Http) { }

  public showEmployee(): Observable<any> {
    return this._http.get(this.webURLShowEmployee)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public addEmployee(employee): Observable<any> {
    return this._http.post(this.webURLAddEmployee, employee)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public updateEmployee(empID, employee): Observable<any> {
    return this._http.put(this.webURLUpdateEmployee + "?empID=" + empID, employee)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public deleteEmployee(selectedEmployees): Observable<any> {
    return this._http.delete(this.webURLDeleteEmployee + "?employeeIds=" + selectedEmployees)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showState(): Observable<any[]>{
    return this._http.get(this.webURLShowState)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showCity(stateValue): Observable<any[]>{
    return this._http.get(this.webURLShowCity + "?stateValue=" + stateValue )
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showDepartment() : Observable<any[]>{
    return this._http.get(this.webURLShowDepartment)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showSkill(): Observable<any[]>{
    return this._http.get(this.webURLShowSkill)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }
  
  public showRatings() {
    return this._http.get(this.webURLShowRating)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  private handleError(error: Response) {    
    return Observable.throw(error.json().error || 'Server error');
  }

}