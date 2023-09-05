package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.LoginDto;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;

public interface AuthenticationService {
    ApiCustomResponse<String> loginUser(LoginDto loginRequest);
}
