// Archivo: src/main/java/com/ffeportfolio/backend/model/Education.java
package com.ffeportfolio.backend.model;

public class Education {
    private String institution;
    private String degree;
    private String location;
    private String duration;

    // --- Getters y Setters ---
    public String getInstitution() { return institution; }
    public void setInstitution(String institution) { this.institution = institution; }
    public String getDegree() { return degree; }
    public void setDegree(String degree) { this.degree = degree; }
    public String getLocation() { return location; }
    public void setLocation(String location) { this.location = location; }
    public String getDuration() { return duration; }
    public void setDuration(String duration) { this.duration = duration; }
}