package com.digitalcard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitalcard.entity.Template;

public interface TemplateRepository extends JpaRepository<Template, Long> {
    List<Template> findByStatusTrue();
}
