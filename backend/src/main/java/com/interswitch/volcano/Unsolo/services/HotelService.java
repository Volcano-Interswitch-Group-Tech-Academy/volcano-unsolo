package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.HotelDto;
import com.interswitch.volcano.Unsolo.model.Hotel;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface HotelService {
    ApiCustomResponse<List<Hotel>> getAllHotels(String country, String city);

    HotelDto createHotel(long destinationId, String country,String city);
}
