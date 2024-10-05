package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.exceptions.AlreadyExistException;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.services.UserService;

import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    @GetMapping("/getAll")
    public ResponseEntity<List<UserResponseDTO>> getAll() throws NotFoundException {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK); 
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getUsuarioById/{id}")
    public UserResponseDTO getById(@PathVariable("id") String ident) throws EmptyExceptions, NotFoundException {
        return userService.findByUserById(ident);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRequestDTO data) throws AlreadyExistException, EmptyExceptions {
        return new ResponseEntity(userService.createUser(data), HttpStatus.CREATED);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/updateUser/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id) throws NotFoundException {
        return new ResponseEntity(userService.updateUser(data, id), HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/deleteUserById/{id}")
    public ResponseEntity deleteUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id) throws AuthException, NotFoundException {
        userService.deleteUser(data, id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/getUsersForTesting")
    public List<UserModel> getAllUsersForTest() {
        return userService.findAllForTest();
    }
}
