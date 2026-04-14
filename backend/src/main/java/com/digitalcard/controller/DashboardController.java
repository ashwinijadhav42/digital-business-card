package com.digitalcard.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.repository.SampleCardRepository;
import com.digitalcard.repository.UserRepository;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SampleCardRepository sampleCardRepository;

    @GetMapping("/counts")
    public Map<String, Long> getDashboardCounts() {

        long activeUsers = userRepository.countByStatus("ACTIVE");
        long deactiveUsers = userRepository.countByStatus("INACTIVE");

        long activeVCards = sampleCardRepository.countByStatus("ACTIVE");
        long deactiveVCards = sampleCardRepository.countByStatus("INACTIVE");

        Map<String, Long> data = new HashMap<>();
        data.put("activeUsers", activeUsers);
        data.put("totalVCards", activeVCards);
        data.put("deactiveUsers", deactiveUsers);
        data.put("deactiveVCards", deactiveVCards);

        return data;
    }
}