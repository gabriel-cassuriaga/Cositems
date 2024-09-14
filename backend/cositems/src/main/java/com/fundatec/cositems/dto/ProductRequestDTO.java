package com.fundatec.cositems.dto;

import java.math.BigDecimal;

public record ProductRequestDTO(String name, String image, String description, BigDecimal price) {
    
}
