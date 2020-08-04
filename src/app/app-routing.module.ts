import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import {UserdetailsComponent} from './userdetails/userdetails.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  
  children: [{
    path: 'user',
    component:UserdetailsComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  }]},
  {

  path:'',
  component:LoginComponent
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
