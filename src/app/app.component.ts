import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
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
  sideopened: boolean=false;
  openside(e:any) {
    this.sideopened= !this.sideopened;
  }

  isSideNavCollapsed = true;
  screenWidth= 0;
  onToggleSideNav(data: SideNavToggle): void{
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
