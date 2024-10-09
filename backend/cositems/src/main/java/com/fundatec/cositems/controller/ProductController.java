package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.ProductRequestDTO;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.services.ProductService;
import java.math.BigDecimal;
import lombok.RequiredArgsConstructor;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequiredArgsConstructor
@RequestMapping("products")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<ProductResponseDTO> createProduct(@RequestBody ProductRequestDTO data)
            throws EmptyExceptions {
        return new ResponseEntity<>(productService.createProduct(data), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ProductResponseDTO>> getAll() {
        List<ProductResponseDTO> products = productService.findAll().stream().map(ProductResponseDTO::new).toList();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> getById(@PathVariable("id") String id) throws EmptyExceptions {
        ProductResponseDTO product = productService.findById(id);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<List<ProductResponseDTO>> findByCriteria(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) Size size,
            @RequestParam(required = false) BigDecimal price) {
        List<ProductResponseDTO> products = productService.findByCriteria(name, size, price);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProductResponseDTO> updateProduct(@RequestBody ProductRequestDTO data,
            @PathVariable("id") String id)
            throws Exception {
        return new ResponseEntity<>(productService.updateProduct(data, id), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable("id") String id) throws NotFoundException {
        productService.deleteProduct(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
