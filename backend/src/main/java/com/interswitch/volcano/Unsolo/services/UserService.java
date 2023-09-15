package com.interswitch.volcano.Unsolo.services;


import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.model.CurrentDestinations;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

import java.io.IOException;
import java.util.List;

public interface UserService {
    SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) throws IOException;
    public ApiCustomResponse<String> verifyRegistration(String token);


}
