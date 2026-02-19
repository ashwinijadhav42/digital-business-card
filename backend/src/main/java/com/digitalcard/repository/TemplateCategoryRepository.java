
package com.digitalcard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitalcard.entity.TemplateCategory;

public interface TemplateCategoryRepository 
        extends JpaRepository<TemplateCategory, Long> {
	
	List<TemplateCategory> findByCategoryAndStatus(String category, Boolean status);

}
