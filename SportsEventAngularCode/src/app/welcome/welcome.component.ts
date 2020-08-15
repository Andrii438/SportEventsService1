import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private serviceGuard:AuthService) { }

  ngOnInit(): void {
    let username = sessionStorage.getItem("authenticatedUser")
    if(username!=null)
      this.serviceGuard.LoggedIn.next(true)
  }

}
