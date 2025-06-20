// Archivo: src/main/java/com/ffeportfolio/backend/model/Project.java
package com.ffeportfolio.backend.model;

import java.util.List;

public class Project {
    private String title;
    private String description;
    private String github;
    private String live;
    private List<String> tags;

    // --- Getters y Setters ---
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getGithub() { return github; }
    public void setGithub(String github) { this.github = github; }
    public String getLive() { return live; }
    public void setLive(String live) { this.live = live; }
    public List<String> getTags() { return tags; }
    public void setTags(List<String> tags) { this.tags = tags; }
}