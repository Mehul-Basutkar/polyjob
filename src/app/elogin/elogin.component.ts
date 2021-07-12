import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer/employer.service';
import { Employer } from '../employer/employer.model';
import { Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-elogin',
  templateUrl: './elogin.component.html',
  styleUrls: ['./elogin.component.css']
})
export class EloginComponent implements OnInit {
  loading = false;  error: string = null;
  signinForm: FormGroup;

  constructor(private emp: EmployerService,
              private routers: Router,
              private http: HttpClient,
              private auth: AuthService) { }
   allemp: Employer[];  any; msg;

  ngOnInit() {
    this.signinForm = new FormGroup({
      mail : new FormControl(null, Validators.email),
      password : new FormControl(null, Validators.required)
    });
  }

  loggedIn(mail: string, password: number) {
    mail = this.signinForm.value.mail;
    password = this.signinForm.value.password;
    this.auth.logIn(mail, password).subscribe(
      respdata => {
        this.loading = true;
        console.log(respdata);
        this.routers.navigate(['/edash']);
        this.loading = false;
      }, errorMsg => {
       this.error = errorMsg;
       // console.log(this.error);
       this.loading = false;
        });
  }


}
