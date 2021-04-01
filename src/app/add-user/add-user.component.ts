import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl,FormGroup,Validators} from '@angular/forms';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userDetails: FormGroup;
  constructor(private fb:FormBuilder, private userService:UsersService) { }
  
  ngOnInit(): void {
    this.createNewUser();
  }
  createNewUser(){
  this.userDetails = this.fb.group({
    userName: new FormControl(),
    userEmail: new FormControl('',Validators.required),
    userPhone: new FormControl('',[Validators.required, Validators.pattern("[0-9 ]{10}")]),
    userAddress: new FormControl(),
  })
}
  get email(){return this.userDetails.get('userEmail');}
  get phone(){return this.userDetails.get('userPhone');}
 onSubmit()
  {
    this.userService.collectData(this.userDetails);
  }

}
