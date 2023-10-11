package com.interswitch.volcano.Unsolo.dtos;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class BlogPostDto {

    private Long id;
    private Long userId;
    private String name;
    private String post;


}

