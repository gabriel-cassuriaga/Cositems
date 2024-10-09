package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.exceptions.AlreadyExistException;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
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
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    @Operation(summary = "Cria um novo Usuário")
    @ApiResponse(responseCode = "200", description = "Usuário criado com sucesso, retorna um Dto do usuário criado")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRequestDTO data)
            throws AlreadyExistException, EmptyExceptions {
        return new ResponseEntity(userService.createUser(data), HttpStatus.CREATED);
    }

    @Operation(summary = "Busca todos os Usuários")
    @ApiResponse(responseCode = "200", description = "Retorna todos os usuários")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAll() throws NotFoundException {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @Operation(summary = "Busca um Usuário pelo uuid do documento")
    @ApiResponse(responseCode = "200", description = "Retorna o usuário referente ao id")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public UserResponseDTO getById(@PathVariable("id") String ident) throws EmptyExceptions, NotFoundException {
        return userService.findByUserById(ident);
    }

//    @Operation(summary = "Busca todos os usuários para teste")
//    @ApiResponse(responseCode = "201", description = "Retorna todos os usuários sem passar por tratamento dto")
//    @CrossOrigin(origins = "*", allowedHeaders = "*")
//    @GetMapping("/testing-all")
//    public List<UserModel> getAllUsersForTest() {
//        return userService.findAllForTest();
//    }

    @Operation(summary = "Faz o login da aplicação")
    @ApiResponse(description = "retorna o Usuário sem a senha com o id")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/login")
    public UserResponseDTO login(@RequestBody UserRequestDTO data) throws AuthException, NotFoundException {
        return userService.login(data);
    }

    @Operation(summary = "Edita o usuário")
    @ApiResponse(responseCode = "202", description = "Retorna o usuário já editado")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id)
            throws NotFoundException {
        return new ResponseEntity(userService.updateUser(data, id), HttpStatus.ACCEPTED);
    }

    @Operation(summary = "Deleta o usuário")
    @ApiResponse(responseCode = "202", description = "Deleta o usuário baseado no id comparando com email e senha para confirmação")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id)
            throws AuthException, NotFoundException {
        userService.deleteUser(data, id);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }

}
