package com.fundatec.cositems.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_ACCEPTABLE)
public class EmptyExceptions extends Exception {
    
    public EmptyExceptions(String message) {
        super(message);
    }
}
