
package com.digitalcard.config;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry
            .addResourceHandler("/uploads/**")
            .addResourceLocations("file:" + System.getProperty("user.dir") + "/uploads/");
        
    registry.addResourceHandler("/gallery/**")
       .addResourceLocations("file:E:/digital-business-card-main/backend/uploads/gallery/");

    registry.addResourceHandler("/services/**")
    .addResourceLocations("file:E:/digital-business-card-main/backend/uploads/services/");
    
    registry.addResourceHandler("/products/**")
    .addResourceLocations("file:E:/digital-business-card-main/backend/uploads/products/");
    
    }
}

