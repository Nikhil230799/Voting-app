package com.example.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import javax.transaction.Transactional;
import com.example.entity.Candidate;
import com.example.entity.Voter;


@Transactional
@Repository
public interface VoterRepository extends JpaRepository<Voter, Integer> {

	
//	List<Candidate> findAll();
	
	
	 @Query(value="Select * from voter WHERE user_name=?1 AND password=?2 limit 1", nativeQuery=true)
	 Voter find(String username, String password);

	 @Modifying
	 @Query(value = "update voter set vstatus=1 where user_name=?1")
	 void updateVoterStatus(String cname );

	 
	 @Query(value ="select vstatus from voter where user_name=?1", nativeQuery=true)
	String getstatus(String username);

	 
	 @Query(value= "select * from voter where user_name=?1 limit 1", nativeQuery = true)
	Voter findByUsername(String vi);

	 
	 @Modifying
	 @Query(value = "update voter set voted_for=?1 where user_name=?2")
	void updatevotedFor(String cname , String vUsername);
	 
	 
}
