package com.digitalcard.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.digitalcard.entity.Feature;

public interface FeatureRepository extends JpaRepository<Feature, Long> {

    // ✅ Add this method
    List<Feature> findByActiveTrue();

}
