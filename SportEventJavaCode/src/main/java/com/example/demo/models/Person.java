package com.example.demo.models;

import java.util.ArrayList;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Person {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	private Long Id;
	@Size(min=4, message="An username must contain minimum 4 characters ")
	private String username;
	@Size(min=4, message="A password must contain minimum 4 characters ")
	private String password;
	@Email
	private String email;
	@Pattern(regexp="\\d{9}$", message="Wrong phone format")
	private String phoneNumber;
	@ManyToMany(cascade = { CascadeType.ALL })
//	@JoinTable(name = "event_person",
//	joinColumns = { @JoinColumn(name = "fk_event") },
//	inverseJoinColumns = { @JoinColumn(name = "fk_person") })
	
	List<Event> events=new ArrayList<Event>();
    public void removeEvent(Event event) {
        this.events.remove(event);
        event.getPersons().remove(this);
    }
}
