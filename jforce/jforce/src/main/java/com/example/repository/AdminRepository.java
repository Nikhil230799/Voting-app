package com.example.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Admin;

@Transactional
@Repository
public interface AdminRepository  extends JpaRepository<Admin, Integer>{
	
	
	@Query(value = "Select * from Admin where username_admin= ?1 and password_admin=?2 limit 1", nativeQuery=true)
	Admin findone(String username, String password);

}
