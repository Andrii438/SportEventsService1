import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Person } from '../registration/registration.component';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  public type: string = '';
  public places: number = 0;
  public dateEvent: Date = new Date();
  public persons: Array<Person>;
  public owner: Person;
  //public phone: string = '';
  public Event: MyEvent;
  constructor(private service: DataService,
    private serviceGuard:AuthService,
    private router:Router) { }
  ngOnInit(): void {
    let username = sessionStorage.getItem('authenticatedUser');
    if(username!=null)
      this.serviceGuard.LoggedIn.next(true)
    this.service.getPersonByUsername(username).subscribe(
      data => {
        this.owner = data;
      }
    )
  }
  add() {
    this.Event = new MyEvent(this.type, this.places, this.dateEvent, this.owner.phoneNumber, this.owner)
    this.Event.showDet();
    this.service.addEvent(this.Event, this.owner.username).subscribe(
      data=>{
        this.router.navigate(['events'])
      }
   )
  }

}
export class MyEvent {
  constructor(type, places, dateEvent, organizerPhone, persons?, id?) {
    this.organizerPhone = organizerPhone
    this.id = id
    this.dateEvent = dateEvent
    this.places = places
    this.type = type
    this.persons = persons
  }
  public id: number;
  public type: string;
  public places: number;
  public dateEvent: Date;
  public organizerPhone: string;
  public persons: Array<Person>
  showDet() {
    console.log("type:" + this.type + " places:" + this.places + " date event" + this.dateEvent + "organizerNumber" + this.organizerPhone + "persons:" + this.persons)
  }
}
