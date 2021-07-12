import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  private empSub: Subscription;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.empSub = this.auth.emp.subscribe( emp => {
      this.isAuth = !!emp;
    });
  }

  ngOnDestroy() {
    this.empSub.unsubscribe();
  }

}
