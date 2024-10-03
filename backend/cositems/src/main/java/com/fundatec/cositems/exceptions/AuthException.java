package com.fundatec.cositems.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.UNAUTHORIZED)
public class AuthException extends Exception {
    
    public AuthException(String message) {
        super(message);
    }
}
