package com.interswitch.volcano.Unsolo.services;

import com.interswitch.volcano.Unsolo.dtos.BlogPostDto;

import java.util.List;

public interface BlogPostService {

    List<BlogPostDto> getAllBlogPosts();


    String createBlogPost(BlogPostDto blogPostDto);

    String updateBlogPost(Long UserId, BlogPostDto updatedBlogPostDto);

    List<BlogPostDto> getBlogPostByUserId(Long UserId);

    BlogPostDto getBlogPostById(Long id);


    void deleteByIdAndUserId(Long id, Long userId);

    void deleteById(Long userId);



}
