import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { ConvertitoreDocComponent } from './convertitore-doc/convertitore-doc.component';
import { ConvertitoreVideoComponent } from './convertitore-video/convertitore-video.component';
import { EmailComponent } from './email/email.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"convertitoredoc",component:ConvertitoreDocComponent},
  {path:"convertitorevideo",component:ConvertitoreVideoComponent},
  {path:"business",component:BusinessComponent},
  {path:"email",component:EmailComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
