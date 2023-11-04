package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Candidate;
import com.example.service.CandidateService;

@CrossOrigin("*")
@RestController
@RequestMapping("/candidates")
public class CandidateController {

	@Autowired
	CandidateService Cservice;
	
	
	
	@GetMapping("/Getcandidates")
	public List<Candidate> getCandidates() {
    return Cservice.getAllCandidate();	
	}
	

	
}
