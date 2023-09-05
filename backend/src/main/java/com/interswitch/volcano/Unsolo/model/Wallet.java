package com.interswitch.volcano.Unsolo.model;

import com.interswitch.volcano.Unsolo.enums.BaseCurrency;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "wallet")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "walletId")
    private Long walletId;

    private double accountBalance;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private BaseCurrency baseCurrency;
}
