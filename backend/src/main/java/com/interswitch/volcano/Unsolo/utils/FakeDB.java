package com.interswitch.volcano.Unsolo.utils;

import com.interswitch.volcano.Unsolo.enums.BaseCurrency;
import com.interswitch.volcano.Unsolo.enums.Gender;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.model.Wallet;
import com.interswitch.volcano.Unsolo.repository.AdminRepository;
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
    private final AdminRepository adminRepository;

    @Bean
    @Qualifier("MyOtherCommand")
    public CommandLineRunner myCommandLineRunner(UserRepository userRepository, AdminRepository adminRepository) {
        return (argument) -> {
            if (!userRepository.existsByEmail("bennyson1@gmail.com")) {
                Wallet wallet1 = Wallet.builder().baseCurrency(BaseCurrency.NAIRA).accountBalance(40000.0).build();
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
                user.setWalletId(wallet1.getWalletId());
                userRepository.save(user);
            }
        };
    }
}
