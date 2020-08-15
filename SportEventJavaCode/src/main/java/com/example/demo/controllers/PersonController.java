package com.example.demo.controllers;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Event;
import com.example.demo.models.Person;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.PersonRepository;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PersonController {
	@Autowired
	public PersonRepository repository;
	@Autowired
	public EventRepository repoEvent;
	@GetMapping("/login")
	public Person getPerson(@RequestParam("username") String username,@RequestParam("password") String password ){
		Person pers=repository.findByUsernameAndPassword(username,password);
		return pers;
	}
	@GetMapping("getUser")
	public Person getUser(@RequestParam String str){
		System.out.println(str);
		return repository.findByUsername(str);
	}
	@GetMapping("person")
	public Person getPersonByKey(@RequestParam String str){
		return repository.findByUsername(str);
		
	}
	@GetMapping("persons")
	public List<Person> getAllPersons(){
		List<Person> persons= (List<Person>) repository.findAll();
		return persons;
	}
	@PostMapping("persons")
	Person String(@RequestBody @Valid Person person,Errors errors) {
		boolean isBusy = false;

		isBusy =(repository.findByUsername(person.getUsername()) != null);
		if (isBusy) {
			return null;
		}else
		{
		return repository.save(person);
		}
	}
	@DeleteMapping("unsubscribe")
	public Person deleteEvent(@RequestParam("eventID") Long eventID, @RequestParam("person") String personUsername){
		System.out.println("eventid:"+eventID+"owner:" + personUsername);
		Optional<Event> eventBody = repoEvent.findById(eventID);
		Event event = eventBody.get();
		Person person = repository.findByUsername(personUsername);
		
		
		person.removeEvent(event);
		event.setPlaces(event.getPlaces()+1);
		repoEvent.save(event);
		return repository.save(person);
	}
	@PutMapping("changePassword")
	public Person updatePerson(@RequestParam("username") String username, @RequestParam("email")String email,@RequestParam("password")String password) {
		Person person = repository.findByUsernameAndEmail(username, email);
		System.out.println(username);
		System.out.println(email);
		System.out.println(password);
		if(person != null) {
			person.setPassword(password);
			System.out.println(password);
			return repository.save(person);
		}else
		return null;
	}
	
}		
