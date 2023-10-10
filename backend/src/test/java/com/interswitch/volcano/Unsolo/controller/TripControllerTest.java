package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.TripDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import com.interswitch.volcano.Unsolo.model.Trip;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.TripRepository;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.ServiceImpl.TripServiceImpl;
import com.interswitch.volcano.Unsolo.services.TripService;
import com.interswitch.volcano.Unsolo.utils.BeanUtilsWithNullHandler;
import org.apache.commons.beanutils.BeanUtils;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TripControllerTest {


    private final TripRepository tripRepository = mock(TripRepository.class);

    private final CurrentDestinationsRepo currentDestinationsRepo = mock(CurrentDestinationsRepo.class);

    private final UserRepository userRepository = mock(UserRepository.class);

    private final TripService tripService = new TripServiceImpl(tripRepository, currentDestinationsRepo, userRepository);

    private final TripController tripController = new TripController(tripService);

    Trip trip;

    @BeforeEach
    public void setUp() {
        Trip trip = new Trip();
        trip.setApprovalStatus(ApprovalStatus.PENDING);
        trip.setRoomType(RoomType.ONE_PER_ROOM);
        trip.setDuration("2 weeks");
        trip.setDestinationId(1L);
        trip.setUserId(1L);
        this.trip = trip;
    }

    @Test
    void updateTrip() throws Exception {
        UpdateTripRequest updateTripRequest = new UpdateTripRequest();
        updateTripRequest.setRoomType(RoomType.TWO_PER_ROOM);
        when(tripRepository.findByIdAndUserId(anyLong(), anyLong())).thenReturn(trip);
        when(tripRepository.save(isA(Trip.class))).thenReturn(trip);

        ResponseEntity<?> responseEntity = tripController.updateTrip(1l, 1l, updateTripRequest);
        TripDto tripDto = (TripDto) responseEntity.getBody();
        assertEquals(RoomType.TWO_PER_ROOM, tripDto.getRoomType());
    }

    @Test
    void getUserTrips() {
    }

    @Test
    void createTrip() throws Exception {
        CreateTripDto createTripDto = new CreateTripDto();
        createTripDto.setRoomType(RoomType.ONE_PER_ROOM);
        createTripDto.setDestinationName("oyo");
        createTripDto.setDuration("2 weeks");

        when(tripRepository.findByDestinationIdAndUserId(anyLong(), anyLong())).thenReturn(null);
        when(currentDestinationsRepo.existsById(anyLong())).thenReturn(true);
        when(tripRepository.save(isA(Trip.class))).thenReturn(trip);

        ResponseEntity<?> responseEntity = tripController.createTrip(1L, 1L, createTripDto);
        TripDto tripDto = (TripDto) responseEntity.getBody();

        assertEquals(ApprovalStatus.PENDING, tripDto.getApprovalStatus());
    }

    @Test
    void getTripByDestinationName() {
    }

    @Test
    void getTotalNumberUsersByDestinationIdId() {
    }
}