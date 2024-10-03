package com.fundatec.cositems.dto;

import lombok.Builder;

@Builder
public record UserRequestDTO(String username, String email, String password) {
    
}

