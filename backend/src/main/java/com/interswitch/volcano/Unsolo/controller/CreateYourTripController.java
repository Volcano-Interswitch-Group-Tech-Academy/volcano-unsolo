package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trips")
public class CreateYourTripController {

    private CreateYourTripService createYourTripService;

    @GetMapping("/all-trip-with-approval-status-of-pending")
    public ApiCustomResponse<List<CreateYourTrip>> getAllTripWithApprovalStatusOfPending() {
        List<CreateYourTrip>response = createYourTripService.getAllTripWithApprovalStatusOfPending();
        return new ApiCustomResponse<>("Success!", response, HttpStatus.OK) ;
    }

    @GetMapping("/all-trip-with-approval-status-of-pending/{destName}")
    public ApiCustomResponse<CreateYourTrip> getTripWithPendingApprovalStatusByDestName(@PathVariable("destName") String destName) {
        CreateYourTrip res = createYourTripService.getTripByDestNameWithApprovalStatusOfPending(destName);
        return new ApiCustomResponse<>("Success!", res, HttpStatus.OK);
    }
}
