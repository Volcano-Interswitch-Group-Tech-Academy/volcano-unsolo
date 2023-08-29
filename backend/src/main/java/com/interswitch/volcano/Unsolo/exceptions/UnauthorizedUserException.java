package com.interswitch.volcano.Unsolo.exceptions;

public class UnauthorizedUserException extends RuntimeException{
    public UnauthorizedUserException(String message) {
        super(message);
    }

}
