package com.interswitch.volcano.Unsolo.controller;


import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.services.CurrentDestinationsService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.hibernate.dialect.unique.CreateTableUniqueDelegate;
import org.springframework.http.HttpEntity;
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
    @PostMapping("/newDest")
    ResponseEntity<ApiCustomResponse<CurrentDestinationsDto>> createCurrentDestination(@Valid @RequestBody CurrentDestinationsDto currentDestinationsDto){
        return new ResponseEntity<>(currentDestinationsService.createCurrentDestination(currentDestinationsDto),HttpStatus.CREATED);
    }
    @PutMapping("/update/{currentDest_id}")
    ResponseEntity<ApiCustomResponse<CurrentDestinations>>editCurrentDest(@PathVariable("currentDest_id") Long currentDest_id,@Valid @RequestBody CurrentDestinationsDto currentDestinationsDto){
        return new ResponseEntity<>(currentDestinationsService.editCurrentDestination(currentDestinationsDto,currentDest_id),HttpStatus.OK);
    }

    @DeleteMapping("/delete/{currentDest_id}")
    ResponseEntity<String> deleteCurrentDest(@Valid @PathVariable("currentDest_id") Long currentDest_id){
        currentDestinationsService.deleteCurrentDestination(currentDest_id);
        return new ResponseEntity<>("Destination Deleted Successfully",HttpStatus.NO_CONTENT);
    }
}

