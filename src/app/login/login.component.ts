import { Component, OnInit } from '@angular/core';
import { serviceClass } from '../services/services';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, } from '@angular/router';
import { NotificationService } from '../services/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: any;

  constructor(private _serviceClass: serviceClass,
    private frmbuilder: FormBuilder,
    private router: Router,
    private notifyService : NotificationService) { }

  ngOnInit() {
    this.loginValidator();
  }


  loginValidator() {
    this.loginForm = this.frmbuilder.group({
      UserID: [0],
      UserName: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])],
      Password: ['', Validators.compose([Validators.required, Validators.maxLength(50), Validators.minLength(1)])]
    });
  }


  Save() {
    this._serviceClass.loginEmployee(this.loginForm.value)
      .subscribe((data) => {
        if (data != null || data != undefined  ) {
          this.router.navigate(['/employee']);
        }
        else {
          this.notifyService.showError("Please check credential!!", "Log In Failed");
        }
      }, error => this.errorMessage = error)
  }
}
