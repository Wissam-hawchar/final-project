import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private router: Router) {}

  title = 'Techtore';
  isloggedin(): boolean{
    if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
      return true
    }
    return false
  }
  sideopened: boolean=true;
  openside(e:any) {
    this.sideopened= !this.sideopened;
  }
}
