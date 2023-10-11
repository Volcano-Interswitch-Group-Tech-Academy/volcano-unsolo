package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.HotelDto;
import com.interswitch.volcano.Unsolo.exceptions.ResourceNotFoundException;
import com.interswitch.volcano.Unsolo.model.Hotel;
import com.interswitch.volcano.Unsolo.repository.HotelRepository;
import com.interswitch.volcano.Unsolo.services.HotelService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
@RequiredArgsConstructor
public class HotelServiceImpl implements HotelService {
    private final HotelRepository hotelRepository;

    @Override
    public List<HotelDto> getAllHotels() {
        List<Hotel> allHotels = hotelRepository.findAll();
        if (allHotels.isEmpty()) {
            throw new ResourceNotFoundException("No hotel available");
        }

        List<HotelDto> hotelDtoList = new ArrayList<>();
        for (Hotel hotel : allHotels) {
            HotelDto hotelDto = HotelDto.builder()
                    .hotelName(hotel.getHotelName())
                    .country(hotel.getCountry())
                    .city(hotel.getCity())
                    .build();
            hotelDtoList.add(hotelDto);
        }
        return hotelDtoList;
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
