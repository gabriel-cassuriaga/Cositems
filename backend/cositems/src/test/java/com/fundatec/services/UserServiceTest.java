package com.fundatec.services;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.fundatec.cositems.dto.UserRequestDTO;
import com.fundatec.cositems.dto.UserResponseDTO;
import com.fundatec.cositems.exceptions.NotFoundException;
import com.fundatec.cositems.model.UserModel;
import com.fundatec.cositems.repository.UserRepository;
import com.fundatec.cositems.services.UserService;

import jakarta.security.auth.message.AuthException;

@ExtendWith(MockitoExtension.class)
public class UserServiceTest {
 
    
    @InjectMocks
    UserService userService;

    @Mock
    UserRepository userRepository;
    UserResponseDTO userResponseDTO;
    UserModel userModel;
    UserRequestDTO data;



    @Test
    void testLogin() throws AuthException, NotFoundException {
        when(userService.findAllUsers()).thenReturn(Collections.singletonList(userResponseDTO));

        List<UserResponseDTO> users = userService.findAllUsers();

        assertEquals(Collections.singletonList(userResponseDTO), users);
    }
}
