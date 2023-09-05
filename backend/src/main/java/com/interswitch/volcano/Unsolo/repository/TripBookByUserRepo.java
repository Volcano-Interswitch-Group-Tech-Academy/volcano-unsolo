package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.TripBookByUser;
import jdk.jfr.Registered;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TripBookByUserRepo extends JpaRepository<TripBookByUser, Long> {
}
