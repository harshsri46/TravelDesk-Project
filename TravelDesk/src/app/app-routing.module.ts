import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RequestFormComponent } from './request-form/request-form.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  {
    path:"loginForm",
    component:LoginFormComponent,
    pathMatch:"full"
  },
  {
    path:"RequestForm",
    component:RequestFormComponent,
    pathMatch:"full"
  },
  {
    path:'',
    component:LoginFormComponent,
    pathMatch:"full"
  },
  {
    path:'AdminDashboard',
    component:AdminPageComponent,
    pathMatch:"full"
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
