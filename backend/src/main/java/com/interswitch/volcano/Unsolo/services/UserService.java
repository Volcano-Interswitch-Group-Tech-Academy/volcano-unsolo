package com.interswitch.volcano.Unsolo.services;


import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.dtos.UserDto;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.io.IOException;

public interface UserService {
    SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) throws IOException;
    public ApiCustomResponse<String> verifyRegistration(String token);
    UserDto getAsingleUser( Long user_id);

    UserDto getUserDetails(String name);
}
