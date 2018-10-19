import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';


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
  

  constructor(private _http: Http) { }

  public showEmployee(): Observable<any> {
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

  public showState(): Observable<any[]>{
    return this._http.get(this.ShowState)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showCity(stateValue): Observable<any[]>{
    return this._http.get(this.ShowCity + "?stateValue=" + stateValue )
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showDepartment() : Observable<any[]>{
    return this._http.get(this.ShowDepartment)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  public showSkill(): Observable<any[]>{
    return this._http.get(this.ShowSkill)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }
  
  public showRatings() {
    return this._http.get(this.ShowRating)
      .map((response: Response) => response.json())
      .catch(err => this.handleError(err));
  }

  private handleError(error: Response) {    
    return Observable.throw('Server error');
  }

}