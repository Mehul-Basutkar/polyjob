import { Component, OnInit } from '@angular/core';
import { Profile } from '../../employer.model';
import { EmployerService } from '../../employer.service';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {
  profile: Profile[];
  link = 'https://jobbackend.firebaseio.com/AddProfile.json';
  constructor(private employerService: EmployerService) { }

  ngOnInit() {
    this.employerService.viewJobMethod(this.link).subscribe(post => {
      this.profile = post;
  });
  }

}
