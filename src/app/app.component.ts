import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from './users.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(public router:Router) {
    
  }
}
