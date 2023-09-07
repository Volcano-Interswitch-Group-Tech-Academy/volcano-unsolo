package com.interswitch.volcano.Unsolo.controller;

import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import lombok.RequiredArgsConstructor;
import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.services.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
    private final UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@Valid @RequestBody SignUpRequestDto signUpRequestDto) throws IOException {
        userService.registerUser(signUpRequestDto);
        return new ResponseEntity<>("Registration Successful! Check your mail for activation link", HttpStatus.CREATED);
    }

    @GetMapping("/verifyRegistration")
    public ResponseEntity<ApiCustomResponse<String>> verifyAccount(@RequestParam("token") String token) {
        return new ResponseEntity<>(userService.verifyRegistration(token), HttpStatus.OK);
    }
}
