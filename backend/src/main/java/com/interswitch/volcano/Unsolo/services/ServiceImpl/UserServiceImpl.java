package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.configurations.token.TokenService;
import com.interswitch.volcano.Unsolo.dtos.UserDto;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.enums.TokenStatus;
import com.interswitch.volcano.Unsolo.exceptions.InvalidTokenException;
import com.interswitch.volcano.Unsolo.exceptions.ResourceNotFoundException;
import com.interswitch.volcano.Unsolo.exceptions.UserAlreadyExistException;
import com.interswitch.volcano.Unsolo.exceptions.UserNotFoundException;
import com.interswitch.volcano.Unsolo.model.Token;
import com.interswitch.volcano.Unsolo.repository.TokenRepository;
import com.interswitch.volcano.Unsolo.services.MailService;
import com.interswitch.volcano.Unsolo.services.UserService;
import com.interswitch.volcano.Unsolo.utils.ApiCustomResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.io.IOException;

import static com.interswitch.volcano.Unsolo.enums.TokenStatus.EXPIRED;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final TokenRepository tokenRepository;
    private final MailService mailService;
    private final HttpServletRequest request;
    private final PasswordEncoder passwordEncoder;


    @Override
    public SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) throws IOException {
        boolean existsByEmail = userRepository.existsByEmail(signUpRequestDto.getEmail());
        if (existsByEmail)
            throw new UserAlreadyExistException("User with this email already exists");
        User newUser= new User();
        BeanUtils.copyProperties(signUpRequestDto,newUser);
        newUser.setRole(Role.USER);
        newUser.setVerificationStatus(false);
        newUser.setPassword(passwordEncoder.encode(signUpRequestDto.getPassword()));
        userRepository.save(newUser);
        String registrationToken = generateAndSaveToken(newUser.getId(), newUser.getEmail());
        sendMail(signUpRequestDto.getEmail(), newUser, registrationToken);
        SignUpResponseDto signUpResponseDto = new SignUpResponseDto();
        BeanUtils.copyProperties(newUser,signUpResponseDto);
        return signUpResponseDto;
    }

    private void sendMail(String email, User user, String registrationToken) throws IOException {
        mailService.sendMail(email,
                "Verify your email address",
                "Hi " + user.getFirstName() + " " + user.getLastName() + ",  Welcome to UNSOLO!." +
                        " We have received a registration request with your email. " +
                        "To complete your registration, kindly click on the link to verify your email address \n" + "http://" +
                        request.getServerName() + ":8060" + "/api/users/verifyRegistration?token=" + registrationToken);
    }

    private String generateAndSaveToken(Long userId, String userEmail) {
        String registrationToken = tokenService.generateVerificationToken(userEmail);
        Token token = new Token();
        token.setToken(registrationToken);
        token.setTokenStatus(TokenStatus.ACTIVE);
        token.setUserId(userId);
        tokenRepository.save(token);
        return registrationToken;
    }

    // token verification

    @Override
    public ApiCustomResponse<String> verifyRegistration(String token) {
        Token verifyToken = tokenRepository.findByToken(token).orElseThrow(()
                -> new InvalidTokenException("Token Not Found"));
        if (verifyToken.getTokenStatus().equals(EXPIRED))
            throw new InvalidTokenException("Token expired or already used");
        User user = userRepository.findById(verifyToken.getUserId()).orElseThrow(() ->
                new UserNotFoundException("This user does not exists"));
        user.setVerificationStatus(true);
        verifyToken.setTokenStatus(EXPIRED);
        tokenRepository.save(verifyToken);
        return new ApiCustomResponse<String>("Congratulations!, your Account has been successfully verified", null, HttpStatus.OK);
    }

    @Override
    public UserDto getAsingleUser(Long user_id) {
        User user = userRepository.findById(user_id).orElseThrow(() -> new ResourceNotFoundException("this User does not exist"));
        return UserDto.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .gender(user.getGender())
                .userName(user.getUserName())
                .dateOfBirth(user.getDateOfBirth())
                .build();

    }

}
