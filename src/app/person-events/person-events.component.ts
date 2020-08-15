import { Component, OnInit } from '@angular/core';
import{Person} from '../login/login.component';
import { DataService } from '../service/data.service';
import { MyEvent } from '../add-event/add-event.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-person-events',
  templateUrl: './person-events.component.html',
  styleUrls: ['./person-events.component.css']
})
export class PersonEventsComponent implements OnInit {

  constructor(private personservice: DataService,
    private serviceGuard:AuthService) { }
  person:Person
  events:MyEvent[]
  

  // this.ws.homeboxPGetAll().map((res:Response) => res.json()).subscribe(
  //   homeboxsp => {
  //     this.homeboxsp = homeboxsp.sensors;
  //        }
  // );
  ngOnInit(): void {
    let variable = sessionStorage.getItem("authenticatedUser")
    if(variable!=null)
      this.serviceGuard.LoggedIn.next(true)
    this.personservice.getPersonByUsername(variable).subscribe(
     data=>{
       
       this.person=data
       this.events=this.person.events
     } 
    )
  }
  deleteEvent(eventID){
    let variable = sessionStorage.getItem("authenticatedUser")
    this.personservice.deleteEvent(eventID,variable).subscribe(
      data=>{
       
      }
    )
    window.location.reload();
  }


}
