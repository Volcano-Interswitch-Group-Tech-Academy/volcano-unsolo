package com.interswitch.volcano.Unsolo.model;


import com.interswitch.volcano.Unsolo.enums.Gender;
import com.interswitch.volcano.Unsolo.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Date;


@ToString
@MappedSuperclass
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public abstract class Person  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(nullable = false, length = 50)
    @NotNull(message = "First name cannot be missing or empty")
    private String firstName;

    @NotNull(message = "Last name name cannot be missing or empty")
    @Column(nullable = false, length = 50)
    private String lastName;

    @Email
    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false, length = 11, unique = true)
    @NotNull(message = "Phone number cannot be missing")
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Gender gender;

    @Column(length = 50)
    private String userName;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "dateCreated")
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="lastUpdated")
    private Date updatedAt;

    @PrePersist
    public void createdAt(){

        this.createdAt = new Date();
    }

    @PreUpdate
    public void updatedAt(){

        this.updatedAt = new Date();
    }

}
