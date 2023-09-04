package com.interswitch.volcano.Unsolo.controller;


<<<<<<< HEAD
import lombok.RequiredArgsConstructor;
=======
import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/users")
public class UserController {
<<<<<<< HEAD

=======
    private final UserService userService;

    @PostMapping("/sign-up")
    public ResponseEntity<String> signUp(@Valid @RequestBody SignUpRequestDto signUpRequestDto) {
        userService.registerUser(signUpRequestDto);
        return new ResponseEntity<>("Registration Successful! Check your mail for activation link", HttpStatus.CREATED);
    }
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
}
