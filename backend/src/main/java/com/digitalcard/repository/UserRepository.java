package com.digitalcard.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.digitalcard.entity.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByMobile(String mobile);

    Optional<User> findByEmail(String email);

	long countByStatus(String string);
	long countByEnabled(boolean enabled);
}

