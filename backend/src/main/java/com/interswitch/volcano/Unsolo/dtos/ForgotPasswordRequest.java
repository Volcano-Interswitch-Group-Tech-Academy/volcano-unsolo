package com.interswitch.volcano.Unsolo.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ForgotPasswordRequest {
    @NotBlank(message = "Email is mandatory")
    private String email;
}
