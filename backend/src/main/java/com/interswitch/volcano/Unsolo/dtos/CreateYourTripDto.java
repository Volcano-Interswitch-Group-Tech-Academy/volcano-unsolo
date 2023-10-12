package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import lombok.*;


@Data
@NoArgsConstructor
@AllArgsConstructor

public class CreateYourTripDto {

    private Long id;
    private String duration;
    private ApprovalStatus approvalStatus;
    private Long userId;

    private RoomType roomType;
}