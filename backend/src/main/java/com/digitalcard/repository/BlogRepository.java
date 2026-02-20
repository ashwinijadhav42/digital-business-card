package com.digitalcard.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.digitalcard.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByStatusTrueOrderByPublishDateDesc();
}
