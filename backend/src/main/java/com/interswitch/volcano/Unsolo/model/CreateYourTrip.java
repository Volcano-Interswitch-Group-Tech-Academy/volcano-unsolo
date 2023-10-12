package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Entity
@Table(name = "trips")
public class CreateYourTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String duration;
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus;
    private Long userId;
    private Long destinationId;
    @Enumerated(EnumType.STRING)
    private RoomType roomType;

}
