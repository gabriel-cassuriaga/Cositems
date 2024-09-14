package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.repository.UserRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("user")
public class UserController {
    @Autowired
    UserRepository repository;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<UserResponseDTO> getAll() {
        List<UserResponseDTO> users = repository.findAll().stream().map(UserResponseDTO::new).toList();
        return users;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public UserResponseDTO getById(@PathVariable("id") String id) {
        UserResponseDTO foundUser = new UserResponseDTO(repository.findById(id).orElse(null));
        return foundUser;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public UserResponseDTO createUser(@RequestBody UserRequestDTO data) {
        UserModel user = new UserModel(data);
        repository.save(user);

        UserResponseDTO createdUser = new UserResponseDTO(user);
        return createdUser;
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public UserResponseDTO updateUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id) {
        UserModel user = repository.findById(id).orElse(null);

        user.setUsername(data.username());
        user.setPassword(data.password());

        repository.save(user);
        UserResponseDTO upadtedUser = new UserResponseDTO(user);

        return upadtedUser;

    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable("id") String id) {
        UserModel user = repository.findById(id).orElse(null);
        repository.delete(user);

    }
}
