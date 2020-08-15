import { Component, OnInit } from '@angular/core';
import{Person} from '../login/login.component'
import { DataService } from '../service/data.service';
import { MyEvent } from '../add-event/add-event.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private service: DataService,
    private serviceGuard:AuthService) { }
    alreadySigned:boolean=false
  ngOnInit(): void {
    
    let username = sessionStorage.getItem("authenticatedUser")
    if(username!=null)
      this.serviceGuard.LoggedIn.next(true)
    this.service.getPersonByUsername(username).subscribe(
      data=>{
        //console.log("User:"+ data)
        this.person=data
        
      }
    )
    this.getData();
  }

  events:MyEvent[];
  person:Person;
  event:MyEvent
  // show(a,b){
  //   console.log(a,b)
  //   console.log(sessionStorage.getItem("authenticatedUser"))
  //   let variable = sessionStorage.getItem("authenticatedUser")
  //   // this.service.getPerson2(variable).subscribe(
  //   //   data=>{
  //   //     console.log(data)
  //   //   }
  //   // )

  // }

  signUp2(var1){
    let username = sessionStorage.getItem("authenticatedUser")
    this.service.signUpToEvent(var1,username).subscribe(
      response=>{
        if(response===null){
          console.log('you are already subscribed')
          this.alreadySigned=true
        }else{
        this.getData();
        window.location.reload();
        }
       } 
    )
    
}
getData(){
  this.service.showEvents().subscribe(
    data=>{
      this.events=data;
    }
  )
}

}
