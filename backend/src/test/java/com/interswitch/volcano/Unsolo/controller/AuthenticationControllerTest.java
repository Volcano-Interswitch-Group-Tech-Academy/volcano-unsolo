package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.dtos.LoginDto;
import com.interswitch.volcano.Unsolo.services.AuthenticationService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
class AuthenticationControllerTest {
    @Autowired
    TestRestTemplate restTemplate;
    @MockBean
    AuthenticationService authenticationService;
     private LoginDto loginRequest;

    @BeforeEach
    void setUp(){
        loginRequest = new LoginDto("test@example.com", "Benson1234");

    }
    @Test
    void userLogin() {
        ApiCustomResponse<String> successResponse = new ApiCustomResponse<>("Login Successful", "token123", HttpStatus.OK);
        when(authenticationService.loginUser(loginRequest)).thenReturn(successResponse);
        ResponseEntity<String> responseEntity = restTemplate.postForEntity( "/api/auth/login", loginRequest, String.class);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        Assertions.assertNotNull(responseEntity);
        verify(authenticationService, times(1)).loginUser(loginRequest);
    }
}