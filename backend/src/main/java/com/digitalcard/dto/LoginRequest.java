package com.digitalcard.dto;

public class LoginRequest {

    private String email;
    private String password;
    private	String mobile;

    public LoginRequest() {
    }

    public String getEmail() {
        return email;
    }
    
    public String getMobile() {
        return mobile;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }
    
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}