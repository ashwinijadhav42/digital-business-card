package com.digitalcard.repository;

import com.digitalcard.entity.RealEstateCard;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface RealEstateCardRepository 
        extends JpaRepository<RealEstateCard, Long> {

    Optional<RealEstateCard> findBySlug(String slug);
}