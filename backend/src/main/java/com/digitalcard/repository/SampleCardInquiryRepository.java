package com.digitalcard.repository;

import com.digitalcard.entity.SampleCardInquiry;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SampleCardInquiryRepository extends JpaRepository<SampleCardInquiry, Long> {

    List<SampleCardInquiry> findBySampleCardId(Long sampleCardId);
}