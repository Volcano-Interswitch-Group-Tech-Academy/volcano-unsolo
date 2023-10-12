package com.interswitch.volcano.Unsolo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication @CrossOrigin(origins = "http://localhost:9060")
public class VolcanoUnsoloApplication {
    public static void main(String[] args) {
        SpringApplication.run(VolcanoUnsoloApplication.class, args);
    }
}
