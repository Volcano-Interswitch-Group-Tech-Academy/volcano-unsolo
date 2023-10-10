package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class TripDto {
    private Long id;
    private String duration;
    private ApprovalStatus approvalStatus;
    private long userId;

    private RoomType roomType;
}
