package com.fundatec.cositems.dto;

import java.util.List;

import java.math.BigDecimal;

import com.fundatec.cositems.model.ProductModel;
import com.fundatec.cositems.model.SizeStorage;

import lombok.Builder;

@Builder
public record ProductResponseDTO(String id, String name, List<String> image, String description, BigDecimal price,
        List<SizeStorage> storage, String anime) {

    public ProductResponseDTO(ProductModel product) {
        this(product.getId(), product.getName(), product.getImage(), product.getDescription(), product.getPrice(),
                product.getStorage(), product.getAnime());
    }

}
