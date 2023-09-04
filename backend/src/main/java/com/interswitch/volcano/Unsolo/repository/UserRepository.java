package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Person;
import com.interswitch.volcano.Unsolo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

}
