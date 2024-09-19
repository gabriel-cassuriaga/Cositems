package com.fundatec.cositems.dto;

import java.math.BigDecimal;
import java.util.List;

public record ProductRequestDTO(String name, List<String> image, String description, BigDecimal price) {
    
}
