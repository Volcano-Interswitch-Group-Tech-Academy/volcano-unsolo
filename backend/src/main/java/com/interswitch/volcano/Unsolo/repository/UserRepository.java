package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Person;
<<<<<<< HEAD
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Person, Long> {
=======
import com.interswitch.volcano.Unsolo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
}
