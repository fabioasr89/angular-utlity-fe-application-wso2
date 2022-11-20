import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { ConvertitoreDocComponent } from './convertitore-doc/convertitore-doc.component';
import { ConvertitoreVideoComponent } from './convertitore-video/convertitore-video.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BusinessComponent } from './business/business.component'
import {MatTabsModule} from '@angular/material/tabs';
import { EmailComponent } from './email/email.component';
import { LoginComponent } from './login/login.component';
import { HttpCustomInterceptor } from './interceptors/httpCustomInterceptor';
import { OAuthModule } from 'angular-oauth2-oidc';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ConvertitoreDocComponent,
    ConvertitoreVideoComponent,
    BusinessComponent,
    EmailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    OAuthModule.forRoot(),
    MatButtonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:HttpCustomInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
