package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.services.ProductService;
import java.math.BigDecimal;
import lombok.RequiredArgsConstructor;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequiredArgsConstructor
@RequestMapping("products")
public class ProductController {

    private final ProductService productService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ProductResponseDTO createProduct(@RequestBody ProductRequestDTO data) throws EmptyExceptions {
        return productService.createProduct(data);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<ProductResponseDTO> getAll() {
        List<ProductResponseDTO> products = productService.findAll().stream().map(ProductResponseDTO::new).toList();
        return products;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ProductResponseDTO getById(@PathVariable("id") String id) throws EmptyExceptions {
        return productService.findById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/name/{name}")
    public List<ProductResponseDTO> findByName(@PathVariable("name") String name) {
        return productService.findByName(name);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/size/{size}")
    public List<ProductResponseDTO> findBySize(@PathVariable("size") String size) throws EmptyExceptions {
        return productService.findBySize(size);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/price/{price}")
    public List<ProductResponseDTO> findByPrice(@PathVariable("price") BigDecimal price) {
        return productService.findByPrice(price);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ProductResponseDTO updateProduct(@RequestBody ProductRequestDTO data, @PathVariable("id") String id)
            throws Exception {
        return productService.updateProduct(data, id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable("id") String id) throws NotFoundException {
        productService.deleteProduct(id);
    }

}
