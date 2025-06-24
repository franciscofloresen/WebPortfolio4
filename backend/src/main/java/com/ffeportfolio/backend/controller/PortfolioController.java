// Archivo: src/main/java/com/ffeportfolio/backend/controller/PortfolioController.java
package com.ffeportfolio.backend.controller;

import com.ffeportfolio.backend.model.PortfolioData;
import com.ffeportfolio.backend.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Este es el controlador REST.
 * Define los endpoints (URLs) del API que el frontend puede llamar.lol
 */
@RestController // Marca esta clase como un controlador que maneja peticiones REST.
@RequestMapping("/api/portfolio") // Define la URL base para todos los endpoints en esta clase.
public class PortfolioController {

    // Inyecta una instancia del PortfolioService. Spring se encarga de crearla.
    private final PortfolioService portfolioService;

    @Autowired
    public PortfolioController(PortfolioService portfolioService) {
        this.portfolioService = portfolioService;
    }

    /**
     * Maneja las peticiones GET a la URL "/api/portfolio".
     * Cuando el frontend haga una petición a esta URL, este método se ejecutará.
     * @return Un objeto PortfolioData que Spring convertirá automáticamente a JSON.
     */
    @GetMapping
    public PortfolioData getPortfolioData() {
        // Llama al servicio para obtener los datos y los devuelve.
        return portfolioService.getPortfolioData();
    }
}
