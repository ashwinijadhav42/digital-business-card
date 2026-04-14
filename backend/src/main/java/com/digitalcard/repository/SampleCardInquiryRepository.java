package com.digitalcard.repository;

import com.digitalcard.entity.SampleCardInquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SampleCardInquiryRepository extends JpaRepository<SampleCardInquiry, Long> {

	@Query("SELECT COUNT(i) FROM SampleCardInquiry i WHERE i.sampleCard.userId = :userId")
	long countByUserId(Long userId);

	@Query("SELECT i FROM SampleCardInquiry i WHERE i.sampleCard.userId = :userId")
	List<SampleCardInquiry> findByUserId(Long userId);

	List<SampleCardInquiry> findBySampleCardId(Long cardId);
}