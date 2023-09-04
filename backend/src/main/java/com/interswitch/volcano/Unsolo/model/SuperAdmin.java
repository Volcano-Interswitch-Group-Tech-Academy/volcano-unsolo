package com.interswitch.volcano.Unsolo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
<<<<<<< HEAD
@Builder
@Table(name = "super_admin")
public class SuperAdmin extends Person{
    private Long walletId;
}
=======
@Table(name = "super_admin")
public class SuperAdmin extends Person{
    private Long walletId;
 }
>>>>>>> 09962f6096cd5af2aea02cf4da75b722f29d775e
