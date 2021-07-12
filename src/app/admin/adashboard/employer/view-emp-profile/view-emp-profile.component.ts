import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Profile } from 'src/app/admin/admin.model';

@Component({
  selector: 'app-view-emp-profile',
  templateUrl: './view-emp-profile.component.html',
  styleUrls: ['./view-emp-profile.component.css']
})
export class ViewEmpProfileComponent implements OnInit {

  profile : Profile[];
  link = 'https://jobbackend.firebaseio.com/AddProfile.json';
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.getData(this.link).subscribe(post => {
      this.profile = post;
      console.log(this.profile);
    });
  }

}
