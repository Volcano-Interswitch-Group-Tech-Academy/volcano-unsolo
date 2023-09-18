package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.enums.TripStatus;
import com.interswitch.volcano.Unsolo.exceptions.*;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CreateYourTripServiceImpl implements CreateYourTripService {
    private CreateYourTripRepo createYourTripRepo;
    private final UserRepository userRepository;
    private final CurrentDestinationsRepo currentDestinationsRepo;
    @Override
    public ApiCustomResponse<CreateYourTripDto> toCreateYourTrip(CreateYourTripDto createYourTripDto) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if ((authentication instanceof AnonymousAuthenticationToken))
            throw new UserNotFoundException("Please Login");
        String email = authentication.getName();
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        if (createYourTripRepo.existsByDestinationName(createYourTripDto.getDestinationName()))
            throw new AlreadyExistException("Please create another trip with a different name as this trip already exists");
        CreateYourTrip newCreateYourTrip = new CreateYourTrip();
        BeanUtils.copyProperties(createYourTripDto, newCreateYourTrip);
        newCreateYourTrip.setUserId(user.getId());
        newCreateYourTrip.setApprovalStatus(ApprovalStatus.PENDING);
        createYourTripRepo.save(newCreateYourTrip);
        CreateYourTripDto createYourTripDto1 = new CreateYourTripDto();
        BeanUtils.copyProperties(newCreateYourTrip, createYourTripDto1);
        System.out.println(createYourTripDto1);
        return new ApiCustomResponse<>("Your Trip has been created Successfully and pending Admin approval", createYourTripDto1, HttpStatus.CREATED);
    }

    @Override
    public ApiCustomResponse<String> approvedPendingTrips(long tripId) {
        CreateYourTrip trip = createYourTripRepo.findById(tripId).orElseThrow(
                () -> new ResourceNotFoundException("Trip not found"));
        if (trip.getApprovalStatus() == ApprovalStatus.PENDING) {
            trip.setApprovalStatus(ApprovalStatus.APPROVED);
            createYourTripRepo.save(trip);
            CurrentDestinations currentDestination = new CurrentDestinations();
            currentDestination.setCountry(trip.getCountry());
            currentDestination.setCity(trip.getCity());
            currentDestination.setDestinationName(trip.getDestinationName());
            currentDestination.setTripDescription(trip.getTripDescription());
            currentDestination.setMaxNoOfPersons(trip.getMaxNoOfPersons());
            currentDestination.setStartDate(trip.getStartDate());
            currentDestination.setEndDate(trip.getEndDate());
            currentDestination.setDuration(trip.getDuration());
            currentDestination.setTripStatus(TripStatus.AVAILABLE);
            currentDestinationsRepo.save(currentDestination);
        } else {
            throw new InvalidApprovalOperationException("Trip is not pending approval");
        }
        return new ApiCustomResponse<>("Trip has been approved successfully and moved to Current destinations",
                null, HttpStatus.OK);
    }

    @Override
    public void deleteATripCreatedByUser(Long tripId) {
        if(!confirmAuthority()) throw new UnauthorizedUserException("You are NOT AUTHORIZED to perform this operation");
        CreateYourTrip trip = createYourTripRepo.findById(tripId).orElseThrow(
                () -> new ResourceNotFoundException("Trip not found"));
        createYourTripRepo.delete(trip);
    }

    private boolean confirmAuthority(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUserEmail = authentication.getName();
        User loggedInUser = userRepository.findByEmail(loggedInUserEmail)
                .orElseThrow(() -> new UserNotFoundException("No user with this email"));
        return loggedInUser.getRole()== Role.ADMIN;
    }

    @Override
    public List<CreateYourTrip> getAllTripWithApprovalStatusOfPending() {
        return createYourTripRepo.findAll()
                .stream()
                .filter(obj -> obj.getApprovalStatus().equals(ApprovalStatus.PENDING))
                .collect(Collectors.toList());
    }

    @Override
    public CreateYourTrip getTripByDestNameWithApprovalStatusOfPending(String destinationName) {
        CreateYourTrip res = createYourTripRepo.findByDestinationName(destinationName);
        if(res != null && res.getApprovalStatus().equals(ApprovalStatus.PENDING)){
            return res;
        }else{
            throw new TripNotFoundException("No pending trip with the destination name " + destinationName + " exist!");
        }
    }
}
