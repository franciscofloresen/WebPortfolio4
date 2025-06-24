// Archivo: src/main/java/com/ffeperfolio/backend/config/WebConfig.java
package com.ffeperfolio.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**") // Aplica solo a los endpoints del API
                        .allowedOrigins("*") // Permite cualquier origen
                        .allowedMethods("GET", "HEAD", "OPTIONS") // Solo permite los métodos necesarios
                        .allowedHeaders("*");
            }
        };
    }
}
