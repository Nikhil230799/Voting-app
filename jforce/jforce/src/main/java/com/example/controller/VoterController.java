package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Candidate;
import com.example.entity.CustomeridVotarusername;
import com.example.entity.Voter;
import com.example.entity.testVoter;
import com.example.service.CandidateService;
import com.example.service.VoterService;

@CrossOrigin("*")
@RestController
@RequestMapping("/voter")
public class VoterController {

	@Autowired
	VoterService vService;

	@Autowired 
	CandidateService cService;
	
	@PostMapping("/register")
	public ResponseEntity<?> voterRegister(@RequestBody Voter voterInfo)
	{
//		voterInfo.setVstatus("false");
	Voter voter=vService.registerVoter(voterInfo);
	if(voter!=null)
		return new ResponseEntity<Voter>(voterInfo, HttpStatus.ACCEPTED);
	else 
		return new ResponseEntity<String>("", HttpStatus.NO_CONTENT);
	}
	
	@PostMapping("/login")
	public ResponseEntity voterLogin(@RequestBody testVoter voterInfo )
	{
		Voter info=vService.login(voterInfo.getUsername() , voterInfo.getPassword());
		System.out.println(info);
		
		if (info!= null)
		return new ResponseEntity<Voter>(info, HttpStatus.FOUND);
		else
		return new ResponseEntity<String>("", HttpStatus.NOT_FOUND);
//		return vService.registerVoter(voterInfo);
		
	}
	
	@PostMapping("/voted")
	public ResponseEntity voteupdates(@RequestBody CustomeridVotarusername cidvi) {
//		CustomeridVotarusername newcdvi=cidvi;
		Candidate candidate= cService.updateVotes(cidvi.getCid());
		vService.updateStatus(cidvi.getvUserName(), candidate.getcName());
		return new ResponseEntity<String>("votes updates", HttpStatus.OK);
//		return new ResponseEntity<String>(null)
	}
	
	@GetMapping("/getstatus/{username}")
	@ResponseBody
	public ResponseEntity<String> getstatus(@PathVariable String username) {
		System.out.println(vService.getstatus(username));
//	return	vService.getstatus(username);
	return new ResponseEntity<String>(vService.getstatus(username),HttpStatus.OK);
	
		
	}
	
	
	@GetMapping
	public void getVotedFor()
	{
		
	}
	
	
	
	
}
