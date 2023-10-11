package com.interswitch.volcano.Unsolo.service;

import org.mockito.Mock;

import static org.junit.Assert.assertThrows;
import static org.junit.jupiter.api.Assertions.assertEquals;


class CreateYourTripServiceImplTest {
    //@Mock







































//    @Mock
//    CreateTripRepo createTripRepo;
//    @Mock
//    UserRepository userRepository;
//    @Mock
//    CurrentDestinationsRepo currentDestinationsRepo;
//    @InjectMocks
//    private CreateYourT createYourTripService;
//    private CreateTrip newCreateTrip;
//    private CreateTripDto createYourTripDto;
//    private User user;
//    private User adminUser;
//    private Authentication authentication;
//
//
//    @BeforeEach
//    void setUp() {
//        MockitoAnnotations.openMocks(this);
//        user = new User();  user.setId(2L); user.setEmail("user@gmail.com");
//        user.setPassword("Benson1234");
//        newCreateYourTrip = new CreateTrip(1L, "Nigeria", "Abeokuta", "Olumorock", "mountaintops",
//                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM, 2L, PENDING);
//        createYourTripDto = new CreateTripDto("Nigeria", "Abeokuta", "Olumorock", "mountaintops",
//                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM);
//        adminUser = new User();
//        adminUser.setRole(Role.ADMIN);
//        adminUser.setEmail("admin@example.com");
//        authentication = mock(Authentication.class);
//
//
//    }
//
//    @Test
//    void toCreateYourTrip() {
//        when(authentication.isAuthenticated()).thenReturn(true);
//        when(authentication.getName()).thenReturn("user@gmail.com");
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        when(userRepository.findByEmail(user.getEmail())).thenReturn(Optional.of(user));
//        when(createYourTripRepo.existsByDestinationName(createYourTripDto.getDestinationName())).thenReturn(false);
//        ApiCustomResponse<CreateTripDto> response = createYourTripService.toCreateYourTrip(createYourTripDto);
//        Assertions.assertEquals(HttpStatus.CREATED, response.getStatus());
//        Assertions.assertNotNull(response.getObject());
//        assertEquals(createYourTripDto, response.getObject());
//        Assertions.assertEquals("Your Trip has been created Successfully and pending Admin approval", response.getMessage());
//    }
//    @Test
//    void toCreateYourTrip_UserNotLoggedIn() {
//        Authentication authentication = mock(AnonymousAuthenticationToken.class);
//        when(authentication.isAuthenticated()).thenReturn(false);
//        when(authentication.getName()).thenReturn("anonymousUser");
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        CreateTripDto createYourTripDto1 = new CreateTripDto("Nigeria", "Abeokuta", "Olumorock", "mountaintops",
//                10, "12/03/2022", "19/03/2022", "7 days", ONE_PER_ROOM);
//        UserNotFoundException exception = assertThrows(UserNotFoundException.class, () -> {
//            createYourTripService.toCreateYourTrip(createYourTripDto);});
//        assertEquals("Please Login", exception.getMessage());
//        verifyNoInteractions(userRepository);
//        verifyNoInteractions(createYourTripRepo);
//    }
//
//    @Test
//    void approvedPendingTrips() {
//        when(createYourTripRepo.findById(1L)).thenReturn(Optional.ofNullable(newCreateYourTrip));
//        ApiCustomResponse<String> response = createYourTripService.approvedPendingTrips(1L);
//        assertEquals(HttpStatus.OK, response.getStatus());
//        assertEquals("Trip has been approved successfully and moved to Current destinations", response.getMessage());
//        assertEquals(ApprovalStatus.APPROVED, newCreateYourTrip.getApprovalStatus());
//        verify(currentDestinationsRepo).save(any(CurrentDestinations.class));
//    }
//
//    @Test
//    void approvedPendingTrips_NotPending() {
//        CreateYourTrip nonPendingTrip = new CreateYourTrip();
//        nonPendingTrip.setId(2L);
//        nonPendingTrip.setApprovalStatus(ApprovalStatus.APPROVED);
//        when(createYourTripRepo.findById(2L)).thenReturn(Optional.of(nonPendingTrip));
//        InvalidApprovalOperationException exception = assertThrows(InvalidApprovalOperationException.class,
//                () -> createYourTripService.approvedPendingTrips(2L));
//        assertEquals("Trip is not pending approval", exception.getMessage());
//        assertEquals(ApprovalStatus.APPROVED, nonPendingTrip.getApprovalStatus());
//        verify(currentDestinationsRepo, never()).save(any(CurrentDestinations.class));
//    }
//
//    @Test
//    void deleteATripCreatedByUser() {
//        when(authentication.getName()).thenReturn(adminUser.getEmail());
//        SecurityContextHolder.getContext().setAuthentication(authentication);
//        when(userRepository.findByEmail(adminUser.getEmail())).thenReturn(Optional.of(adminUser));
//        when(createYourTripRepo.findById(1L)).thenReturn(Optional.of(newCreateYourTrip));
//        createYourTripService.deleteATripCreatedByUser(1L);
//        verify(createYourTripRepo).delete(newCreateYourTrip);
//    }
}