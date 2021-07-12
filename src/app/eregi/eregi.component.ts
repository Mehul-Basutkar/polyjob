import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../employer/employer.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-eregi',
  templateUrl: './eregi.component.html',
  styleUrls: ['./eregi.component.css']
})
export class EregiComponent implements OnInit {
    eregi: FormGroup; data;
    email: string;
    password: number;
    loading = false;
    error: string = null;

  constructor(
    private toast: ToastrService,
    public empl: EmployerService,
    private router: Router,
    private http: HttpClient,
    private authserv: AuthService) {}

  ngOnInit() {
    this.eregi = new FormGroup ({
      companyName: new FormControl(null),
      companyEmail: new FormControl(null),
      companyMob: new FormControl(null)
    });
  }

    submissionn() {
     this.email = this.eregi.value.companyEmail;
     this.password = this.eregi.value.companyMob;
     this.loading = true;
     this.authserv.signup(this.email, this.password).subscribe(
       respdata => {
         console.log(respdata);
         this.loading = true;
         this.router.navigate(['/elogin']);
       }, errorMsg => {
        this.error = errorMsg;
        console.log(this.error);
        this.loading = false;
         });
     this.eregi.reset();
    }
  }
