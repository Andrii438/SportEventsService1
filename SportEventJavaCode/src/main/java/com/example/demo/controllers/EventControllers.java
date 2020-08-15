package com.example.demo.controllers;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Event;
import com.example.demo.models.Person;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.PersonRepository;
import com.example.demo.models.Type;
@RestController
//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class EventControllers {
	@Autowired
	EventRepository repo;
	@Autowired
	PersonRepository repoPerson;
	private static boolean save=true;
	private static boolean available =true;
	@GetMapping("events")
	public List<Event> getAllActualEvents(){
		System.out.println(new Date());
		return (List<Event>) repo.findAllWithDateEventAfter(new Date());
//		return (List<Event>) repo.findAll();
	}
	@GetMapping("event")
	public Optional<Event> getEvent(@RequestBody Event event){
		return repo.findById(event.getId());
//		return (List<Event>) repo.findAll();
	}
	@GetMapping("events/{type}")
	public List<Event> getEventByType(@PathVariable Type type){
		return repo.findAllWithDateEventAfter(type, new Date());
	}
	
	@PostMapping("addEvent")
	public Event newEvent(@RequestBody Event event,@RequestParam("username")String username) {
		Person person=repoPerson.findByUsername(username);
		person.getEvents().add(event);
		System.out.println(event);
		return repo.save(event);
	}
	//
	@PostMapping("signUpToEvent")
	public Person signUpToEvent(@RequestParam("name") Long eventID,@RequestParam("person")String personUsername) {
		save=true;
		Optional<Event> eventBody = repo.findById(eventID);
		//Optional<Person> personBody = repoPerson.findByUsername(personUsername);
		Person person = repoPerson.findByUsername(personUsername);
		Event event = eventBody.get();
		System.out.println("Event: "+eventID +" Person: "+personUsername);
		if(event.getPlaces()>0) {
			event.setPlaces(event.getPlaces()-1);
		}else {
			available=false;
		}
		//event.getPersons().add(person);
		person.getEvents().forEach(name->{
			//System.out.println(name.getId());
			if(name.getId()==eventID) {
				
				int i=0;
				i++;
				if(i>0)
					save=false;
				else
					save=true;
				System.out.println("i:"+i);
			}

		});
	
		
		person.getEvents().add(event);
		//System.out.println(eventID);
		System.out.println(save);
	//	System.out.println("Person: "+ person);
		if (save&&available) 
			return repoPerson.save(person);	
		else
			return null;
	}
	

}
