import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EloginComponent } from '../elogin/elogin.component';
import { EregiComponent } from '../eregi/eregi.component';
import { EdashboardComponent } from './edashboard/edashboard.component';
import { AddjobComponent } from './edashboard/addjob/addjob.component';
import { EventsComponent } from './edashboard/events/events.component';
import { AddprofileComponent } from './edashboard/addprofile/profile.component';
import { SearchComponent } from './edashboard/search/search.component';
import { StatusComponent } from './edashboard/status/status.component';
import { UpdateComponent } from './edashboard/update/update.component';
import { NavbarComponent } from './edashboard/navbar/navbar.component';
import { ViewjobComponent } from './edashboard/viewjob/viewjob.component';
import { ViewprofileComponent } from './edashboard/viewprofile/viewprofile.component';

const routes: Routes = [
  { path : '', component : EdashboardComponent,
  children : [
    { path : 'navbar', component : NavbarComponent},
    { path : 'addjob', component : AddjobComponent},
    { path : 'events', component : EventsComponent},
    { path : 'profile', component : AddprofileComponent},
    { path: 'viewProfile', component: ViewprofileComponent},
    { path : 'search', component : SearchComponent},
    { path : 'status', component : StatusComponent},
    { path : 'update', component : UpdateComponent},
    { path : 'viewjob', component : ViewjobComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
