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
        UserModel userToVerify = userRepository.findByUsernameAndEmailAndPassword(data.username(), data.email(),
                data.password());
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
        if (id.isBlank())
            throw new EmptyExceptions("id vazio");
        if (!userRepository.findById(id).isPresent())
            throw new NotFoundException("Usuário não encontrado");
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

    public UserResponseDTO updateUser(UserRequestDTO data, String id) throws EmptyExceptions {

        if (!userRepository.findById(id).isPresent()) {
            throw new EmptyExceptions("Usuário não encontrado");
        }

        UserModel userToUpdate = userRepository.findById(id).get();

        userToUpdate.setEmail(data.email());
        userToUpdate.setPassword(data.password());
        userToUpdate.setUsername(data.username());
        userRepository.save(userToUpdate);

        return objectMapper.convertValue(userToUpdate, UserResponseDTO.class);

    }

    public void deleteUser(String id) throws NotFoundException, EmptyExceptions {
        if (id.isBlank())
            throw new EmptyExceptions("id vazio");
        if (!userRepository.findById(id).isPresent()) {
            throw new NotFoundException("Usuario não encontrado");
        }

        userRepository.deleteById(id);
    }

    public UserResponseDTO login(String email, String password) throws AuthException, NotFoundException {

        if (email.isBlank() && password.isBlank())
            throw new AuthException("Login inválido");

        if (email.isBlank())
            throw new AuthException("Login inválido");

        if (password.isBlank())
            throw new AuthException("Login inválido");

        UserModel user = userRepository.login(email, password);

        if (user == null)
            throw new NotFoundException("Usuario não encontrado");

        return objectMapper.convertValue(user, UserResponseDTO.class);
    }
}
