package com.digitalcard.repository;

import com.digitalcard.entity.CorporateCard;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CorporateCardRepository extends JpaRepository<CorporateCard, Long> {

    Optional<CorporateCard> findBySlug(String slug);
}