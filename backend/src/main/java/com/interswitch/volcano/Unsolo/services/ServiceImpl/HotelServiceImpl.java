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
    public ApiCustomResponse<List<Hotel>> getAllHotels(String country, String city) {
    List<Hotel> allHotels = hotelRepository.findByCountryAndCity(country,city);
    return (ApiCustomResponse<List<Hotel>>) allHotels;
    }

    @Override
    public HotelDto createHotel(long destinationId, String country, String city) {
        Hotel hotel = (Hotel) hotelRepository.findByCountryAndCity(country, city);
        if (country != null && city != null) {
            throw new ResourceNotFoundException("there is no hotel available in this city and city");
        }
        hotelRepository.findByCountryAndCity(country, city);
        Hotel newHotel = new Hotel();
        newHotel.setHotelName(hotel.getHotelName());
        newHotel.setId(hotel.getId());
        newHotel.setCountry(hotel.getCountry());
        newHotel.setCity(hotel.getCity());
        return new HotelDto();
    }




}
