package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface CreateYourTripRepository extends JpaRepository<CreateYourTrip, Long> {
    CreateYourTrip findByDestinationIdAndUserId(long destinationId, Long userId);

    List<CreateYourTrip> findByUserId(Long userId);

    List<CreateYourTrip> findByDestinationId(Long destinationId);

    CreateYourTrip findByIdAndUserId(Long tripId, Long userId);
}
