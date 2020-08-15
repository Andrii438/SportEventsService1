import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from '../registration/registration.component';
import { DataService } from './data.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public LoggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.LoggedIn.asObservable(); // {2}
  }
  constructor(private data:DataService,
    private router:Router){}
  login(username: string, password: string){  
    this.data.getPerson(username,password).subscribe(
      data=>{
        if(data!=null){
          sessionStorage.setItem('authenticatedUser', username);
          this.router.navigate(['welcome'])  
          this.LoggedIn.next(true);
          return true;
        } else{
          return false
        }
      }
    )
  }  
  logout() {  
    sessionStorage.removeItem('authenticatedUser');
    this.router.navigate(['login'])  
    this.LoggedIn.next(false);
  }  
  public get loggedIn(): boolean {  
    return (sessionStorage.getItem('authenticatedUser') !== null);  
  }  

}
