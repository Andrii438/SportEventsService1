import { Component, OnInit, Injectable } from '@angular/core';
import { DataService } from '../service/data.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { MyEvent } from '../add-event/add-event.component';
import { BehaviorSubject, Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   username:string = '';
   password:string = '';
   errorMessage:string='Incorrect login or password ';
   hide: boolean=false;
  constructor(private personservice: DataService,
    private authService:AuthService,
    private router:Router) { }

ngOnInit(): void {
  }
  Login(){
    this.authService.login(this.username,this.password)
    this.hide=true
    //let person = new Person(this.username,this.password)
    // person.showDet()
    // this.personservice.getPerson(person).subscribe(
    //   data=>{
    //     if(data){
    //       sessionStorage.setItem('authenticatedUser',this.username);
    //       this.loggedIn.next(true);
    //       // console.log("logged in: "+this.state)
    //       this.router.navigate(['welcome',this.username])
    //     }
    //     console.log(data)
    //     // console.log(this.state)
    //   }
    // )

  }

  
}
export class Person{
  id:number
  username:string;
  password:string;
  email:string
  events:Array<MyEvent>
  //id:number;
  constructor(username,password?,email?,id?,events?){
    this.username=username;
    this.password=password;
    this.email=email;
    this.id=id;
    this.events=events
  }

  // showDet(){
  //   console.log("Username:"+this.username+"password:" + this.password)
  // }
}

