package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.exceptions.AlreadyExistException;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.repository.UserRepository;
import com.fundatec.cositems.services.UserService;

import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;

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

@RequiredArgsConstructor
@RestController
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public List<UserResponseDTO> getAll() throws NotFoundException {
        return userService.findAllUsers();
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public UserResponseDTO getById(@PathVariable("id") String id) throws EmptyExceptions, NotFoundException {
        return userService.findByUserById(id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public UserResponseDTO createUser(@RequestBody UserRequestDTO data) throws AlreadyExistException, EmptyExceptions {
        return userService.createUser(data);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public UserResponseDTO updateUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id) throws NotFoundException {
        return userService.updateUser(data, id);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public void deleteUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id) throws AuthException, NotFoundException {
        userService.deleteUser(data, id);
    }
}
