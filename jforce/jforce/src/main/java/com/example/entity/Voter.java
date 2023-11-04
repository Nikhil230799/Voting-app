package com.example.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table
@Entity(name = "voter")
public class Voter{


	@Id
	@GeneratedValue
    private int id;
    private String userName;   
    private String emailID;
    private String password;
    private String phoneNo;
    private Boolean vstatus= false;
    private String VotedFor;
    public String getVotedFor() {
		return VotedFor;
	}
	public void setVotedFor(String votedFor) {
		VotedFor = votedFor;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailID() {
		return emailID;
	}
	public void setEmailID(String emailID) {
		this.emailID = emailID;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhoneNo() {
		return phoneNo;
	}
	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}
	public Boolean getVstatus() {
		return vstatus;
	}
	public void setVstatus(Boolean vstatus) {
		this.vstatus = vstatus;
	}
    
  
	


}

