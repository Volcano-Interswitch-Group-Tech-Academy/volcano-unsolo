package com.interswitch.volcano.Unsolo.service;

import com.interswitch.volcano.Unsolo.dtos.CreateYourTripDto;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.exceptions.InvalidApprovalOperationException;
import com.interswitch.volcano.Unsolo.exceptions.UserNotFoundException;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.repository.CurrentDestinationsRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.ServiceImpl.CreateYourTripServiceImpl;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

import static com.interswitch.volcano.Unsolo.enums.ApprovalStatus.PENDING;
import static com.interswitch.volcano.Unsolo.enums.RoomType.ONE_PER_ROOM;
import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;


class CreateYourTripServiceImplTest {
    @Mock
    CreateYourTripRepo createYourTripRepo;
    @Mock
    UserRepository userRepository;
    @Mock
    CurrentDestinationsRepo currentDestinationsRepo;
    @InjectMocks
    private CreateYourTripServiceImpl createYourTripService;
    private CreateYourTrip newCreateYourTrip;
    private CreateYourTripDto createYourTripDto;
    private User user;
    private User adminUser;
    private Authentication authentication;


    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        user = new User();  user.setId(2L); user.setEmail("user@gmail.com");
        user.setPassword("Benson1234");
        newCreateYourTrip = new CreateYourTrip(1L, "Nigeria", "Abeokuta", "Olumorock", "mountaintops",
                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM, 2L, PENDING);
        createYourTripDto = new CreateYourTripDto("Nigeria", "Abeokuta", "Olumorock", "mountaintops",
                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM);
        adminUser = new User();
        adminUser.setRole(Role.ADMIN);
        adminUser.setEmail("admin@example.com");
        authentication = mock(Authentication.class);


    }

    @Test
    void toCreateYourTrip() {
        when(authentication.isAuthenticated()).thenReturn(true);
        when(authentication.getName()).thenReturn("user@gmail.com");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        when(userRepository.findByEmail(user.getEmail())).thenReturn(Optional.of(user));
        when(createYourTripRepo.existsByDestinationName(createYourTripDto.getDestinationName())).thenReturn(false);
        ApiCustomResponse<CreateYourTripDto> response = createYourTripService.toCreateYourTrip(createYourTripDto);
        Assertions.assertEquals(HttpStatus.CREATED, response.getStatus());
        Assertions.assertNotNull(response.getObject());
        assertEquals(createYourTripDto, response.getObject());
        Assertions.assertEquals("Your Trip has been created Successfully and pending Admin approval", response.getMessage());
    }
    @Test
    void toCreateYourTrip_UserNotLoggedIn() {
        Authentication authentication = mock(AnonymousAuthenticationToken.class);
        when(authentication.isAuthenticated()).thenReturn(false);
        when(authentication.getName()).thenReturn("anonymousUser");
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CreateYourTripDto createYourTripDto1 = new CreateYourTripDto("Nigeria", "Abeokuta", "Olumorock", "mountaintops",
                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM);
        UserNotFoundException exception = assertThrows(UserNotFoundException.class, () -> {
            createYourTripService.toCreateYourTrip(createYourTripDto);});
        assertEquals("Please Login", exception.getMessage());
        verifyNoInteractions(userRepository);
        verifyNoInteractions(createYourTripRepo);
    }

    @Test
    void approvedPendingTrips() {
        when(createYourTripRepo.findById(1L)).thenReturn(Optional.ofNullable(newCreateYourTrip));
        ApiCustomResponse<String> response = createYourTripService.approvedPendingTrips(1L);
        assertEquals(HttpStatus.OK, response.getStatus());
        assertEquals("Trip has been approved successfully and moved to Current destinations", response.getMessage());
        assertEquals(ApprovalStatus.APPROVED, newCreateYourTrip.getApprovalStatus());
        verify(currentDestinationsRepo).save(any(CurrentDestinations.class));
    }

    @Test
    void approvedPendingTrips_NotPending() {
        CreateYourTrip nonPendingTrip = new CreateYourTrip();
        nonPendingTrip.setId(2L);
        nonPendingTrip.setApprovalStatus(ApprovalStatus.APPROVED);
        when(createYourTripRepo.findById(2L)).thenReturn(Optional.of(nonPendingTrip));
        InvalidApprovalOperationException exception = assertThrows(InvalidApprovalOperationException.class,
                () -> createYourTripService.approvedPendingTrips(2L));
        assertEquals("Trip is not pending approval", exception.getMessage());
        assertEquals(ApprovalStatus.APPROVED, nonPendingTrip.getApprovalStatus());
        verify(currentDestinationsRepo, never()).save(any(CurrentDestinations.class));
    }

    @Test
    void deleteATripCreatedByUser() {
        when(authentication.getName()).thenReturn(adminUser.getEmail());
        SecurityContextHolder.getContext().setAuthentication(authentication);
        when(userRepository.findByEmail(adminUser.getEmail())).thenReturn(Optional.of(adminUser));
        when(createYourTripRepo.findById(1L)).thenReturn(Optional.of(newCreateYourTrip));
        createYourTripService.deleteATripCreatedByUser(1L);
        verify(createYourTripRepo).delete(newCreateYourTrip);
    }
}