package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Trip;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TripRepository extends JpaRepository<Trip, Long> {
    Trip findByDestinationIdAndUserId(long destinationId, long userId);

    List<Trip> findByUserId(long userId);

    List<Trip> findByDestinationId(Long destinationId);

    Trip findByIdAndUserId(Long tripId, Long userId);
}
