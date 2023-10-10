package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.RoomType;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CreateTripDto {
    private String duration;
    private String destinationName;
    private RoomType roomType;
}
