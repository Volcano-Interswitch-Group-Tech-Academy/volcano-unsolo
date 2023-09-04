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
@Table(name = "admin")
public class Admin extends Person {

    private boolean isActive = true;
}
