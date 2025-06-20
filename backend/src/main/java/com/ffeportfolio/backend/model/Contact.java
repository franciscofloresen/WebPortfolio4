// Archivo: src/main/java/com/ffeportfolio/backend/model/Contact.java
package com.ffeportfolio.backend.model;

public class Contact {
    private String phone;
    private String email;
    private String linkedin;
    private String github;
    private String portfolio;

    // --- Getters y Setters ---
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getLinkedin() { return linkedin; }
    public void setLinkedin(String linkedin) { this.linkedin = linkedin; }
    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }
    public String getPortfolio() { return portfolio; }
    public void setPortfolio(String portfolio) { this.portfolio = portfolio; }
}