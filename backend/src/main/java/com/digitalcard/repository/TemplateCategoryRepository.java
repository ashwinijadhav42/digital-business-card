
package com.digitalcard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.digitalcard.entity.TemplateCategory;

public interface TemplateCategoryRepository 
        extends JpaRepository<TemplateCategory, Long> {
}
