package com.interswitch.volcano.Unsolo.utils;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@AllArgsConstructor
@NoArgsConstructor
@Data
public class ApiErrorResponse {
    private Integer errorCode;
    private String errorMessage;
    private Date date;

}
