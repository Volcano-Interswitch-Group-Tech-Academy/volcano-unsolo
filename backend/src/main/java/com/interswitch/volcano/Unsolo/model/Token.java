package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.TokenStatus;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "token_tbl")
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tokenId")
    private Long id;
    @Column(length = 500)
    private String token;
    @Enumerated(EnumType.STRING)
    private TokenStatus tokenStatus;
    private Long userId;
}
