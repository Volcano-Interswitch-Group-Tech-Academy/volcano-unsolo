package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.TripStatus;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "bookedTrip")
public class TripBookByUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String country;
    private String city;
    private String tripDescription;
    private int maxNoOfPersons;
    private int noOfRegisterPersons;
    private int slotAvailable;
    private double cost;
    private String startDate;
    private String endDate;
    private String duration;
    private TripStatus tripStatus;
    private Long userId;
    private Long currentDestinationId;
}
