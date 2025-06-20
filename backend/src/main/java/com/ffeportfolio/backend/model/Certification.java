// Archivo: src/main/java/com/ffeportfolio/backend/model/Certification.java
package com.ffeportfolio.backend.model;

public class Certification {
    private String name;
    private String issuer;
    private String date;

    // --- Getters y Setters ---
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getIssuer() { return issuer; }
    public void setIssuer(String issuer) { this.issuer = issuer; }
    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }
}
