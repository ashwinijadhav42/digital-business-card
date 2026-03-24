package com.digitalcard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.digitalcard.entity.User;
import com.digitalcard.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // ✅ SIGNUP (Create User)
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {

        Optional<User> existing = userRepository.findByMobile(user.getMobile());
        if (existing.isPresent()) {
            return ResponseEntity.badRequest().body("Mobile number already registered");
        }

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }

    // ✅ LOGIN
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginRequest) {

        Optional<User> userOpt = userRepository.findByMobile(loginRequest.getMobile());

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        User user = userOpt.get();

        if (!user.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.badRequest().body("Invalid password");
        }

        return ResponseEntity.ok(user);
    }

    // ✅ GET ALL USERS
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    // ✅ GET USER BY ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {

        Optional<User> userOpt = userRepository.findById(id);

        if (userOpt.isPresent()) {
            return ResponseEntity.ok(userOpt.get()); // User
        } else {
            return ResponseEntity.badRequest().body("User not found"); // String
        }
    }

    // ✅ UPDATE USER
    @PutMapping("/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {

        Optional<User> userOpt = userRepository.findById(id);

        if (userOpt.isEmpty()) {
            return ResponseEntity.badRequest().body("User not found");
        }

        User user = userOpt.get();

        user.setFullName(updatedUser.getFullName());
        user.setEmail(updatedUser.getEmail());
        user.setMobile(updatedUser.getMobile());

        // update password only if provided
        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            user.setPassword(updatedUser.getPassword());
        }

        userRepository.save(user);

        return ResponseEntity.ok(user);
    }

    // ✅ DELETE USER
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {

        if (!userRepository.existsById(id)) {
            return ResponseEntity.badRequest().body("User not found");
        }

        userRepository.deleteById(id);

        return ResponseEntity.ok("User deleted successfully");
    }
}