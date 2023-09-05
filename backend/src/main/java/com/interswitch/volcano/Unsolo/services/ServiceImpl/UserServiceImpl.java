package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.configurations.token.TokenService;
import com.interswitch.volcano.Unsolo.enums.TokenStatus;
import com.interswitch.volcano.Unsolo.exceptions.UserAlreadyExistException;
import com.interswitch.volcano.Unsolo.model.Token;
import com.interswitch.volcano.Unsolo.repository.TokenRepository;
import com.interswitch.volcano.Unsolo.services.MailService;
import com.interswitch.volcano.Unsolo.services.UserService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final TokenService tokenService;
    private final TokenRepository tokenRepository;
    private final MailService mailService;
    private final HttpServletRequest request;


    @Override
    public SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) throws IOException {
        boolean existsByEmail = userRepository.existsByEmail(signUpRequestDto.getEmail());
        if (existsByEmail)
            throw new UserAlreadyExistException("User with this email already exists");
        User newUser= new User();
        BeanUtils.copyProperties(signUpRequestDto,newUser);
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
                        request.getServerName() + ":8060" + "/api/verifyRegistration?token=" + registrationToken);
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
}
