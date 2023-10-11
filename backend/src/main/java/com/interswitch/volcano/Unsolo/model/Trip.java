package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "trips")
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String duration;
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus;
    private long userId;
    private long destinationId;
    @Enumerated(EnumType.STRING)
    private RoomType roomType;

}
