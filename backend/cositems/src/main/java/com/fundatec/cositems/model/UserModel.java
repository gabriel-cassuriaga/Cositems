package com.fundatec.cositems.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fundatec.cositems.dto.UserRequestDTO;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of = "id")
@Document(collection = "users")
public class UserModel {
    @Id
    private String id;
    private String email;
    private String username;
    private String password;

    public UserModel(UserRequestDTO data) {
        this.username = data.username();
        this.email = data.email();
        this.password = data.password();
    }
}
