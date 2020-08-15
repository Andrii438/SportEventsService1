package com.example.demo.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.*;


@Repository
public interface PersonRepository extends CrudRepository<Person, Long> {
	Person findByUsername(String Username);
	Person findByUsernameAndPassword(String Username,String password);
	Person findByUsernameAndEmail(String username, String e_mail);
}

