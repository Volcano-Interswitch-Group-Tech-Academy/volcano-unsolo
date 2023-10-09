package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.enums.DestinationStatus;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.exceptions.AlreadyExistException;
import com.interswitch.volcano.Unsolo.exceptions.InvalidApprovalOperationException;
import com.interswitch.volcano.Unsolo.exceptions.ResourceNotFoundException;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.CurrentDestinationsService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CurrentDestinationsServiceImpl implements CurrentDestinationsService {
    private final CurrentDestinationsRepo currentDestinationsRepo;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public ApiCustomResponse<CurrentDestinations> getACurrentDestinations(String destinationName) {
        if (destinationName != null && !destinationName.isBlank()) {
            CurrentDestinations destination = currentDestinationsRepo.findByDestinationName(destinationName);
            if (destination != null) {
                return new ApiCustomResponse<>("Available Destination, see below", destination, HttpStatus.OK);
            }
        }
        return new ApiCustomResponse<>("No Available Destination with the name provided", null, HttpStatus.OK);
    }

    @Override
    public ApiCustomResponse<List<CurrentDestinations>> getAllDestinations() {
        List<CurrentDestinations> allDestinations = currentDestinationsRepo.findAll();
        return new ApiCustomResponse<>("All Destinations", allDestinations, HttpStatus.OK);

    }

    @Override
    public ApiCustomResponse<CurrentDestinationsDto> createCurrentDestination(Long userId, CurrentDestinationsDto currentDestinationsDto) {
        User user = userRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("user does not exist"));
        if (currentDestinationsRepo.existsByCountryAndCityAndStartDate(currentDestinationsDto.getCountry(), currentDestinationsDto.getCity(), currentDestinationsDto.getStartDate())) {
            throw new AlreadyExistException("Sorry this Destination currently exist, Please check the List of Destinations");
        }
        CurrentDestinations newCurrentDestination = modelMapper.map(currentDestinationsDto, CurrentDestinations.class);
        newCurrentDestination.setUserId(userId);
        if (user.getRole() == Role.ADMIN) {
            newCurrentDestination.setDestinationStatus(DestinationStatus.AVAILABLE);
        }
        currentDestinationsRepo.save(newCurrentDestination);
        return new ApiCustomResponse<>("Happy Travelling! Destination Created Successfully ", modelMapper.map(newCurrentDestination, CurrentDestinationsDto.class), HttpStatus.CREATED);
    }


    @Override
    public CurrentDestinationsDto approveDestinationCreatedByUser(Long destinationId) {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findById(destinationId).orElseThrow(() -> new ResourceNotFoundException("Destination does not exist"));
        currentDestinations.setDestinationStatus(DestinationStatus.AVAILABLE);
        currentDestinations = currentDestinationsRepo.save(currentDestinations);
        CurrentDestinationsDto currentDestinationsDto = new CurrentDestinationsDto();
        BeanUtils.copyProperties(currentDestinations, currentDestinationsDto);
        return currentDestinationsDto;
    }

    @Override
    public ApiCustomResponse<CurrentDestinations> editCurrentDestination(CurrentDestinationsDto currentDestinationsDto, long currentDestinations_id) {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findById(currentDestinations_id).orElseThrow(() -> new ResourceNotFoundException("Oops! This Destination does not exist"));
        currentDestinations.setDestinationName(currentDestinations.getDestinationName());
        currentDestinations.setCountry(currentDestinationsDto.getCountry());
        currentDestinations.setCity(currentDestinationsDto.getCity());
        currentDestinations.setCost(currentDestinationsDto.getCost());
        currentDestinations.setNoOfRegisterPersons(currentDestinationsDto.getNoOfRegisterPersons());
        currentDestinations.setSlotAvailable(currentDestinationsDto.getSlotAvailable());
        currentDestinations.setTripDescription(currentDestinationsDto.getTripDescription());
        currentDestinations.setStartDate(currentDestinationsDto.getStartDate());
        CurrentDestinations editCurrentDest = currentDestinationsRepo.save(currentDestinations);
        return new ApiCustomResponse<>("Destination Successfully Updated", editCurrentDest, HttpStatus.OK);
    }

    @Override
    public void deleteCurrentDestination(Long currentDestinations_id) {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findById(currentDestinations_id)
                .orElseThrow(() -> new ResourceNotFoundException("Oops! This Destination does not exist"));
        currentDestinationsRepo.delete(currentDestinations);

    }

    @Override
    public ApiCustomResponse<String> changeTripStatus(long currentDestinations_id) {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findById(currentDestinations_id).orElseThrow(
                () -> new ResourceNotFoundException("Oops! This Destination does not exist"));
        if (currentDestinations.getDestinationStatus() == DestinationStatus.AVAILABLE) {
            currentDestinations.setDestinationStatus(DestinationStatus.FILLED);
            currentDestinationsRepo.save(currentDestinations);
        } else {
            throw new InvalidApprovalOperationException("Destination is already filled");
        }
        return new ApiCustomResponse<>("Current destination status has been updated to filled successfully and can no longer be booked",
                null, HttpStatus.OK);
    }
}
