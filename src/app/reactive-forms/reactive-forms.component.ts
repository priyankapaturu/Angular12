import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  //updateValue;
 // userProfileForm : FormGroup;
 isShowSubmitBtn :boolean=true;
 //userProfileForm: any = [];
  constructor() { }
  
  ngOnInit(): void {
  }

 userProfileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    address: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    message: new FormControl(''),
  });

  
  //if(typeOf(userProfileForm)>0){

 // }

  getProfileData(){
    //this.isShowSubmitBtn=true;
    if(this.userProfileForm){
      //  this.isShowSubmitBtn=true;
        this.userProfileForm = this.userProfileForm;
    } {
    //  this.isShowSubmitBtn=false;
    }
    console.log(this.userProfileForm.value);
    console.log(this.userProfileForm.controls['name'].value);
  }
 // updateValue = this.userProfileForm.value;
  //this.udateValue=updateValue;
}
