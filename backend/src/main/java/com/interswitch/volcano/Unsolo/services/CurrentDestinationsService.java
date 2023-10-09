package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.util.List;

public interface CurrentDestinationsService {
    ApiCustomResponse<CurrentDestinations> getACurrentDestinations(String destinationName);
    ApiCustomResponse<List<CurrentDestinations>> getAllDestinations();
    ApiCustomResponse<CurrentDestinationsDto> createCurrentDestination (    Long userId,CurrentDestinationsDto currentDestinationsDto);
    ApiCustomResponse<CurrentDestinations> editCurrentDestination(CurrentDestinationsDto currentDestinationsDto,long currentDestinations_id);
    void deleteCurrentDestination(Long currentDestinations_id);
    ApiCustomResponse<String> changeTripStatus(long currentDestinations_id);

    CurrentDestinationsDto approveDestinationCreatedByUser(Long destinationId);


}
