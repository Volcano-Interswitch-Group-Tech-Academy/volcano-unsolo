package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.dtos.CurrentDestinationsDto;
import com.interswitch.volcano.Unsolo.model.Admin;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.model.Person;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import io.swagger.annotations.ApiResponse;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface CurrentDestinationsRepo extends JpaRepository<CurrentDestinations, Long> {
    List<CurrentDestinations> findByDestinationName(String destinationName);

    boolean existsByCountryAndCityAndStartDate(String country, String city,String startDate);


}
