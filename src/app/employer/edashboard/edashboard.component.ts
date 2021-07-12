import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edashboard',
  templateUrl: './edashboard.component.html',
  styleUrls: ['./edashboard.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class EdashboardComponent implements OnInit {

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor(private auth: AuthService, private route: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.emp.next(null);
    this.route.navigate(['/elogin']);
  }
}
