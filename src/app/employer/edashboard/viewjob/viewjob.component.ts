import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployerService } from '../../employer.service';
import { Addjob } from '../../employer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewjob',
  templateUrl: './viewjob.component.html',
  styleUrls: ['./viewjob.component.css']
})
export class ViewjobComponent implements OnInit {
 LoadedData: Addjob[];

  constructor(private route: Router, private http: HttpClient, private employerService: EmployerService) {

  }

  link = 'https://jobbackend.firebaseio.com/Addjob.json';
  ngOnInit() {
     this.employerService.viewJobMethod(this.link).subscribe(post => {
      this.LoadedData = post;
    });
  }

  delete(id: any) {
    this.http.delete('https://jobbackend.firebaseio.com/Addjob/' + id + '.json')
    .subscribe(() => {
      this.employerService.viewJobMethod(this.link).subscribe(post => {
        this.LoadedData = post;
      });
    });
  }

  update(id, index) {
    // console.log(this.LoadedData[index]);
    this.route.navigateByUrl('edash/addjob');
    // this.addjc.addjob.setValue(this.LoadedData[index]);
    this.employerService.editjob.emit(this.LoadedData[index]);
  }
}
