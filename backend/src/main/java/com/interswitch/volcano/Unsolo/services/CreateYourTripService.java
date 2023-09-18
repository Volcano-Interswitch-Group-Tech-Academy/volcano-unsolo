package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.util.List;
import java.util.stream.Collectors;

public interface CreateYourTripService {

     ApiCustomResponse<CreateYourTripDto> toCreateYourTrip(CreateYourTripDto createYourTripDto);

     ApiCustomResponse<String> approvedPendingTrips(long tripId);
     void deleteATripCreatedByUser(Long tripId);

     List<CreateYourTrip> getAllTripWithApprovalStatusOfPending();

     CreateYourTrip getTripByDestNameWithApprovalStatusOfPending(String destName);
}
