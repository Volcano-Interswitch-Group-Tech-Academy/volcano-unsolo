package com.interswitch.volcano.Unsolo.services.ServiceImpl;


import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.exceptions.InvalidApprovalOperationException;
import com.interswitch.volcano.Unsolo.exceptions.ResourceNotFoundException;
import com.interswitch.volcano.Unsolo.exceptions.UnauthorizedUserException;
import com.interswitch.volcano.Unsolo.exceptions.UserNotFoundException;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepository;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.BeanUtilsWithNullHandler;
import lombok.RequiredArgsConstructor;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class CreateYourTripServiceImpl implements CreateYourTripService {
    private final CreateYourTripRepository tripRepository;

    private final CurrentDestinationsRepo currentDestinationsRepo;

    private final UserRepository userRepository;

    public CreateYourTripDto createTrip(Long userId, Long destinationId, CreateTripDto createTripDto) throws Exception {
        CreateYourTrip trip = tripRepository.findByDestinationIdAndUserId(destinationId, userId);
        if (trip != null) {
            throw new Exception("user already booked trip");
        }

        if (currentDestinationsRepo.existsById(destinationId)) {
            CreateYourTrip newTrip = new CreateYourTrip();
            newTrip.setApprovalStatus(ApprovalStatus.PENDING);
            newTrip.setUserId(userId);
            newTrip.setDuration(createTripDto.getDuration());
            newTrip.setRoomType(createTripDto.getRoomType());
            newTrip.setDestinationId(destinationId);
            newTrip = tripRepository.save(newTrip);
            CreateYourTripDto tripDto = new CreateYourTripDto();
            BeanUtils.copyProperties(tripDto,newTrip);
            return tripDto;
        }
        throw new Exception("Destination does not exist");
    }

    public List<CreateYourTripDto> getUserTrips(Long userId) {
        List<CreateYourTrip> trips = tripRepository.findByUserId(userId);

        return trips.stream().map(trip -> {
            CreateYourTripDto tripDto = new CreateYourTripDto();
            org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
            return tripDto;
        }).collect(Collectors.toList());
    }


    public CreateYourTripDto getTripByUserIdAndDestinationName(Long userId, String destinationName) throws Exception {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findByDestinationName(destinationName);
        if (currentDestinations == null) throw new Exception();
        CreateYourTrip trip = tripRepository.findByDestinationIdAndUserId(currentDestinations.getId(), userId);
        CreateYourTripDto tripDto = new CreateYourTripDto();
        org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
        return tripDto;
    }

    public TotalUsersResponse getTotalNumberOfUsersByDestinationId(Long destinationId) {
        List<CreateYourTrip> trips = tripRepository.findByDestinationId(destinationId);
        TotalUsersResponse totalUsersResponse = new TotalUsersResponse();
        totalUsersResponse.setTotalUsers(trips.size());
        return totalUsersResponse;
    }


    public List<CreateYourTripDto> getAllTripWithApprovalStatusOfPending() {
        List<CreateYourTrip> trips = tripRepository.findAll()
                .stream()
                .filter(obj -> obj.getApprovalStatus().equals(ApprovalStatus.PENDING))
                .toList();

        return trips.stream().map(trip -> {
            CreateYourTripDto tripDto = new CreateYourTripDto();
            org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
            return tripDto;
        }).collect(Collectors.toList());
    }

    public void deleteATripCreatedByUser(Long tripId) {
        if (!confirmAuthority())
            throw new UnauthorizedUserException("You are NOT AUTHORIZED to perform this operation");
        CreateYourTrip trip = tripRepository.findById(tripId).orElseThrow(
                () -> new ResourceNotFoundException("Trip not found"));
        tripRepository.delete(trip);
    }


    public List<CreateYourTripDto> getTripByDestNameWithApprovalStatusOfPending(String destinationName) throws Exception {
        CurrentDestinations currentDestinations = currentDestinationsRepo.findByDestinationName(destinationName);
        if (currentDestinations == null) throw new Exception();
        List<CreateYourTrip> trips = tripRepository.findByDestinationId(currentDestinations.getId());

        return trips.stream().map(trip -> {
            CreateYourTripDto tripDto = new CreateYourTripDto();
            org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
            return tripDto;
        }).collect(Collectors.toList());

    }

    public CreateYourTripDto approvePendingTrip(Long tripId) {
        CreateYourTrip trip = tripRepository.findById(tripId).orElseThrow(
                () -> new ResourceNotFoundException("Trip not found"));
        if (trip.getApprovalStatus() == ApprovalStatus.PENDING) {
            trip.setApprovalStatus(ApprovalStatus.APPROVED);
            Optional<CurrentDestinations> currentDestinations = currentDestinationsRepo.findById(trip.getDestinationId());
            if (currentDestinations.isPresent()) {
                currentDestinations.get().setNoOfRegisterPersons(currentDestinations.get().getNoOfRegisterPersons() + 1);
                currentDestinations.get().setSlotAvailable(currentDestinations.get().getSlotAvailable() - 1);
                currentDestinationsRepo.save(currentDestinations.get());
            }
            trip = tripRepository.save(trip);
            CreateYourTripDto tripDto = new CreateYourTripDto();
            org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
            return tripDto;
        }
        throw new InvalidApprovalOperationException("Trip is not pending approval");
    }

    private boolean confirmAuthority() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedInUserEmail = authentication.getName();
        User loggedInUser = userRepository.findByEmail(loggedInUserEmail)
                .orElseThrow(() -> new UserNotFoundException("No user with this email"));
        return loggedInUser.getRole() == Role.ADMIN;
    }

    public CreateYourTripDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception {
        CreateYourTrip trip = tripRepository.findByIdAndUserId(tripId, userId);
        if (trip == null) throw new Exception("Trip does not exist");
        if (trip.getApprovalStatus() == ApprovalStatus.PENDING) {
            BeanUtilsWithNullHandler.copyPropertiesIgnoreNull(trip, updateTripRequest);
            trip = tripRepository.save(trip);
            CreateYourTripDto tripDto = new CreateYourTripDto();
            org.springframework.beans.BeanUtils.copyProperties(trip, tripDto);
            return tripDto;
        } else {
            throw new Exception("can only update pending trip");
        }
    }
}
