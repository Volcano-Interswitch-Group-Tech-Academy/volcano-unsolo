package com.interswitch.volcano.Unsolo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "user_tb")
public class User extends Person {

    private String dateOfBirth;
    private boolean verificationStatus = false;
    private boolean isActive = true;
    private Long walletId;

}
