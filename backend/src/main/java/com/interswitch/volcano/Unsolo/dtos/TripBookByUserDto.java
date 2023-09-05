package com.interswitch.volcano.Unsolo.dtos;


import com.interswitch.volcano.Unsolo.enums.TripStatus;
import lombok.*;

@Builder
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class TripBookByUserDto {

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
