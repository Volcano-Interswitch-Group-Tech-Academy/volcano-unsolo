package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.TripBookByUserDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;

import java.util.List;

public interface CreateYourTripService {

    TripBookByUserDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception;

    List<TripBookByUserDto> getUserTrips(long userId);

    List<TripBookByUserDto> getTripByUserIdAndDestinationName(Long userId, String destination);
}
