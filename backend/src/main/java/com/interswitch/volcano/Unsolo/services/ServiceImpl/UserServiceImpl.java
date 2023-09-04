package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.exceptions.AlreadyExistException;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    @Override
    public SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) {
        boolean existsByEmail = userRepository.existsByEmail(signUpRequestDto.getEmail());
        if (existsByEmail)
            throw new AlreadyExistException("This email already exists");

       User newUser = modelMapper.map(signUpRequestDto, User.class);
       userRepository.save(newUser);
       String subject = "Verify email address";
       String message=
               "<html> " +
                       "<body>" +
                       "<h5> Hi " + newUser.getFirstName() + " " + newUser.getLastName() + ", <h5> <br>" +
                       "<p> Welcome to UNSOLO!" + "Kindly click on the link to verify your email \n" + "<br><a href = [[TOKEN_URL]]</a><p>" +
                       "<body> " +
                       "</html>";
        SignUpResponseDto signUpResponseDto = new SignUpResponseDto();
        BeanUtils.copyProperties(newUser,signUpResponseDto);
        return signUpResponseDto;

    }
}

