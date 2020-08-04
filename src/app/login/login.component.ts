import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginform = this.fb.group({
      username: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      password: ['', [Validators.required, Validators.pattern('[A-Za-z0-9]{4,8}')
      ]]

    });


  }
  loginUser() {
    // if(sessionStorage.getItem('username'))
    // {
    // return true;
    // }
    // else
    // {
    // this. router.navigate(['home/dashboard']);
    // }

      if (this.loginform.invalid)
       return;
       else{
      this.router.navigate(['home/dashboard'])
     sessionStorage.setItem('username',this.loginform.get('username').value);
       }
    // this.service.isLoggedIn(this.userDetailsForm.value);

  }

 

}
