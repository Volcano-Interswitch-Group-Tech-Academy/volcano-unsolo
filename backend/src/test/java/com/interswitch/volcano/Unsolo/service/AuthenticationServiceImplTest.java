package com.interswitch.volcano.Unsolo.service;

import com.interswitch.volcano.Unsolo.configurations.UserDetailConfig.CustomUserDetailsService;
import com.interswitch.volcano.Unsolo.configurations.token.TokenService;
import com.interswitch.volcano.Unsolo.dtos.LoginDto;
import com.interswitch.volcano.Unsolo.services.ServiceImpl.AuthenticationServiceImpl;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AuthenticationServiceImplTest {

    private LoginDto loginDto;
    private UserDetails userDetails;
    private Authentication authentication;
    @InjectMocks
    private AuthenticationServiceImpl authenticationService;
    @Mock
    private CustomUserDetailsService customUserDetailsService;
    @Mock
    private TokenService tokenService;
    @Mock
    private AuthenticationManager authenticationManager;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        loginDto = new LoginDto("test@example.com", "Benson1234");
        userDetails = mock(UserDetails.class);
        authentication = new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());
    }

    @Test
    void loginUser() {
        when(customUserDetailsService.loadUserByUsername("test@example.com")).thenReturn(userDetails);
        when(userDetails.isEnabled()).thenReturn(true);
        when(userDetails.isAccountNonLocked()).thenReturn(true);
        when(authenticationManager.authenticate(any())).thenReturn(authentication);
        when(tokenService.generateToken(any())).thenReturn("testToken");
        ApiCustomResponse<String> response = authenticationService.loginUser(loginDto);
        assertEquals("Login Successful", response.getMessage());
        assertEquals("testToken", response.getObject());
        assertEquals(HttpStatus.OK, response.getStatus());
        verify(customUserDetailsService, times(1)).loadUserByUsername("test@example.com");
        verify(authenticationManager, times(1)).authenticate(any());
        verify(tokenService, times(1)).generateToken(any());
    }

    @Test
    void testLoginUser_BadCredentialsException() {
        when(customUserDetailsService.loadUserByUsername("test@example.com")).thenReturn(userDetails);
        when(authenticationManager.authenticate(any())).thenThrow(new BadCredentialsException("Password or Email not correct"));
        LoginDto loginRequest1 = new LoginDto("test@example.com", "validPassword");
        ApiCustomResponse<String> response = authenticationService.loginUser(loginRequest1);
        assertEquals("Password or Email not correct", response.getMessage());
        assertEquals(HttpStatus.UNAUTHORIZED, response.getStatus());
        verify(customUserDetailsService, times(1)).loadUserByUsername("test@example.com");
        verify(tokenService, never()).generateToken(any());
    }
    @Test
    void testLoginUser_AccountLocked() {
        when(customUserDetailsService.loadUserByUsername("test@example.com")).thenReturn(userDetails);
        when(userDetails.isEnabled()).thenReturn(true);
        when(userDetails.isAccountNonLocked()).thenReturn(false);
        LoginDto login = new LoginDto("test@example.com", "validPassword");
        ApiCustomResponse<String> response = authenticationService.loginUser(login);
        assertEquals("This account has been deactivated", response.getMessage());
        assertEquals(HttpStatus.OK, response.getStatus());
        verify(customUserDetailsService, times(1)).loadUserByUsername("test@example.com");
        verify(authenticationManager, never()).authenticate(any());
        verify(tokenService, never()).generateToken(any());
    }
}