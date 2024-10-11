package com.fundatec.cositems.controller;

import org.springframework.web.bind.annotation.RestController;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.enums.Size;
import com.fundatec.cositems.exceptions.AlreadyExistException;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
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
import org.springframework.web.bind.annotation.RequestParam;

@RequiredArgsConstructor
@RestController
@RequestMapping("users")
public class UserController {

    private final UserService userService;

    @Operation(summary = "Cria um novo Usuário")
    @ApiResponse(responseCode = "201", description = "Usuário criado com sucesso, retorna um Dto do usuário criado")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PostMapping
    public ResponseEntity<UserResponseDTO> createUser(@RequestBody UserRequestDTO data)
            throws AlreadyExistException, EmptyExceptions {
        return new ResponseEntity<>(userService.createUser(data), HttpStatus.CREATED);
    }

    @Operation(summary = "Busca todos os usuários")
    @ApiResponse(responseCode = "200", description = "Retorna todos os usuários")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping
    public ResponseEntity<List<UserResponseDTO>> getAll() throws NotFoundException {
        return new ResponseEntity<>(userService.findAllUsers(), HttpStatus.OK);
    }

    @Operation(summary = "Busca um usuários por id")
    @ApiResponse(responseCode = "200", description = "Retorna um Dto de Usuario buscado pelo id")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getById(@PathVariable("id") String id)
            throws EmptyExceptions, NotFoundException {
        UserResponseDTO user = userService.findByUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);

    }
    @Operation(summary = "Efetua o login da aplicação")
    @ApiResponse(responseCode = "200", description = "Efetua o login e retora um Dto de usuário")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @GetMapping("/login")
    public ResponseEntity<UserResponseDTO> login(
        @RequestParam(required = false) String email,
        @RequestParam(required = false) String password)
            throws AuthException, NotFoundException {
        UserResponseDTO user = userService.login(email, password);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @Operation(summary = "Edita e atualiza o usuário")
    @ApiResponse(responseCode = "200", description = "Retorna um Dto do usuário atualizado")
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(@RequestBody UserRequestDTO data, @PathVariable("id") String id)
            throws NotFoundException, EmptyExceptions {
        return new ResponseEntity<>(userService.updateUser(data,id), HttpStatus.OK);
    }


    @Operation(summary = "Deleta o produto por id")
    @ApiResponse(responseCode = "204", description = "Deleta o usuario pelo id, Retorna o codigo sinalizando que foi deletado com sucesso")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") String id) throws NotFoundException, EmptyExceptions {
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
