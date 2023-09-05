package com.interswitch.volcano.Unsolo.configurations.UserDetailConfig;

import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;


@Service
@Component
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {
    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User databaseUser = userRepository.findByEmail(email).orElseThrow(()
        -> new UsernameNotFoundException("No user found with this email or username"));
        return new CustomUserDetails(databaseUser);
    }
}
