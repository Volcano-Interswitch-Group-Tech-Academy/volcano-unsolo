package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.TripDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;

import java.util.List;

public interface TripService {
    TripDto createTrip(long userId, long destinationId, CreateTripDto createTripDto) throws Exception ;

    List<TripDto> getUserTrips(long userId) ;

    TripDto getTripByUserIdAndDestinationName(Long userId, String destinationName) throws Exception;

    TotalUsersResponse getTotalNumberOfUsersByDestinationId(Long destinationId) ;


    List<TripDto> getAllTripWithApprovalStatusOfPending() ;

    void deleteATripCreatedByUser(Long tripId) ;


    List<TripDto> getTripByDestNameWithApprovalStatusOfPending(String destinationName) throws Exception;

    TripDto approvePendingTrip(long tripId) ;


    TripDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception;
}
