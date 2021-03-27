import { Component, VERSION } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  userDetails = new FormGroup({
    userName: new FormControl(),
    userEmail: new FormControl('',Validators.required),
    userPhone: new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{10}")]),
    userAddress: new FormControl(),
  }) 
  userData=[];
  
  get email(){return this.userDetails.get('userEmail');}
  get phone(){return this.userDetails.get('userPhone');}

  collectData()
  {
    this.userData.push(this.userDetails.value);
  }
  
  visibleUser=1;
  inputNameUpdate='';
  updateName(val)
  {
    this.inputNameUpdate=val;
  }
}
