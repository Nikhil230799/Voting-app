package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Admin;
import com.example.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository Adminrepo;

	public Admin getAdminDtls(Admin admin)
	{
		return Adminrepo.findone(admin.getUsernameAdmin(), admin.getPasswordAdmin());
	}
	
	
}
