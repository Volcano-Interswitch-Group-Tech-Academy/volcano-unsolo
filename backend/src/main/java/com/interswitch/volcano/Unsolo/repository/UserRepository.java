package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Person, Long> {
}
