// Archivo: src/main/java/com/ffeperfolio/backend/service/PortfolioService.java
package com.ffeportfolio.backend.service;

import com.ffeportfolio.backend.model.*;
import org.springframework.stereotype.Service;
import java.util.Arrays;

/**
 * La capa de servicio contiene la "lógica de negocio".
 * En este caso, su única responsabilidad es crear y devolver
 * el objeto con todos los datos del portafolio.
 */
@Service // Marca esta clase como un componente de servicio de Spring.
public class PortfolioService {

    /**
     * Construye y devuelve el objeto PortfolioData con toda la información.
     * Más adelante, este método podría obtener los datos de una base de datos.
     * @return El objeto PortfolioData completo.
     */
    public PortfolioData getPortfolioData() {
        PortfolioData data = new PortfolioData();

        // Información General
        data.setName("Francisco Flores Enríquez");
        data.setTitle("Computer Systems Engineering");

        // Información de Contacto
        Contact contact = new Contact();
        contact.setPhone("312-193-8334");
        contact.setEmail("franciscofloresenriquez2001@gmail.com");
        contact.setLinkedin("https://www.linkedin.com/in/francisco-flores-89230b25b/");
        contact.setGithub("https://github.com/franciscofloresen");
        contact.setPortfolio("https://mi-flask-portfolio.azurewebsites.net/");
        data.setContact(contact);

        // Perfil Profesional
        data.setProfile("Dynamic and innovative software developer with over a year of hands-on experience. Passionate about learning and adapting to new technologies, I combine meticulous attention to detail with a creative mindset to deliver efficient and scalable solutions. Eager to contribute to innovative projects and further expand my technical expertise.");

        // Habilidades
        Skills skills = new Skills();

        TechnicalSkill ts1 = new TechnicalSkill();
        ts1.setCategory("Languages");
        ts1.setList("Python, Java, C, HTML, CSS, JavaScript, React, Flask");

        TechnicalSkill ts2 = new TechnicalSkill();
        ts2.setCategory("Development");
        ts2.setList("Front-end (React) & Back-end (Python, Flask, Node.js)");

        TechnicalSkill ts3 = new TechnicalSkill();
        ts3.setCategory("Databases");
        ts3.setList("MongoDB, Neo4j (Graph Database)");

        TechnicalSkill ts4 = new TechnicalSkill();
        ts4.setCategory("Cloud & OS");
        ts4.setList("AWS, Azure, Oracle Cloud, MacOS, Linux, Windows Server");

        TechnicalSkill ts5 = new TechnicalSkill();
        ts5.setCategory("Tools & V. Control");
        ts5.setList("Git, GitHub, VMware, VirtualBox");

        skills.setTechnical(Arrays.asList(ts1, ts2, ts3, ts4, ts5));

        SoftSkill ss1 = new SoftSkill();
        ss1.setSkill("Analytical Thinking");
        SoftSkill ss2 = new SoftSkill();
        ss2.setSkill("Effective Communication");
        SoftSkill ss3 = new SoftSkill();
        ss3.setSkill("Continuous Learning");
        SoftSkill ss4 = new SoftSkill();
        ss4.setSkill("Project Management");

        skills.setSoft(Arrays.asList(ss1, ss2, ss3, ss4));
        data.setSkills(skills);

        // Educación
        Education education = new Education();
        education.setInstitution("Instituto Tecnológico De Estudios Superiores De Occidente (ITESO)");
        education.setDegree("Computer Systems Engineering");
        education.setLocation("Tlaquepaque, Jalisco");
        education.setDuration("2020 - Expected 2025");
        data.setEducation(education);

        // Proyectos
        Project p1 = new Project();
        p1.setTitle("Snake Game in C and Ripes");
        p1.setDescription("A classic Snake game implementation using C, designed to run on the Ripes RISC-V simulator.");
        p1.setGithub("https://github.com/franciscofloresen/Ripes-Snake-Game-in-C");
        p1.setTags(Arrays.asList("C", "RISC-V", "Ripes"));

        Project p2 = new Project();
        p2.setTitle("Medical Professional Portfolio");
        p2.setDescription("A responsive website for a surgeon, with a custom chatbot for patient interaction. A freelance project.");
        p2.setLive("https://www.cirujanolaparoscopiacolima.com/");
        p2.setTags(Arrays.asList("React", "Python", "Flask", "Freelance"));

        Project p3 = new Project();
        p3.setTitle("Personal Portfolio (Web)");
        p3.setDescription("A dynamic web portfolio showcasing projects and skills, developed with Python/Flask and deployed on Azure.");
        p3.setGithub("https://github.com/franciscofloresen/personalPortfolioFFE");
        p3.setLive("https://mi-flask-portfolio.azurewebsites.net/");
        p3.setTags(Arrays.asList("Python", "Flask", "Azure", "HTML"));

        data.setProjects(Arrays.asList(p1, p2, p3));

        // Certificaciones
        Certification c1 = new Certification();
        c1.setName("Cypher Fundamentals");
        c1.setIssuer("Neo4j");
        c1.setDate("Apr 2025");

        Certification c2 = new Certification();
        c2.setName("Neo4j Fundamentals");
        c2.setIssuer("Neo4j");
        c2.setDate("Mar 2025");

        Certification c3 = new Certification();
        c3.setName("Cisco Python Essentials 1");
        c3.setIssuer("Cisco Networking Academy");
        c3.setDate("Dec 2022");

        data.setCertifications(Arrays.asList(c1, c2, c3));

        return data;
    }
}