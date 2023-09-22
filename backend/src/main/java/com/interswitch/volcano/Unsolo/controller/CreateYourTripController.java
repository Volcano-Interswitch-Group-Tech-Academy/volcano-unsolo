package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import jakarta.validation.Valid;
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
    
    @PostMapping("/create")
    public ResponseEntity<ApiCustomResponse<CreateYourTripDto>> createYourTripByUser(
            @Valid @RequestBody CreateYourTripDto createYourTripDto){
        return new ResponseEntity<>(createYourTripService.toCreateYourTrip(createYourTripDto), HttpStatus.CREATED);
    }

    @PostMapping("/admin/approve/{tripId}")
    public ResponseEntity<?> approveTrip(@PathVariable("tripId") Long tripId) {
        return new ResponseEntity<>(createYourTripService.approvedPendingTrips(tripId),HttpStatus.CREATED);
    }
    @DeleteMapping("/admin/{tripId}")
    public ResponseEntity<String> deleteTrip(@PathVariable("tripId") Long tripId) {
        createYourTripService.deleteATripCreatedByUser(tripId);
        return ResponseEntity.ok("Trip deleted successfully");
    }
    @GetMapping("/admin/pending")
    public ApiCustomResponse<List<CreateYourTrip>> viewAllTripsPendingApproval() {
        List<CreateYourTrip>response = createYourTripService.getAllTripWithApprovalStatusOfPending();
        return new ApiCustomResponse<>("Success!", response, HttpStatus.OK) ;
    }

    @GetMapping("/admin/{destName}")
    public ApiCustomResponse<CreateYourTrip> getATripPendingApprovalByDestName(@PathVariable("destName") String destName) {
        CreateYourTrip res = createYourTripService.getTripByDestNameWithApprovalStatusOfPending(destName);
        return new ApiCustomResponse<>("Success!", res, HttpStatus.OK);
    }

    @GetMapping("/trip/{userId}")
    public ResponseEntity<?> getTripByDestination(@PathVariable Long userId, @RequestParam String destination) {
        return new ResponseEntity<>(createYourTripService.getTripByUserIdAndDestinationName(userId, destination), HttpStatus.OK);
    }
}








