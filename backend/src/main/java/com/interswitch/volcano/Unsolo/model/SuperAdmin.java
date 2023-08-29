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
@Builder
@Table(name = "super_admin")
public class SuperAdmin extends Person{
    private Long walletId;
}
