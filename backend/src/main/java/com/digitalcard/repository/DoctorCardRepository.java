package com.digitalcard.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.digitalcard.entity.DoctorCard;

public interface DoctorCardRepository extends JpaRepository<DoctorCard, String> {

    Optional<DoctorCard> findBySlug(String slug);
}
