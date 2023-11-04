package com.example.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name=" Admin")
public class Admin {

	@Id
	@GeneratedValue
    private int Id;
    private String usernameAdmin;
    private String passwordAdmin;
    
    
    public int getId() {
        return Id;
    }
    public void setId(int id) {
        Id = id;
    }
    public String getUsernameAdmin() {
        return usernameAdmin;
    }
    public void setUsernameAdmin(String usernameAdmin) {
        this.usernameAdmin = usernameAdmin;
    }
    public String getPasswordAdmin() {
        return passwordAdmin;
    }
    public void setPasswordAdmin(String passwordAdmin) {
        this.passwordAdmin = passwordAdmin;
    }
}
