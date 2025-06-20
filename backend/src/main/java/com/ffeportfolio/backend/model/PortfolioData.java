// Archivo: src/main/java/com/ffeportfolio/backend/model/PortfolioData.java
package com.ffeportfolio.backend.model;

import java.util.List;

public class PortfolioData {
    private String name;
    private String title;
    private Contact contact;
    private String profile;
    private Skills skills;
    private Education education;
    private List<Project> projects;
    private List<Certification> certifications;

    // --- Getters y Setters ---
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public Contact getContact() { return contact; }
    public void setContact(Contact contact) { this.contact = contact; }
    public String getProfile() { return profile; }
    public void setProfile(String profile) { this.profile = profile; }
    public Skills getSkills() { return skills; }
    public void setSkills(Skills skills) { this.skills = skills; }
    public Education getEducation() { return education; }
    public void setEducation(Education education) { this.education = education; }
    public List<Project> getProjects() { return projects; }
    public void setProjects(List<Project> projects) { this.projects = projects; }
    public List<Certification> getCertifications() { return certifications; }
    public void setCertifications(List<Certification> certifications) { this.certifications = certifications; }
}