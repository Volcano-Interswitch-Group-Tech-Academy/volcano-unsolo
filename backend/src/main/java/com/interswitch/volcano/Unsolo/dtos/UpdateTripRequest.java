package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.RoomType;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UpdateTripRequest {
    private String duration;
    private RoomType roomType;
}
