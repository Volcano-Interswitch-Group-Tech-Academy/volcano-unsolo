package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel,Long> {
    Hotel findByCountryAndCity(String Country, String city);
}
