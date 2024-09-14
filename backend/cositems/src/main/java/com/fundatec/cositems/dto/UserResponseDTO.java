package com.fundatec.cositems.dto;
import com.fundatec.cositems.model.UserModel;

public record UserResponseDTO(String id, String username, String email) {

    public UserResponseDTO (UserModel user){
        this(user.getId(), user.getUsername(), user.getEmail());
    }
}
