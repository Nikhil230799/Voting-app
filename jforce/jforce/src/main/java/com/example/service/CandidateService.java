package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Candidate;
import com.example.repository.CandidateRepository;

@Service
public class CandidateService {

	@Autowired
	CandidateRepository candidateRepo;
	
	public List<Candidate> getAllCandidate()
	{
		return candidateRepo.findAll();
	}

	public Candidate updateVotes(int cid) {
		Candidate candidate= candidateRepo.findById(cid);
		candidate.setVotes(candidate.getVotes()+1);
		candidateRepo.changeVote(candidate.getVotes(), candidate.getCid());
		return candidateRepo.findById(cid);
		
		
	}
	
}
