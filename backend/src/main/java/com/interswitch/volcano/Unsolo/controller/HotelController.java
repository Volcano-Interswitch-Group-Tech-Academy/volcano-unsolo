package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.HotelDto;
import com.interswitch.volcano.Unsolo.model.Hotel;
import com.interswitch.volcano.Unsolo.repository.HotelRepository;
import com.interswitch.volcano.Unsolo.services.HotelService;
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
    private final HotelService hotelService;
    @GetMapping("/view-all")
    public ResponseEntity<List<HotelDto>> getAllHotels(){
        List<HotelDto> hotelDtoList = hotelService.getAllHotels();
        return ResponseEntity.ok(hotelDtoList);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createHotel(@Valid @RequestBody HotelDto hotelDto) throws Exception{
        return new ResponseEntity<>(hotelService.createHotel(hotelDto), HttpStatusCode.valueOf(HttpStatus.SC_CREATED));
    }
}
