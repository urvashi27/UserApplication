import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { StaticdataService } from '../staticdata.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  selectedValue: string;
  submitted=false;
  userform:FormGroup;
  

  constructor(private router:Router,private fb:FormBuilder,private service: StaticdataService) { }
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  ngOnInit() {
    
    this.userform=this.fb.group({
      name:['',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]],
      phoneNumber:['',[Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(10),
        Validators.minLength(10)]],
      email:['',[Validators.required,Validators.email]],
      subject:['',[Validators.required]]
    })
     
  }
  subjects:any = [
    {value: 'maths', viewValue: 'Maths'},
    {value: 'english', viewValue: 'English'},
    {value: 'science', viewValue: 'Science'},
    {value: 'hindi', viewValue: 'hindi'},
    {value: 'social science', viewValue: 'Social Science'}
  ];
  get f() {
     return this.userform.controls;
     }
  add()
  {
    this.submitted=true;
    if(this.userform.invalid)
    return;
    else{
      
     
    this.service.userDetails=this.userform.value;
    console.log(this.service.userDetails);
    // this.userform.reset();
    // this.userform.markAsPristine();
    // this.userform.markAsUntouched();
    this.router.navigate(['home/dashboard']);
    }

}
}
