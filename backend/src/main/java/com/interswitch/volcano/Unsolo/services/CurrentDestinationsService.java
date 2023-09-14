package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.util.List;

public interface CurrentDestinationsService {
    public ApiCustomResponse<List<CurrentDestinations>> getCurrentDestinations(String destinationName);
    public ApiCustomResponse<List<CurrentDestinations>> getAllDestinations();

    ApiCustomResponse<CurrentDestinationsDto> createCurrentDestination (CurrentDestinationsDto currentDestinationsDto);

}
