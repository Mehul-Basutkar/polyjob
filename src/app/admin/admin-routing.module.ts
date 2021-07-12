import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdashboardComponent } from './adashboard/adashboard.component';
import { ViewEmpProfileComponent } from './adashboard/Employer/view-emp-profile/view-emp-profile.component';
import { ViewEmpJobsComponent } from './adashboard/Employer/view-emp-jobs/view-emp-jobs.component';
import { ViewAddEventsComponent } from './adashboard/Employer/view-add-events/view-add-events.component';


const aroutes: Routes = [
  { path : '', component : AdashboardComponent,
  children : [
    {path: 'empProfile', component : ViewEmpProfileComponent},
    {path: 'empjobs', component: ViewEmpJobsComponent},
    {path: 'empaddevents', component: ViewAddEventsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(aroutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
