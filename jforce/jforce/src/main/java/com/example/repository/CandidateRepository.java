package com.example.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Candidate;


@Transactional
@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {

	
	List<Candidate> findAll();
	
	
	 @Query(value = "select *  from candidate where cid=?1", nativeQuery=true)
	Candidate findById(int cid);


	 @Modifying
	 @Query(value ="update candidate set votes=?1 where cid=?2", nativeQuery = true)
	void changeVote(int votes, int id);

//	 @Query(value = "select * from candidate where cid")
//	Candidate getCandidateName(int cid);
}
