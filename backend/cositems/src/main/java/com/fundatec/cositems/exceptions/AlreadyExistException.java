package com.fundatec.cositems.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_ACCEPTABLE)
public class AlreadyExistException extends Exception {
    
    public AlreadyExistException(String message) {
        super(message);
    }
}
