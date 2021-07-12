import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekerRoutingModule } from './seeker-routing.module';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { DashComponent } from './sdashboard/dash/dash.component';
import { MyProfileComponent } from './sdashboard/my-profile/my-profile.component';
import { SearchJobsComponent } from './sdashboard/search-jobs/search-jobs.component';
import { SavedJobsComponent } from './sdashboard/saved-jobs/saved-jobs.component';
import { ResetPasswordComponent } from './sdashboard/reset-password/reset-password.component';


@NgModule({
  declarations: [
        SdashboardComponent,
        DashComponent,
        MyProfileComponent,
        SearchJobsComponent,
        SavedJobsComponent,
        ResetPasswordComponent],
  imports: [
    CommonModule,
    SeekerRoutingModule
  ],
  exports : [],
})
export class SeekerModule { }
