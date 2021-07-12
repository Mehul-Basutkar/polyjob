import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { Addjob } from 'src/app/admin/admin.model';

@Component({
  selector: 'app-view-emp-jobs',
  templateUrl: './view-emp-jobs.component.html',
  styleUrls: ['./view-emp-jobs.component.css']
})
export class ViewEmpJobsComponent implements OnInit {

  JobData: Addjob[];
  constructor(private adminservice: AdminService) { }

  ngOnInit() {
    this.adminservice.getData('https://jobbackend.firebaseio.com/Addjob.json').subscribe(
      responceData => {
        this.JobData = responceData;
        console.log(this.JobData);
      }
    )
  }

}
