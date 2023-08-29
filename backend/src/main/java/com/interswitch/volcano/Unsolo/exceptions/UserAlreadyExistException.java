package com.interswitch.volcano.Unsolo.exceptions;

public class UserAlreadyExistException extends RuntimeException{

    public UserAlreadyExistException(String message) {
        super(message);
    }
}
