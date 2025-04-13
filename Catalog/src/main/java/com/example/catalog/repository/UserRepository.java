package com.example.catalog.repository;

import com.example.catalog.model.Product;
import com.example.catalog.model.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface UserRepository extends JpaRepository<User, Long> {
    List<Product> findByNameContainingIgnoreCase(String username);
}
