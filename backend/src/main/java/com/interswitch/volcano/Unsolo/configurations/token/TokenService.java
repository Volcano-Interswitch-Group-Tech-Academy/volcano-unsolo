package com.interswitch.volcano.Unsolo.configurations.token;

import org.springframework.security.core.Authentication;

public interface TokenService {

    String generateToken(Authentication authentication);
    String generatePasswordResetToken(String email);
    String generateVerificationToken(String email);
}
