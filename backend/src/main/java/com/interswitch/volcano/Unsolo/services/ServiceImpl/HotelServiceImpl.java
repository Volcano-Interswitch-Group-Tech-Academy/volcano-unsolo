package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.HotelDto;
import com.interswitch.volcano.Unsolo.exceptions.ResourceNotFoundException;
import com.interswitch.volcano.Unsolo.model.Hotel;
import com.interswitch.volcano.Unsolo.repository.HotelRepository;
import com.interswitch.volcano.Unsolo.services.HotelService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@RequiredArgsConstructor
public class HotelServiceImpl implements HotelService {
    private final HotelRepository hotelRepository;

    @Override
    public ApiCustomResponse<List<Hotel>> getAllHotels() {
    List<Hotel> allHotels = hotelRepository.findAll();
    return (ApiCustomResponse<List<Hotel>>) allHotels;
    }

    @Override
    public HotelDto createHotel(HotelDto hotelDto) {
        Hotel newHotel = new Hotel();
        newHotel.setHotelName(hotelDto.getHotelName());
        newHotel.setCountry(hotelDto.getCountry());
        newHotel.setCity(hotelDto.getCity());
        hotelRepository.save(newHotel);

        return hotelDto;
    }




}
