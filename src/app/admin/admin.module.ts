import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AdashboardComponent } from './adashboard/adashboard.component';
import { EmployerComponent } from './adashboard/employer/employer.component';
import { SeekerComponent } from './adashboard/seeker/seeker.component';
import { ViewAddEventsComponent } from './adashboard/Employer/view-add-events/view-add-events.component';
import { ViewEmpProfileComponent } from './adashboard/Employer/view-emp-profile/view-emp-profile.component';
import { ViewEmpJobsComponent } from './adashboard/Employer/view-emp-jobs/view-emp-jobs.component';

import { AdminService } from './admin.service';


@NgModule({
  declarations: [AdashboardComponent, EmployerComponent, SeekerComponent,
                ViewAddEventsComponent, ViewEmpProfileComponent, ViewEmpJobsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
