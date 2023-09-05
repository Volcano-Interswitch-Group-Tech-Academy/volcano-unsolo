package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.TripStatus;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CurrentDestinationsDto {

    @Column(nullable = false, length = 100)
    @NotNull(message = "Country cannot be missing or empty")
    private String country;

    @Column(nullable = false, length = 100)
    @NotNull(message = "City cannot be missing or empty")
    private String city;

    @Column(nullable = false, length = 1000)
    @NotNull(message = "Trip description cannot be missing or empty")
    private String tripDescription;

    @Column(nullable = false)
    private int maxNoOfPersons;


    private int noOfRegisterPersons;

    @Column(nullable = false)
    private int slotAvailable;

    @Column(nullable = false)
    private double cost;

    private String startDate;
    private String endDate;
    private String duration;

    @Column(nullable = false)
    private TripStatus tripStatus;
}
