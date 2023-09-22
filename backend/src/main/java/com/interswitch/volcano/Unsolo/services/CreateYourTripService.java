package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.TripBookByUserDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.util.List;

public interface CreateYourTripService {

    List<CreateYourTrip> getAllTripWithApprovalStatusOfPending();
  
    ApiCustomResponse<CreateYourTripDto> toCreateYourTrip(CreateYourTripDto createYourTripDto);

    ApiCustomResponse<String> approvedPendingTrips(long tripId);
     
    void deleteATripCreatedByUser(Long tripId);

    List<CreateYourTrip> getAllTripWithApprovalStatusOfPending();

    CreateYourTrip getTripByDestNameWithApprovalStatusOfPending(String destName);

    TripBookByUserDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception;

    List<TripBookByUserDto> getUserTrips(long userId);

    List<TripBookByUserDto> getTripByUserIdAndDestinationName(Long userId, String destination);
}
