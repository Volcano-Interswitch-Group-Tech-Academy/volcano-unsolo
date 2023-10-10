package com.interswitch.volcano.Unsolo.dtos;

import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CurrentDestinationsDto {

    @NotNull(message = "Country cannot be missing or empty")
    private String country;

    @NotNull(message = "City cannot be missing or empty")
    private String city;

    @NotNull(message = "Destination cannot be missing or empty")
    private String destinationName;

    @NotNull(message = "Trip description cannot be missing or empty")
    private String tripDescription;

    private int maxNoOfPersons;


    private int noOfRegisterPersons;

    private int slotAvailable;

    private double cost;

    private String startDate;
    private String endDate;
    private String duration;
}
