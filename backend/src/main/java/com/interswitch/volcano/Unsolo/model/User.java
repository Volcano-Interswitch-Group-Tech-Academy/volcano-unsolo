package com.interswitch.volcano.Unsolo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
<<<<<<< HEAD
@Builder
@Entity
@Table(name = "user")
=======
@Entity
@Table(name = "users")
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
public class User extends Person {

    private String dateOfBirth;
    private boolean verificationStatus = false;
    private boolean isActive = true;
    private Long walletId;

}
