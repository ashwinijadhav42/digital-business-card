package com.digitalcard.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin
public class RazorpayController {

    private static final String KEY_ID = "rzp_test_Sbh1YyXMJxqIMt";
    private static final String KEY_SECRET = "UfWsNfccbbewiXkDhIrh00ls";

    // ================= CREATE ORDER =================
    @PostMapping("/create-order")
    public ResponseEntity<?> createOrder(@RequestBody Map<String, Object> data) {
        try {
            int amount = Integer.parseInt(data.get("amount").toString());

            RazorpayClient client = new RazorpayClient(KEY_ID, KEY_SECRET);

            JSONObject options = new JSONObject();
            options.put("amount", amount * 100);
            options.put("currency", "INR");
            options.put("receipt", "txn_" + System.currentTimeMillis());

            Order order = client.orders.create(options);

            return ResponseEntity.ok(order.toString());

        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error creating order");
        }
    }

    // ================= VERIFY PAYMENT =================
    @PostMapping("/verify")
    public ResponseEntity<?> verifyPayment(@RequestBody Map<String, String> data) {

        String slug = data.get("slug");

        // 👉 TODO: Update DB (IMPORTANT)
        // Example:
        // Card card = cardRepository.findBySlug(slug);
        // card.setPaid(true);
        // cardRepository.save(card);

        return ResponseEntity.ok("Payment Verified & Saved");
    }
}