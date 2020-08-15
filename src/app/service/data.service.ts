import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Person } from '../registration/registration.component';
import  {MyEvent} from '../add-event/add-event.component'
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  createPerson(person){
    return this.http.post("http://localhost:8080/persons",person)
    }
    getPerson(username,password){
      let params = new HttpParams()
      .set('username',username)
      .set('password',password);
      return this.http.get<Person>("http://localhost:8080/login",{params:params})
    }

    getPersonByUsername(username){
      let params = new HttpParams().set('str',username);
      return this.http.get<Person>("http://localhost:8080//getUser",{params:params})
    }
    addEvent(event:MyEvent,username){
      let params = new HttpParams().set('username',username);
      return this.http.post<MyEvent>("http://localhost:8080/addEvent",event,{params:params})
    }
    showEvents(){
      return this.http.get<MyEvent[]>("http://localhost:8080/events")
    }

  
    showEvent(){
      return this.http.get<MyEvent>("http://localhost:8080/event")
    }
     
     
    // getPerson2(username){
    //   let params = new HttpParams().set('str',username);
    //   return this.http.get<Person>("http://localhost:8080/person",{params:params})
    // }
    signUpToEvent(var1,var2){
      let params = new HttpParams().set('name',var1).set('person',var2);
      return this.http.post("http://localhost:8080/signUpToEvent", params)
    }
    // retrievePerson(username:string, password:string){
    //   return this.http.get<Person>("http://localhost:8080/person", { username, password })
    // }
    deleteEvent(eventID, person){
      let params = new HttpParams().set('eventID',eventID).set('person',person);
      return this.http.delete("http://localhost:8080/unsubscribe",{params:params})
    }
    getEventsByType(type){
      return this.http.get<MyEvent[]>(`http://localhost:8080/events/${type}`)
    }
    forgotPassword(username, email, password){
      let params = new HttpParams()
      .set('username',username)
      .set('email',email)
      .set('password',password)
      return this.http.put("http://localhost:8080/changePassword",params)
    }
}
