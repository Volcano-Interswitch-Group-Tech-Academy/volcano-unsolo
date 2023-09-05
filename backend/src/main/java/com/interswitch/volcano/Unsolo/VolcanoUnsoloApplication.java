package com.interswitch.volcano.Unsolo;

import com.interswitch.volcano.Unsolo.configurations.jwt_config.RSAKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.web.bind.annotation.CrossOrigin;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@EnableConfigurationProperties(RSAKeyProperties.class)
@EnableSwagger2
@CrossOrigin(origins = "http://localhost:3000")
public class VolcanoUnsoloApplication {
    public static void main(String[] args) {
        SpringApplication.run(VolcanoUnsoloApplication.class, args);
    }
}
