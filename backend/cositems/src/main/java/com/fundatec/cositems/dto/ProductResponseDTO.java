package com.fundatec.cositems.dto;

import java.math.BigDecimal;

import com.fundatec.cositems.model.ProductModel;

public record ProductResponseDTO(String id, String name, String image, String description, BigDecimal price) {

    public ProductResponseDTO (ProductModel product){
        this(product.getId(), product.getName(), product.getImage(), product.getDescription(), product.getPrice());
    }

}
