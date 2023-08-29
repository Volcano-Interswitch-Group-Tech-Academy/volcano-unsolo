package com.interswitch.volcano.Unsolo.utils;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.springframework.http.HttpStatus;

@ToString
@NoArgsConstructor
@Getter
@Setter
public class ApiCustomResponse<Object> {
    private String Message;
    private Object object;
    private HttpStatus status;

    public ApiCustomResponse(String message, Object object, HttpStatus status) {
        Message = message;
        this.object = object;
        this.status = status;
    }
}
