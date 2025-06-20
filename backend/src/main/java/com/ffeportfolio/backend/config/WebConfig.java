// File: src/main/java/com/ffeportfolio/backend/config/WebConfig.java
package com.ffeportfolio.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuration class for handling Cross-Origin Resource Sharing (CORS).
 * This is necessary because the frontend (React) and backend (Java)
 * run on different ports (e.g., 3000 and 8080), and for security reasons,
 * browsers block requests between different "origins".
 * This configuration tells the backend to trust requests from the frontend.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Applies the CORS configuration to all application endpoints ("/**").
        registry.addMapping("/**")
                // Allows requests from any origin ("*"). This is fine for development.
                // In production, it's more secure to restrict it to your website's URL,
                // e.g., .allowedOrigins("https://www.your-portfolio.com")
                .allowedOrigins("*")
                // Specifies the allowed HTTP methods (GET, POST, etc.).
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                // Allows all headers to be sent in the request.
                .allowedHeaders("*");
    }
}
