package com.ehansonn.e.repository;

import com.ehansonn.e.model.Thing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ThingRepository extends JpaRepository<Thing, Integer> {

}
