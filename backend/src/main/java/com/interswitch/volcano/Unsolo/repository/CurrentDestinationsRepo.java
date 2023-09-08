package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import jakarta.validation.constraints.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CurrentDestinationsRepo extends JpaRepository<CurrentDestinations, Long> {
    List<CurrentDestinations> findByDestinationName(String destinationName);

}
