package com.interswitch.volcano.Unsolo.services;


import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;

import java.util.List;


public interface CreateYourTripService {
    CreateYourTripDto createTrip(Long userId, Long destinationId, CreateTripDto createTripDto) throws Exception ;

    List<CreateYourTripDto> getUserTrips(Long userId) ;

    CreateYourTripDto getTripByUserIdAndDestinationName(Long userId, String destinationName) throws Exception;

    TotalUsersResponse getTotalNumberOfUsersByDestinationId(Long destinationId) ;


    List<CreateYourTripDto> getAllTripWithApprovalStatusOfPending() ;

    void deleteATripCreatedByUser(Long tripId) ;


    List<CreateYourTripDto> getTripByDestNameWithApprovalStatusOfPending(String destinationName) throws Exception;

    CreateYourTripDto approvePendingTrip(Long tripId) ;


    CreateYourTripDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception;
}

