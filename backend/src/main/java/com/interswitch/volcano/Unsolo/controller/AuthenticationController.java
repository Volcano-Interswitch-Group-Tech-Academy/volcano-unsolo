package com.interswitch.volcano.Unsolo.controller;


import com.interswitch.volcano.Unsolo.dtos.LoginDto;
import com.interswitch.volcano.Unsolo.services.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/auth")
public class AuthenticationController {
    private final AuthenticationService auth;

    @PostMapping({"/login"})
    public ResponseEntity<?> userLogin(@RequestBody @Valid LoginDto loginDto) {
        return new ResponseEntity<>(auth.loginUser(loginDto), HttpStatus.OK);
    }
}
