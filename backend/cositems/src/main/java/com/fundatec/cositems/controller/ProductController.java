package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.model.ProductModel;
import com.fundatec.cositems.repository.ProductRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("product")
public class ProductController {
    @Autowired
    ProductRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ProductResponseDTO> getAll() {
        List<ProductResponseDTO> products = repository.findAll().stream().map(ProductResponseDTO::new).toList();
        return products;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ProductResponseDTO getById(@PathVariable("id") String id) {
        ProductResponseDTO foundProduct = new ProductResponseDTO(repository.findById(id).orElse(null));
        return foundProduct;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ProductResponseDTO createProduct(@RequestBody ProductRequestDTO data) {
        ProductModel product = new ProductModel(data);
        repository.save(product);

        ProductResponseDTO createdProduct = new ProductResponseDTO(product);
        return createdProduct;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ProductResponseDTO updateProduct(@RequestBody ProductRequestDTO data, @PathVariable("id") String id) {
        ProductModel product = repository.findById(id).orElse(null);

        product.setName(data.name());
        product.setImage(data.image());
        product.setPrice(data.price());
        product.setDescription(data.description());

        repository.save(product);

        ProductResponseDTO updatedProduct = new ProductResponseDTO(product);

        return updatedProduct;

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") String id) {
        ProductModel product = repository.findById(id).orElse(null);
        repository.delete(product);

    }

}
