import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EloginComponent } from './elogin/elogin.component';
import { EregiComponent } from './eregi/eregi.component';
import { SloginComponent } from './slogin/slogin.component';
import { SregiComponent } from './sregi/sregi.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';

const homeRoutes: Routes = [
  {path: '', redirectTo : 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'elogin', component : EloginComponent},
  {path: 'adash', loadChildren: './admin/admin.module#AdminModule'},
  {path: 'eregi', component : EregiComponent},
  {path: 'slogin', component: SloginComponent},
  {path: 'sdash', loadChildren: './seeker/seeker.module#SeekerModule'},
  {path: 'sregi', component: SregiComponent},
  {path: 'edash', canActivate: [AuthGuard],
   loadChildren: './employer/employer.module#EmployerModule'},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(homeRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
