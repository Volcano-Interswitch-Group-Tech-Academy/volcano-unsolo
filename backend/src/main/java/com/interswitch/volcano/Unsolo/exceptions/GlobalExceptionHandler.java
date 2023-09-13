package com.interswitch.volcano.Unsolo.exceptions;

import com.interswitch.volcano.Unsolo.utils.ApiErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Date;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handleResourceNotFound(ResourceNotFoundException xe) {
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(404, xe.getMessage(), new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(UserAlreadyExistException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(UserAlreadyExistException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(409, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.CONFLICT);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(UserNotFoundException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(404, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(MethodArgumentNotValidException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(400, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(IllegalArgumentException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(400, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(PasswordMisMatchException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(PasswordMisMatchException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(400, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(InvalidCredentialsException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(401, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.UNAUTHORIZED);
    }
    @ExceptionHandler(UnauthorizedUserException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(UnauthorizedUserException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(401, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler(TripNotFoundException.class)
    public ResponseEntity<ApiErrorResponse> handlePersonAlreadyExist(TripNotFoundException xe){
        ApiErrorResponse apiErrorResponse = new ApiErrorResponse(404, xe.getMessage() , new Date());
        return new ResponseEntity<>(apiErrorResponse, HttpStatus.NOT_FOUND);
    }

}
