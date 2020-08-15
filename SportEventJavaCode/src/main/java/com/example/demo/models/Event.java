package com.example.demo.models;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Data
public class Event {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO )
	private Long Id;
	@Enumerated(EnumType.STRING)
	private Type type;
	private int places;
	private Date dateEvent;
	private String organizerPhone;
	@ManyToMany(mappedBy="events")
	@JsonIgnore
	private List<Person> persons=new ArrayList<Person>();
}
