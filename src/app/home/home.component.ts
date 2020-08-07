import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sidenaveContent=[
   
    {
    'iconName':'dashboard',
    'name':'Dashboard',
    'path':'home/dashboard'
},
{
'iconName':'settings_applications',
    'name':'Settings',
    'path':'home' 
}
,
{
'iconName':'perm_identity',
    'name':'Add User',
    'path':'home/user'
},
{
  'iconName':'power_settings_new',
      'name':'Logout',
      'path':''
  }]

  constructor(private router:Router) { }

  ngOnInit() {
  }
  navigateTo(arg,sidenav){
    this.router.navigate([`${arg}`]);
    // sidenav.close();
    }
}
