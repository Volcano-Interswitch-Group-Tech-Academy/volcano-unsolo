package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trips")
public class CreateYourTripController {


    private final CreateYourTripService createYourTripService;


    @PutMapping("/update/{userId}/{tripId}")
    public ResponseEntity<?> updateCreateYourTrip(@PathVariable Long userId, @PathVariable Long tripId, @RequestBody UpdateTripRequest updateTripRequest) throws Exception {
        return new ResponseEntity<>(createYourTripService.updateNotApprovedTrip(userId, tripId, updateTripRequest), HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserTrips(@PathVariable Long userId) {
        return new ResponseEntity<>(createYourTripService.getUserTrips(userId), HttpStatus.OK);
    }


    @GetMapping("/all-trip-with-approval-status-of-pending")
    public ApiCustomResponse<List<CreateYourTrip>> getAllTripWithApprovalStatusOfPending() {
        List<CreateYourTrip> response = createYourTripService.getAllTripWithApprovalStatusOfPending();
        return new ApiCustomResponse<>("Success!", response, HttpStatus.OK);
    }

    @GetMapping("/all-trip-with-approval-status-of-pending/{destName}")
    public ApiCustomResponse<CreateYourTrip> getTripWithPendingApprovalStatusByDestName(@PathVariable("destName") String destName) {
        CreateYourTrip res = createYourTripService.getTripByDestNameWithApprovalStatusOfPending(destName);
        return new ApiCustomResponse<>("Success!", res, HttpStatus.OK);
    }


    @GetMapping("/trip/{userId}")
    public ResponseEntity<?> getTripByDestination(@PathVariable Long userId, @RequestParam String destination) {
        return new ResponseEntity<>(createYourTripService.getTripByUserIdAndDestinationName(userId, destination), HttpStatus.OK);
    }
}








