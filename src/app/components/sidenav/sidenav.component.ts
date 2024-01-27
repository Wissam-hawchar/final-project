import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { animate, animation, keyframes, style, transition, trigger } from '@angular/animations';
import { UserAuthService } from 'src/app/core/services/user-auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity:1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity:0})
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        animate('1000ms',
          keyframes([
            style({transform:'rotate(0deg)',offset:'0'}),
            style({transform:'rotate(2turn)',offset:'1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit{
  param = {value: 'world'};
  
  constructor(public userAuthService: UserAuthService, 
              private router: Router,
              public translate: TranslateService) {
                this.translate.addLangs(['en', 'fr','ar']);
                this.translate.setDefaultLang('en');

              }

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> =new EventEmitter();
  collapsed=false;
  screenWidth= 0;
  navData=navbarData;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    if (this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }
  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  logoutAction () {
    this.userAuthService.logout().then(()=>{
      localStorage.setItem('token', "")
      this.router.navigateByUrl('/')
    }).catch(()=>{
      localStorage.setItem('token', "")
      this.router.navigateByUrl('/')
    })
   
  }
  
  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void{
    this.collapsed=false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }
}
