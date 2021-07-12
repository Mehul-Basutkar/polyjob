import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployerRoutingModule } from './employer-routing.module';

import { EmployerService } from './employer.service';

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
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Einterceptor } from './Einterceptor.service';


@NgModule({
  declarations: [
      AddjobComponent,
      EventsComponent,
      AddprofileComponent,
      SearchComponent,
      StatusComponent,
      UpdateComponent,
      EdashboardComponent,
      NavbarComponent,
      ViewjobComponent,
      ViewprofileComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [],
  providers : [
    EmployerService, {
      provide: HTTP_INTERCEPTORS,
      useClass: Einterceptor,
      multi: true
    }
  ]
})
export class EmployerModule { }
