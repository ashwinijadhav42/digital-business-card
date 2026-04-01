package com.digitalcard.repository;

import com.digitalcard.entity.SampleCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SampleCardRepository extends JpaRepository<SampleCard, Long> {

    Optional<SampleCard> findBySlug(String slug);

    boolean existsBySlug(String slug);
}