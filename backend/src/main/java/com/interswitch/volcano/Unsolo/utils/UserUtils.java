package com.interswitch.volcano.Unsolo.utils;

import com.interswitch.volcano.Unsolo.configurations.UserDetailConfig.CustomUserDetails;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class UserUtils {

    public static CustomUserDetails getLoggedInUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        System.out.println(authentication.getName() + " ==============");
        if (authentication != null)
            return (CustomUserDetails) authentication.getPrincipal();
        return null;
    }
}
