package com.fundatec.cositems.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.exceptions.AlreadyExistException;
import com.fundatec.cositems.exceptions.EmptyExceptions;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.repository.UserRepository;

import jakarta.security.auth.message.AuthException;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final ObjectMapper objectMapper;

    public UserResponseDTO createUser(UserRequestDTO data) throws AlreadyExistException, EmptyExceptions {
        UserModel userToVerify = userRepository.findByUsernameAndEmailAndPassword(data.username(), data.email(), data.password());
        if (userToVerify != null) {
            throw new AlreadyExistException("Usuário já existente");
        }
        if (data.username().isBlank()) {
            throw new EmptyExceptions("Username vazio");
        } else if (data.email().isBlank()) {
            throw new EmptyExceptions("Email vazio");
        } else if (data.password().isBlank()) {
            throw new EmptyExceptions("Senha vazia");
        }
        UserModel user = userRepository.save(objectMapper.convertValue(data, UserModel.class));
        return objectMapper.convertValue(user, UserResponseDTO.class);
    }

    public UserResponseDTO findByUserById(String id) throws EmptyExceptions, NotFoundException {
        if (id.isBlank())throw new EmptyExceptions("id vazio");
        if (!userRepository.findById(id).isPresent()) throw new NotFoundException("Usuário não encontrado");
        return objectMapper.convertValue(userRepository.findById(id), UserResponseDTO.class);
    }

    public List<UserResponseDTO> findAllUsers() throws NotFoundException {
       if (userRepository.findAll() == null) {
        throw new NotFoundException("Nenhum usuário não encontrado"); 
       }
        List<UserResponseDTO> userToReturn = userRepository.findAll().stream()
        .map(users -> UserResponseDTO.builder()
            .id(users.getId())
            .email(users.getEmail())
            .username(users.getUsername()).build())
            .toList();
        return userToReturn;
    }

    public UserResponseDTO updateUser(UserRequestDTO data, String id) throws NotFoundException {
        if (!userRepository.findById(id).isPresent()) throw new NotFoundException("Usuário não encontrado");
        UserModel userToUpdate = userRepository.findById(id).get();
        userToUpdate.setEmail(data.email());
        userToUpdate.setPassword(data.password());
        userToUpdate.setUsername(data.username());
        userRepository.save(userToUpdate);
        return objectMapper.convertValue(userToUpdate, UserResponseDTO.class);
    }

    public void deleteUser(UserRequestDTO data, String id) throws NotFoundException, AuthException {
        if (!userRepository.findById(id).isPresent()) throw new NotFoundException("Usuário não encontrado");
        UserModel user = userRepository.login(id, data.email(), data.password());
        if (user == null) throw new AuthException("Não autorizado");
        userRepository.delete(user);
    }

    public List<UserModel> findAllForTest() {
        return userRepository.findAll();
    }
}
