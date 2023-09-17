package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.TripBookByUserDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.utils.BeanUtilsWithNullHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class CreateYourTripServiceImpl implements CreateYourTripService {

    private final CreateYourTripRepo createYourTripRepo;

    @Override
    public TripBookByUserDto updateNotApprovedTrip(Long userId, Long tripId, UpdateTripRequest updateTripRequest) throws Exception {
        CreateYourTrip createYourTrip = createYourTripRepo.findByIdAndUserId(tripId, userId);
        if (createYourTrip == null) throw new Exception("Trip does not exist");
        if (createYourTrip.getApprovalStatus() == ApprovalStatus.PENDING) {
            BeanUtilsWithNullHandler.copyPropertiesIgnoreNull(createYourTrip, updateTripRequest);
            CreateYourTrip savedTrip = createYourTripRepo.save(createYourTrip);
            TripBookByUserDto tripBookByUserDto = new TripBookByUserDto();
            BeanUtils.copyProperties(savedTrip, tripBookByUserDto);
            return tripBookByUserDto;
        } else {
            throw new Exception("can only update pending trip");
        }
    }


    public List<TripBookByUserDto> getUserTrips(long userId) {
        List<CreateYourTrip> createYourTrips = createYourTripRepo.findByUserId(userId);

        return createYourTrips.stream().map(createYourTrip -> {
            TripBookByUserDto tripBookByUserDto = new TripBookByUserDto();
            BeanUtils.copyProperties(createYourTrip, tripBookByUserDto);
            return tripBookByUserDto;
        }).collect(Collectors.toList());
    }


    @Override
    public List<TripBookByUserDto> getTripByUserIdAndDestinationName(Long userId, String destinationName) {
        List<CreateYourTrip> createYourTrips = createYourTripRepo.findByUserIdAndDestinationNameIgnoreCase(userId, destinationName);
        return createYourTrips.stream().map(createYourTrip -> {
            TripBookByUserDto tripBookByUserDto = new TripBookByUserDto();
            BeanUtils.copyProperties(createYourTrip, tripBookByUserDto);
            return tripBookByUserDto;
        }).collect(Collectors.toList());
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
        if (res != null && res.getApprovalStatus().equals(ApprovalStatus.PENDING)) {
            return res;
        } else {
            throw new TripNotFoundException("No pending trip with the destination name " + destinationName + " exist!");
        }
    }
}
