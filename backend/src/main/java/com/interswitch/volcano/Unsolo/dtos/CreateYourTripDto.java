package com.interswitch.volcano.Unsolo.dtos;

import com.interswitch.volcano.Unsolo.enums.RoomType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Builder
@Data
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CreateYourTripDto {

    @Column(nullable = false, length = 100)
    @NotNull(message = "Country cannot be missing or empty")
    private String country;

    @Column(nullable = false, length = 100)
    @NotNull(message = "City cannot be missing or empty")
    private String city;

    @Column(nullable = false, length = 100)
    @NotNull(message = "Destination name cannot be missing or empty")
    private String destinationName;

    @Column(nullable = false, length = 1000)
    @NotNull(message = "Trip description cannot be missing or empty")
    private String tripDescription;

    @Column(nullable = false)
    private int maxNoOfPersons;

    @Column(nullable = false)
    private String startDate;

    @Column(nullable = false)
    private String endDate;

    @Column(nullable = false)
    private String duration;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private RoomType roomType;
}
