package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CreateYourTripRepo extends JpaRepository<CreateYourTrip, Long> {
}
