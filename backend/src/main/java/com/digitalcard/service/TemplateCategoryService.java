
package com.digitalcard.service;

import java.util.List;
import com.digitalcard.entity.TemplateCategory;

public interface TemplateCategoryService {

    // SAVE
    TemplateCategory saveTemplate(TemplateCategory template);

    // FETCH ALL
    List<TemplateCategory> getAllTemplates();

    // FETCH BY ID
    TemplateCategory getTemplateById(Long id);
    
     List<TemplateCategory> getTemplatesByCategory(String category) ;
    


    // UPDATE
    TemplateCategory updateTemplate(Long id, TemplateCategory template);

    // DELETE
    void deleteTemplate(Long id);
}
