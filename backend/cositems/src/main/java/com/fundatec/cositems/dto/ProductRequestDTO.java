package com.fundatec.cositems.dto;

import java.math.BigDecimal;
import java.util.List;

import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.model.SizeStorage;

import lombok.Builder;


@Builder
public record ProductRequestDTO(String name, List<String> image, String description, BigDecimal price, Size size, String anime, List<SizeStorage> storage) {
    
}
