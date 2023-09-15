package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.services.CurrentDestinationsService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CurrentDestinationsServiceImpl implements CurrentDestinationsService {
    private final CurrentDestinationsRepo currentDestinationsRepo;
    @Override
    public ApiCustomResponse<List<CurrentDestinations>> getCurrentDestinations(String destinationName) {
        if (destinationName != null && !destinationName.isBlank()) {
            List<CurrentDestinations> destinations =currentDestinationsRepo.findByDestinationName(destinationName);
            if(destinations != null && destinations.size()>0){
                return new ApiCustomResponse<>("Available Destinations", destinations, HttpStatus.OK);
            }
        }
        return new ApiCustomResponse<>("No Available Destination", Collections.emptyList(),HttpStatus.OK);
    }

    @Override
    public ApiCustomResponse<List<CurrentDestinations>> getAllDestinations() {
        List<CurrentDestinations> allDestinations =currentDestinationsRepo.findAll();
        return new ApiCustomResponse<>("All Destinations", allDestinations, HttpStatus.OK);
    }
}
