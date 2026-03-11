package com.digitalcard.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.digitalcard.entity.FreelancerCard;

@Repository
public interface FreelancerCardRepository 
        extends JpaRepository<FreelancerCard, Long> {

    Optional<FreelancerCard> findBySlug(String slug);
}