
package com.digitalcard.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.digitalcard.entity.TemplateCategory;
import com.digitalcard.repository.TemplateCategoryRepository;
import com.digitalcard.service.TemplateCategoryService;

@Service
public class TemplateCategoryServiceImpl implements TemplateCategoryService {

    @Autowired
    private TemplateCategoryRepository repository;

    // SAVE
    @Override
    public TemplateCategory saveTemplate(TemplateCategory template) {
        return repository.save(template);
    }

    // FETCH ALL
    @Override
    public List<TemplateCategory> getAllTemplates() {
        return repository.findAll();
    }

    // FETCH BY ID
    @Override
    public TemplateCategory getTemplateById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Template not found with id " + id));
    }
    
    //Fetch by category and status
    public List<TemplateCategory> getTemplatesByCategory(String category) {
        return repository.findByCategoryAndStatus(category, true);
    }



    // UPDATE
    @Override
    public TemplateCategory updateTemplate(Long id, TemplateCategory template) {

        TemplateCategory existing = getTemplateById(id);

        existing.setTitle(template.getTitle());
        existing.setDescription(template.getDescription());
        existing.setImageUrl(template.getImageUrl());
        existing.setCategory(template.getCategory());
        existing.setStatus(template.getStatus());

        return repository.save(existing);
    }

    // DELETE
    @Override
    public void deleteTemplate(Long id) {
        repository.deleteById(id);
    }
}
