package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.configurations.UserDetailConfig.CustomUserDetailsService;
import com.interswitch.volcano.Unsolo.configurations.token.TokenService;
import com.interswitch.volcano.Unsolo.dtos.LoginDto;
import com.interswitch.volcano.Unsolo.exceptions.InvalidCredentialsException;
import com.interswitch.volcano.Unsolo.services.AuthenticationService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    private final TokenService tokenService;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;

    @Override
    public ApiCustomResponse<String> loginUser(LoginDto loginRequest) {
        try {
            UserDetails user = customUserDetailsService.loadUserByUsername(loginRequest.getEmail());
            if(!user.isEnabled())
                throw new UsernameNotFoundException("You have not been verified. Check your email to be verified!");
            if (!user.isAccountNonLocked()){
                return new ApiCustomResponse<>("This account has been deactivated", null, HttpStatus.OK);
            }
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
            if(authentication == null)
                throw new InvalidCredentialsException("Invalid Email or Password");
            return new ApiCustomResponse<>("Login Successful", tokenService.generateToken(authentication), HttpStatus.OK);
        } catch (InvalidCredentialsException e) {
            return new ApiCustomResponse<>("Invalid Credentials", null, HttpStatus.UNAUTHORIZED);
        } catch (BadCredentialsException | UsernameNotFoundException e) {
            return new ApiCustomResponse<>("Password or Email not correct", null, HttpStatus.UNAUTHORIZED);
        }
    }
}
