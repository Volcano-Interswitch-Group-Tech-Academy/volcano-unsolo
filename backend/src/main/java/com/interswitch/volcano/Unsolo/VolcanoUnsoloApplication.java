package com.interswitch.volcano.Unsolo;

import com.interswitch.volcano.Unsolo.configurations.jwt_config.RSAKeyProperties;
import com.interswitch.volcano.Unsolo.enums.ApprovalStatus;
import com.interswitch.volcano.Unsolo.enums.Gender;
import com.interswitch.volcano.Unsolo.enums.Role;
import com.interswitch.volcano.Unsolo.enums.RoomType;
import com.interswitch.volcano.Unsolo.model.CreateYourTrip;
import com.interswitch.volcano.Unsolo.model.Person;
import com.interswitch.volcano.Unsolo.model.SuperAdmin;
import com.interswitch.volcano.Unsolo.model.User;
import com.interswitch.volcano.Unsolo.repository.AdminRepository;
import com.interswitch.volcano.Unsolo.repository.CreateYourTripRepo;
import com.interswitch.volcano.Unsolo.repository.UserRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.List;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3000")
public class VolcanoUnsoloApplication {
    public static void main(String[] args) {


        ApplicationContext context =   SpringApplication.run(VolcanoUnsoloApplication.class, args);
        PasswordEncoder passwordEncoder = context.getBean(PasswordEncoder.class);


        User person = new User();
        person.setId(1L);
        person.setFirstName("John");
        person.setLastName("Doe");
        person.setEmail("johndoe@example.com");
        person.setPhoneNumber("1234567890");
        person.setGender(Gender.MALE);
        person.setUserName("johndoe123");
        person.setPassword(passwordEncoder.encode("password123"));
        person.setRole(Role.USER);
        person.setActive(true);
        UserRepository adminRepository = context.getBean(UserRepository.class);

        adminRepository.save(person);
        // Obtain a reference to the CreateYourTripRepository
//        CreateYourTripRepo createYourTripRepository = context.getBean(CreateYourTripRepo.class);
//
//        // Create three CreateYourTrip objects with dummy values
//        CreateYourTrip trip1 = CreateYourTrip.builder()
//                .country("Country1")
//                .city("City1")
//                .destinationName("Destination1")
//                .tripDescription("Description1")
//                .maxNoOfPersons(2)
//                .startDate("2023-09-15")
//                .endDate("2023-09-20")
//                .duration("5 days")
//                .roomType(RoomType.ONE_PER_ROOM)
//                .userId(1L)
//                .approvalStatus(ApprovalStatus.APPROVED)
//                .build();
//
//        CreateYourTrip trip2 = CreateYourTrip.builder()
//                .country("Country2")
//                .city("City2")
//                .destinationName("Destination2")
//                .tripDescription("Description2")
//                .maxNoOfPersons(4)
//                .startDate("2023-10-10")
//                .endDate("2023-10-15")
//                .duration("5 days")
//                .roomType(RoomType.TWO_PER_ROOM)
//                .userId(2L)
//                .approvalStatus(ApprovalStatus.PENDING)
//                .build();
//
//        CreateYourTrip trip3 = CreateYourTrip.builder()
//                .country("Country3")
//                .city("City3")
//                .destinationName("Destination3")
//                .tripDescription("Description3")
//                .maxNoOfPersons(3)
//                .startDate("2023-11-05")
//                .endDate("2023-11-10")
//                .duration("5 days")
//                .roomType(RoomType.ONE_PER_ROOM)
//                .userId(3L)
//                .approvalStatus(ApprovalStatus.PENDING)
//                .build();
//
//        // Save the trips into the repository
//        createYourTripRepository.saveAll(List.of(trip1, trip2, trip3));

    }
}
