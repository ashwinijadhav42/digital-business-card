

package com.digitalcard.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.entity.TemplateCategory;
import com.digitalcard.service.TemplateCategoryService;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = "http://localhost:5173")
public class TemplateCategoryController {

    @Autowired
    private TemplateCategoryService templateService;

    // SAVE (Admin)
    @PostMapping
    public TemplateCategory saveTemplate(
            @RequestBody TemplateCategory template) {
        return templateService.saveTemplate(template);
    }

    //  FETCH ALL
    @GetMapping
    public List<TemplateCategory> getAllTemplates() {
        return templateService.getAllTemplates();
    }

    // FETCH BY ID
    @GetMapping("/{id}")
    public TemplateCategory getTemplateById(@PathVariable Long id) {
        return templateService.getTemplateById(id);
    }

    //  UPDATE
    @PutMapping("/{id}")
    public TemplateCategory updateTemplate(
            @PathVariable Long id,
            @RequestBody TemplateCategory template) {
        return templateService.updateTemplate(id, template);
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public String deleteTemplate(@PathVariable Long id) {
        templateService.deleteTemplate(id);
        return "Template deleted successfully";
    }
}
