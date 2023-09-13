package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.exceptions.TripNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CreateYourTripServiceImpl implements CreateYourTripService {

    private CreateYourTripRepo createYourTripRepo;
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
