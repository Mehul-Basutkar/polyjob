import { BrowserModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SiteModule } from './site/site.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EloginComponent } from './elogin/elogin.component';
import { EregiComponent } from './eregi/eregi.component';
import { SloginComponent } from './slogin/slogin.component';
import { SregiComponent } from './sregi/sregi.component';
import { AloginComponent } from './alogin/alogin.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';

import { DropdownDirective } from './dropdown.directive';
import { AuthService } from './auth.service';
import { Interceptor } from './interceptor.service';
import { LogInInterceptor } from './logInterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    EloginComponent,
    EregiComponent,
    SloginComponent,
    SregiComponent,
    AloginComponent,
    DropdownDirective,
    HomeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SiteModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS,
      useClass: LogInInterceptor,
      multi: true},
    { provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
