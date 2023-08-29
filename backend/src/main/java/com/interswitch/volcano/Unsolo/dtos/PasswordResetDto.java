package com.interswitch.volcano.Unsolo.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PasswordResetDto {
    @NotBlank(message = "Password is mandatory")
    private String password;
    @NotBlank(message = "Confirm password is mandatory")
    private String confirmPassword;

}
