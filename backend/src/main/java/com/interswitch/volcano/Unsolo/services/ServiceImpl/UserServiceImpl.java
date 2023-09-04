package com.interswitch.volcano.Unsolo.services.ServiceImpl;

<<<<<<< HEAD
import com.interswitch.volcano.Unsolo.services.UserService;
import lombok.RequiredArgsConstructor;
=======
import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;
import com.interswitch.volcano.Unsolo.dtos.SignUpResponseDto;
import com.interswitch.volcano.Unsolo.exceptions.AlreadyExistException;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import com.interswitch.volcano.Unsolo.services.UserService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.BeanUtils;
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
<<<<<<< HEAD
}
=======
    private final UserRepository userRepository;

    @Override
    public SignUpResponseDto registerUser(SignUpRequestDto signUpRequestDto) {
        boolean existsByEmail = userRepository.existsByEmail(signUpRequestDto.getEmail());
        if (existsByEmail)
            throw new AlreadyExistException("This email already exists");

        User newUser= new User();

        BeanUtils.copyProperties(signUpRequestDto,newUser);

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

>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
