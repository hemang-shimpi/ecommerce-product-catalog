package com.example.catalog.controller;

import com.example.catalog.model.*;
import com.example.catalog.repository.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getProducts(@RequestParam(required = false) String search) {
        if (search != null && !search.isEmpty()) {
            return productRepository.findByNameContainingIgnoreCase(search);
        } else {
            return productRepository.findAll();
        }
    }

}
