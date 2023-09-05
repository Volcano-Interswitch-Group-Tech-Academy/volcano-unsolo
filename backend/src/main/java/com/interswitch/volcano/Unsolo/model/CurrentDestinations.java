package com.interswitch.volcano.Unsolo.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "currentDest")
public class CurrentDestinations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String country;
    private String city;
    private String tripDescription;
    private int maxNoOfPersons;
    private double cost;
    private String startDate;
    private String endDate;
    private String duration;

}
