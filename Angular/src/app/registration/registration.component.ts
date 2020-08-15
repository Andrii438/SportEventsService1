import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';
import { MyEvent } from '../add-event/add-event.component';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  password:string;
  username:string;
  email:string;
  phone:string;
  person:Person;
  usernameBusy:boolean=false;
  constructor(private personservice: DataService,private router:Router) { }

  ngOnInit(): void {

  }
  createPerson(){
   
    this.person = new Person(this.password,this.username,this.email,this.phone)
    this.personservice.createPerson(this.person)
    .subscribe(
      data=>{
        console.log(data)
        if (data===null){
          console.log("An username is already busy")
          this.usernameBusy=true
        }
        else{
            this.usernameBusy=false
        }
        if(!this.usernameBusy)
        this.router.navigate(['login'])
      }
    )
  }
}

export class Person{
  password:string;
  username:string;
  email:string;
  id:number;
  phoneNumber:string;
  events:Array<MyEvent>
  constructor(password,username,email?,phoneNumber?,id?,events?){
    this.password=password;
    this.username=username;
    this.email = email;
    this.id=id
    this.events=events
    this.phoneNumber=phoneNumber
  }
  showDetails(){
    console.log('password:'+this.password + ' username:'+this.username+' e-mail:'+this.email+" PhoneNumber: "+ this.phoneNumber)
  }
}