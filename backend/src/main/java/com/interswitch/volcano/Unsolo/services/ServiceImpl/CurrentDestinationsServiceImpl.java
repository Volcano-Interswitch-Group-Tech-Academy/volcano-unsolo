package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.exceptions.AlreadyExistException;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.services.CurrentDestinationsService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Locale;

@Service
@RequiredArgsConstructor
public class CurrentDestinationsServiceImpl implements CurrentDestinationsService {
    private final CurrentDestinationsRepo currentDestinationsRepo;
    private final ModelMapper modelMapper;
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

    @Override
    public ApiCustomResponse<CurrentDestinationsDto> createCurrentDestination(CurrentDestinationsDto currentDestinationsDto) {
        if (currentDestinationsRepo.existsByCountryAndCityAndStartDate(currentDestinationsDto.getCountry(), currentDestinationsDto.getCity(),currentDestinationsDto.getStartDate()))
        throw new AlreadyExistException("Sorry this Destination currently exist, Please check the List of Destinations");
        CurrentDestinations newCurrentDestination = modelMapper.map(currentDestinationsDto, CurrentDestinations.class);
        currentDestinationsRepo.save(newCurrentDestination);
        return new ApiCustomResponse<>("Happy Travelling! Destination Created Successfully ", modelMapper.map(newCurrentDestination, CurrentDestinationsDto.class), HttpStatus.CREATED);
    }
}
