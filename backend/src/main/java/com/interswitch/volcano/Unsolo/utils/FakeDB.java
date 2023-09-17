package com.interswitch.volcano.Unsolo.utils;

import com.interswitch.volcano.Unsolo.enums.BaseCurrency;
import com.interswitch.volcano.Unsolo.enums.Gender;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.model.Wallet;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Date;

@Configuration
@RequiredArgsConstructor
public class FakeDB {

    private final PasswordEncoder passwordEncoder;

    @Bean
    @Qualifier("MyOtherCommand")
    public CommandLineRunner myCommandLineRunner(UserRepository userRepository) {
        return (argument) -> {
            if (!userRepository.existsByEmail("bennyson1@gmail.com")) {
                Wallet wallet2 = new Wallet(2L,40000.00,BaseCurrency.NAIRA);
                User user = new User();
                user.setFirstName("Benson");
                user.setLastName("Malik");
                user.setEmail("bennyson1@gmail.com");
                user.setPhoneNumber("07097283634");
                user.setGender(Gender.FEMALE);
                user.setUserName("benson");
                user.setPassword(this.passwordEncoder.encode("Benson1234"));
                user.setRole(Role.USER);
                user.setCreatedAt(new Date());
                user.setDateOfBirth("23-8-2022");
                user.setVerificationStatus(true);
                user.setWalletId(wallet2.getWalletId());
                userRepository.save(user);
            }
            if (!userRepository.existsByEmail("admin100@gmail.com")) {
                User user = new User();
                user.setFirstName("Admin");
                user.setLastName("Smith");
                user.setEmail("admin100@gmail.com");
                user.setPhoneNumber("09097283634");
                user.setGender(Gender.MALE);
                user.setUserName("adminsmith");
                user.setPassword(this.passwordEncoder.encode("Adminsmith1234"));
                user.setRole(Role.ADMIN);
                user.setCreatedAt(new Date());
                user.setDateOfBirth("23-8-1900");
                user.setVerificationStatus(true);
                userRepository.save(user);
            }

            if (!userRepository.existsByEmail("superadmin@gmail.com")) {
                Wallet wallet1 = new Wallet(1L,200000.00,BaseCurrency.NAIRA);
                User user = new User();
                user.setFirstName("Super");
                user.setLastName("Admin");
                user.setEmail("superadmin@gmail.com");
                user.setPhoneNumber("09097276634");
                user.setGender(Gender.FEMALE);
                user.setUserName("superadmin");
                user.setPassword(this.passwordEncoder.encode("SuperAdmin1234"));
                user.setRole(Role.SUPERADMIN);
                user.setCreatedAt(new Date());
                user.setDateOfBirth("23-8-1980");
                user.setVerificationStatus(true);
                user.setWalletId(wallet1.getWalletId());
                userRepository.save(user);
            }
        };
    }

}
