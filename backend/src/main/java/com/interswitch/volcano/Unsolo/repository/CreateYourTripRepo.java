package com.interswitch.volcano.Unsolo.repository;

//import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.TotalUsersResponse;
import com.interswitch.volcano.Unsolo.dtos.TripBookByUserDto;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CreateYourTripRepo extends JpaRepository<CreateYourTrip, Long> {


    CreateYourTrip findByIdAndUserId(Long tripId, Long userId);

    List<CreateYourTrip> findByUserId(Long userId);

    List<CreateYourTrip> findByUserIdAndDestinationNameIgnoreCase(Long userId, String destinationName);


    CreateYourTrip findByDestinationName(String destinationName);
    boolean existsByDestinationName(String destinationName);

}
