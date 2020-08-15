package com.example.demo.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Event;
import com.example.demo.models.Type;

@Repository
public interface EventRepository extends CrudRepository<Event, Long> {
	@Query("select a from Event a where a.dateEvent >= :creationDateTime")
    List<Event> findAllWithDateEventAfter(@Param("creationDateTime") Date creationDateTime);
	List<Event> findByType(Type type);

	@Query("select a from Event a where a.dateEvent >= :creationDateTime and a.type = :type")
	List<Event> findAllWithDateEventAfter(@Param("type")Type type,@Param("creationDateTime") Date creationDateTime);
}
