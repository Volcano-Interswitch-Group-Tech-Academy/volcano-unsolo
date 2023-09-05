package com.interswitch.volcano.Unsolo.configurations.UserDetailConfig;

import com.interswitch.volcano.Unsolo.model.User;
import lombok.Builder;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
@Builder
public class CustomUserDetails implements UserDetails {
    private User dataBaseUser;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return dataBaseUser.getRole().getGrantedAuthorities();
    }

    @Override
    public String getPassword() {
        return dataBaseUser.getPassword();
    }

    @Override
    public String getUsername() {


        return dataBaseUser.getEmail();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return dataBaseUser.isVerificationStatus();
    }
}
