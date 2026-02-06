package com.digitalcard.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")

public class HomeController {
    @GetMapping("/home")
    public String health() {
        return "Backend Home API is working as expected from given document";
    }
}