package com.interswitch.volcano.Unsolo.controller;


import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/trips")
public class CreateYourTripController {
    private final CreateYourTripService tripService;

    @PutMapping("/update/{userId}/{tripId}")
    public ResponseEntity<?> updateTrip(@PathVariable Long userId, @PathVariable Long tripId, @RequestBody UpdateTripRequest updateTripRequest) throws Exception {
        return new ResponseEntity<>(tripService.updateNotApprovedTrip(userId, tripId, updateTripRequest), HttpStatus.OK);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<?> getUserTrips(@PathVariable Long userId) {
        return new ResponseEntity<>(tripService.getUserTrips(userId), HttpStatus.OK);
    }


    @PostMapping("/create/{userId}/{destinationId}")
    public ResponseEntity<?> createTrip(@PathVariable Long userId, @PathVariable Long destinationId,
                                        @Valid @RequestBody CreateTripDto createTripDto) throws Exception {
        return new ResponseEntity<>(tripService.createTrip(userId, destinationId, createTripDto), HttpStatus.CREATED);
    }

    @GetMapping("/trip/{userId}")
    public ResponseEntity<?> getTripByDestinationName(@PathVariable Long userId, @RequestParam String destinationName) throws Exception {
        return new ResponseEntity<>(tripService.getTripByUserIdAndDestinationName(userId, destinationName), HttpStatus.OK);
    }

    @GetMapping("/total-users/{destinationId}")
    public ResponseEntity<TotalUsersResponse> getTotalNumberUsersByDestinationIdId(@PathVariable Long destinationId) {
        TotalUsersResponse response = tripService.getTotalNumberOfUsersByDestinationId(destinationId);
        return ResponseEntity.ok(response);
    }

}
