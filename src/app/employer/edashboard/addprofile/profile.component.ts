import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class AddprofileComponent implements OnInit {
  addProfile: FormGroup;
  formtitle = 'Add profile';
  constructor(private http: HttpClient,
              private toast: ToastrService,
              private auth: AuthService) { }
  data;
  ngOnInit() {
    this.addProfile = new FormGroup ({
      username: new FormControl(null),
      typeofcompany: new FormControl(null),
      Typeofcontrol: new FormControl(null),
      Typeofproduct: new FormControl(null),
      Categories: new FormControl(null),
      subcategories: new FormControl(null),
      numberofemployee: new FormControl(null),
      Address: new FormControl(null),
      district: new FormControl(null),
      city: new FormControl(null),
      Pincode: new FormControl(null),
      Achievements: new FormControl(null),
      optionalcontactnumber: new FormControl(null),
      companyimages: new FormControl(null),
      contactPname: new FormControl(null),
      designation: new FormControl(null),
      contactnum: new FormControl(null),
      email: new FormControl(null),

    });
  }

  submision() {
    // console.log(this.addProfile.value);
    this.data = JSON.stringify(this.addProfile.value);
    this.http.post('https://jobbackend.firebaseio.com/AddProfile.json', this.data).subscribe(
      Response => {
        this.toast.success('profile generated successfully','Profile generation');
        this.addProfile.reset();
      });
  }
}
