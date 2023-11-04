package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Candidate;
import com.example.entity.Voter;
import com.example.repository.VoterRepository;



@Service
public class VoterService {
	
	@Autowired
VoterRepository voterRepo;


	
	
	public Voter registerVoter(Voter voterInfo) {
		return voterRepo.save(voterInfo);	
	}
	

	public Voter login(String voterUsername , String password) {
		return voterRepo.find(voterUsername, password);	
	}
	
	
	
	
	public void updateStatus(String vi, String cname) {
//		 voterRepo.findByUsername(vi);
		voterRepo.updateVoterStatus(vi);
		voterRepo.updatevotedFor(cname, vi);
		
	}
	
	
	public String getstatus(String username) {
	return	voterRepo.getstatus(username);
	}

	
	
	
	
	
}
