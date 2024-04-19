package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
//@EntityScan(basePackages = {"com.example.controller."})  
public class JforceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JforceApplication.class, args);
	}

}
