import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployerService } from '../../employer.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {

  constructor(private toast: ToastrService,
              private employerService: EmployerService,
              private http: HttpClient,
              private auth: AuthService) {}
  addjob: FormGroup;  data;
  title = 'Add job';
  btn = 'Add';

  ngOnInit() {
    this.addjob = new FormGroup ({
      job_type: new FormControl (null),
      technologies: new FormControl (null),
      description: new FormControl(null),
      salary: new FormControl(null),
      district: new FormControl(null),
      city: new FormControl(null),
      experiance: new FormControl(null),
      post: new FormControl(null),
      vacancies: new FormControl(null)
    });

    this.employerService.editjob.subscribe(
      (getdata) => {
        console.log(getdata);
      });
  }

  submission() {
    this.data = JSON.stringify(this.addjob.value);
    this.http.post('https://jobbackend.firebaseio.com/Addjob.json', this.data, {
      params: new HttpParams().set('auth', this.auth.tokenval)
    }).
    subscribe(responceData => {
     this.toast.success('new job added successfully', 'Add new job');
     this.addjob.reset();
    });
  }
}
