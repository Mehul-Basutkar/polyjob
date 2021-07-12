import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdashboardComponent } from './sdashboard/sdashboard.component';
import { DashComponent } from './sdashboard/dash/dash.component';
import { MyProfileComponent } from './sdashboard/my-profile/my-profile.component';
import { SearchJobsComponent } from './sdashboard/search-jobs/search-jobs.component';
import { SavedJobsComponent } from './sdashboard/saved-jobs/saved-jobs.component';
import { ResetPasswordComponent } from './sdashboard/reset-password/reset-password.component';

const sroutes: Routes = [
  {path: '', component: SdashboardComponent,
   children: [
     {path: 'dash', component: DashComponent},
     {path: 'myprofile', component: MyProfileComponent},
     {path: 'searchjobs', component: SearchJobsComponent},
     {path: 'savedjobs', component: SavedJobsComponent},
     {path: 'reset', component: ResetPasswordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(sroutes)],
  exports: [RouterModule]
})
export class SeekerRoutingModule { }
