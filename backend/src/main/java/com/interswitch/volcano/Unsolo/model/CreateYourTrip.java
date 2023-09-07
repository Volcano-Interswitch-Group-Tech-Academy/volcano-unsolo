package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "createYourTrip")
public class CreateYourTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String country;
    private String city;
    private String destinationName;
    private String tripDescription;
    private int maxNoOfPersons;
    private String startDate;
    private String endDate;
    private String duration;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoomType roomType;
    private Long userId;
    private ApprovalStatus approvalStatus;
}
