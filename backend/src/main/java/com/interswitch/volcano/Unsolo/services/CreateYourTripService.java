package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;

import java.util.List;
import java.util.stream.Collectors;

public interface CreateYourTripService {

     List<CreateYourTrip> getAllTripWithApprovalStatusOfPending();

     CreateYourTrip getTripByDestNameWithApprovalStatusOfPending(String destName);
}
