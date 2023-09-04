package com.interswitch.volcano.Unsolo.services;


import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
public interface UserService {
    SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto);
}
