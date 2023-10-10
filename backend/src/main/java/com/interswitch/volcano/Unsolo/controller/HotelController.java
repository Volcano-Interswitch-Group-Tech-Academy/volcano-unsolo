package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.HotelDto;
import com.interswitch.volcano.Unsolo.model.Hotel;
import com.interswitch.volcano.Unsolo.repository.HotelRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.apache.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/api/hotel")
public class HotelController {
    private final HotelRepository hotelRepository;
    @GetMapping("/{country}/{city}")
    public ResponseEntity<List<Hotel>> getAllHotels(@PathVariable String country, @PathVariable String city)throws Exception{
        return new ResponseEntity<List<Hotel>>(hotelRepository.findByCountryAndCity(country,city), HttpStatusCode.valueOf(HttpStatus.SC_CREATED));
    }

    @PostMapping("/create/{destinationId}")
    public ResponseEntity<Hotel> createHotel(@PathVariable long destinationId,
                                             @RequestParam String country, String city, @Valid @RequestBody HotelDto hotelDto) throws Exception{
        return new ResponseEntity<Hotel>((Hotel) hotelRepository.findByCountryAndCity(country,city), HttpStatusCode.valueOf(HttpStatus.SC_CREATED));
    }
}
