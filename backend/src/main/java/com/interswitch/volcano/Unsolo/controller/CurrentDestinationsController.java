package com.interswitch.volcano.Unsolo.controller;


import com.interswitch.volcano.Unsolo.services.CurrentDestinationsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/destinations")
public class CurrentDestinationsController {
    private  final CurrentDestinationsService currentDestinationsService;

    @GetMapping("/{destName}")
    public ResponseEntity<?> getDestinationByCountry(@PathVariable("destName") String  destinationName) {
        return new ResponseEntity<>(currentDestinationsService.getCurrentDestinations(destinationName), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<?> getAllDestination() {
        return new ResponseEntity<>(currentDestinationsService.getAllDestinations(), HttpStatus.OK);
    }
}
