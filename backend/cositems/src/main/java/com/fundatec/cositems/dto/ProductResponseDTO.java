package com.fundatec.cositems.dto;

import java.util.List;

import java.math.BigDecimal;

import com.fundatec.cositems.model.ProductModel;

import lombok.Builder;

@Builder
public record ProductResponseDTO(String id, String name, List<String> image, String description, BigDecimal price) {

    public ProductResponseDTO (ProductModel product){
        this(product.getId(), product.getName(), product.getImage(), product.getDescription(), product.getPrice());
    }

}
