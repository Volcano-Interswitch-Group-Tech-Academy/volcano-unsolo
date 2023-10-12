package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.CreateTripDto;
import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.dtos.UpdateTripRequest;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepository;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.CreateYourTripService;
import com.interswitch.volcano.Unsolo.services.ServiceImpl.CreateYourTripServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.ResponseEntity;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.ArgumentMatchers.isA;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class TripControllerTest {


    private final CreateYourTripRepository tripRepository = mock(CreateYourTripRepository.class);

    private final CurrentDestinationsRepo currentDestinationsRepo = mock(CurrentDestinationsRepo.class);

    private final UserRepository userRepository = mock(UserRepository.class);

    private final CreateYourTripService tripService = new CreateYourTripServiceImpl(tripRepository, currentDestinationsRepo, userRepository);

    private final CreateYourTripController tripController = new CreateYourTripController(tripService);

    CreateYourTrip trip;

    @BeforeEach
    public void setUp() {
        CreateYourTrip trip = new CreateYourTrip();
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
        when(tripRepository.save(isA(CreateYourTrip.class))).thenReturn(trip);

        ResponseEntity<?> responseEntity = tripController.updateTrip(1l, 1l, updateTripRequest);
        CreateYourTripDto tripDto = (CreateYourTripDto) responseEntity.getBody();
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
        when(tripRepository.save(isA(CreateYourTrip.class))).thenReturn(trip);

        ResponseEntity<?> responseEntity = tripController.createTrip(1L, 1L, createTripDto);
        CreateYourTripDto tripDto = (CreateYourTripDto) responseEntity.getBody();

        assertEquals(ApprovalStatus.PENDING, tripDto.getApprovalStatus());
    }

    @Test
    void getTripByDestinationName() {
    }

    @Test
    void getTotalNumberUsersByDestinationIdId() {
    }
}