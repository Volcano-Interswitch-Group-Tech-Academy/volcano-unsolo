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
=======
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
@Entity
@Table(name = "admin")
public class Admin extends Person {

    private boolean isActive = true;
}
