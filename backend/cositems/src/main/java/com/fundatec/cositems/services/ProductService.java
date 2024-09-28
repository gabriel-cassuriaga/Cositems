package com.fundatec.cositems.services;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fundatec.cositems.dto.ProductResponseDTO;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.model.ProductModel;
import com.fundatec.cositems.repository.ProductRepository;

import lombok.RequiredArgsConstructor;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;
    private final ObjectMapper objectMapper;

    public ProductResponseDTO findById(String id) throws EmptyExceptions {
        if (id.isEmpty()) {
            throw new EmptyExceptions("Id vazio");
        }

        ProductResponseDTO productReturn = objectMapper.convertValue(productRepository.findById(id), ProductResponseDTO.class);
        return productReturn;

    }

    public List<ProductResponseDTO> findBySize(String size) {
        if (size.isEmpty()) {

        }
        List<ProductModel> products = productRepository.findBySize(Size.valueOf(size.toUpperCase()));
        List<ProductResponseDTO> productToReturn = products.stream().map(returnProducts -> 
            ProductResponseDTO.builder().name(returnProducts.getName())
            .image(returnProducts.getImage())
            .id(returnProducts.getId()).price(returnProducts.getPrice()).build()).toList();
        return productToReturn;
    }

    public List<ProductResponseDTO> findByName(String name) {

        List<ProductResponseDTO> productToReturn = productRepository.findByName(name).stream().map(returnProducts -> 
        ProductResponseDTO.builder().name(returnProducts.getName())
        .image(returnProducts.getImage())
        .id(returnProducts.getId()).price(returnProducts.getPrice()).build()).toList();

        return productToReturn;
    }



}