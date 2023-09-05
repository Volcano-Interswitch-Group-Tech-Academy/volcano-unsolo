package com.interswitch.volcano.Unsolo.controller;import com.interswitch.volcano.Unsolo.dtos.SignUpRequestDto;import com.interswitch.volcano.Unsolo.enums.Gender;import com.interswitch.volcano.Unsolo.model.User;import com.interswitch.volcano.Unsolo.repository.UserRepository;import com.interswitch.volcano.Unsolo.services.ServiceImpl.UserServiceImpl;import com.interswitch.volcano.Unsolo.services.UserService;import org.junit.jupiter.api.Test;import org.mockito.InjectMocks;import org.mockito.Mock;import org.modelmapper.ModelMapper;import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;import org.springframework.boot.test.context.SpringBootTest;import org.springframework.boot.test.mock.mockito.MockBean;import org.springframework.http.HttpStatus;import org.springframework.http.ResponseEntity;import java.io.IOException;import static org.junit.jupiter.api.Assertions.*;import static org.mockito.ArgumentMatchers.anyString;import static org.mockito.ArgumentMatchers.isA;import static org.mockito.Mockito.mock;import static org.mockito.Mockito.when;@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)@AutoConfigureMockMvcclass UserControllerTest {}