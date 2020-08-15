import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginComponent} from '../login/login.component';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   user:string='';
  constructor(private router:Router,
    private authService:AuthService,
    public login:LoginComponent ) { }
    isLoggedIn$: Observable<boolean>;
  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn
    this.user=sessionStorage.getItem('authenticatedUser')
  }
  getUser(){
    let username =sessionStorage.getItem('authenticatedUser')
    return username
  }
  logout(){
    this.authService.logout()
  }
}
