// Archivo: src/main/java/com/ffeportfolio/backend/model/Skills.java
package com.ffeportfolio.backend.model;

import java.util.List;

public class Skills {
    private List<com.ffeportfolio.backend.model.TechnicalSkill> technical;
    private List<com.ffeportfolio.backend.model.SoftSkill> soft;

    // --- Getters y Setters ---
    public List<com.ffeportfolio.backend.model.TechnicalSkill> getTechnical() { return technical; }
    public void setTechnical(List<com.ffeportfolio.backend.model.TechnicalSkill> technical) { this.technical = technical; }
    public List<com.ffeportfolio.backend.model.SoftSkill> getSoft() { return soft; }
    public void setSoft(List<com.ffeportfolio.backend.model.SoftSkill> soft) { this.soft = soft; }
}