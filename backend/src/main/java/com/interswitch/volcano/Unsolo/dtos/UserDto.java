package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.Gender;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
    private String firstName;
    private String lastName;
    private String email;
    private Gender gender;
    private String userName;
    private String dateOfBirth;
    private long  id;
}
