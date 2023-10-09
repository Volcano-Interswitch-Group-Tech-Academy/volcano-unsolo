package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);

    boolean existsByPhoneNumber(String phoneNumber);
}
