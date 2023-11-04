package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Admin;
import com.example.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

	@Autowired
	AdminService adminService;

	@PostMapping("/admin_dtls")
	public ResponseEntity getAdmin(@RequestBody Admin admin) {
		Admin adminDtls = adminService.getAdminDtls(admin);
		System.out.println(adminDtls);
		if (adminDtls != null) {
//			if (admin.getUsernameAdmin() == adminDtls.getUsernameAdmin()
//					&& admin.getPasswordAdmin() == adminDtls.getPasswordAdmin()) {
				return new ResponseEntity<String>("Details are correct ", HttpStatus.FOUND);
//			} else {
//				return new ResponseEntity<String>("Details are incorrect", HttpStatus.NOT_FOUND);
//			}
		}
		return new ResponseEntity<String>("invalid details ", HttpStatus.BAD_REQUEST);

	}
}
