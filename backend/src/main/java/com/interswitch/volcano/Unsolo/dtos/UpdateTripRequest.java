package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.RoomType;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdateTripRequest {
    private String country;
    private String city;
    private String destinationName;
    private String tripDescription;
    private int maxNoOfPersons;
    private String startDate;
    private String endDate;
    private String duration;
    private RoomType roomType;
}
