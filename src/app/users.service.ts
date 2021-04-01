import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

private userData=[];

collectData(userDetails:FormGroup)
{
  this.userData.push(userDetails);
}
getUserData()
{return this.userData;}
}
