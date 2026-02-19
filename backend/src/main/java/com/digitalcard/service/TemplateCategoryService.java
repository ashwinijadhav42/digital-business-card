
package com.digitalcard.service;

import java.util.List;
import com.digitalcard.entity.TemplateCategory;

public interface TemplateCategoryService {

    // SAVE
    TemplateCategory saveTemplate(TemplateCategory template);

    // FETCH ALL
    List<TemplateCategory> getAllTemplates();
    
    //fetch by active
    List<TemplateCategory> findByActiveTrue();

    // FETCH BY ID
    TemplateCategory getTemplateById(Long id);

    // UPDATE
    TemplateCategory updateTemplate(Long id, TemplateCategory template);

    // DELETE
    void deleteTemplate(Long id);

	
}
