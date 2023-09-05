package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrentDestinationsRepo extends JpaRepository<CurrentDestinations, Long> {

}
