package com.interswitch.volcano.Unsolo.controller;


import com.interswitch.volcano.Unsolo.dtos.BlogPostDto;
import com.interswitch.volcano.Unsolo.services.BlogPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/blogPostDto")
public class BlogPostController {

    private final BlogPostService blogPostService;


    @PostMapping("/createBlogPost")
    public ResponseEntity<String> createBlogPost(@RequestBody BlogPostDto blogPostDto) {
        String createBlogPost = blogPostService.createBlogPost(blogPostDto);
        ResponseEntity<String> post = new ResponseEntity<>(createBlogPost, HttpStatus.CREATED);
                return post;

    }


    @GetMapping("/getAllBlogPost")
    public ResponseEntity<List<BlogPostDto>> getAllBlogPosts() {
        List<BlogPostDto> listOfPosts = blogPostService.getAllBlogPosts();
        ResponseEntity<List<BlogPostDto>> post = new ResponseEntity<List<BlogPostDto>>(listOfPosts, HttpStatus.OK);
        return post;
    }


    @DeleteMapping("/delete/{id}/{userId}")
    public ResponseEntity<String> deleteBlogPostByIdAndUserId(@PathVariable Long id, @PathVariable Long userId) {
        blogPostService.deleteByIdAndUserId(id, userId);
        String pst = "successfully deleted post";
        ResponseEntity<String> post = new ResponseEntity<>(pst, HttpStatus.OK);
        return post;
    }


    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteBlogPostById(@PathVariable Long userId) {
        blogPostService.deleteById(userId);
        ResponseEntity<String> post = new ResponseEntity<>("Blog post deleted successfully", HttpStatus.OK);
        return post;
    }


    @PutMapping("/update/{userId}")
    public ResponseEntity<String> updateBlogPostById(
            @PathVariable Long userId,
            @RequestBody BlogPostDto updatedBlogPostDto) {

        String updateResponse = blogPostService.updateBlogPost(userId, updatedBlogPostDto);
        ResponseEntity<String> post = new ResponseEntity<>(updateResponse, HttpStatus.OK);
        return post;
    }


    @GetMapping("/getBlogPost/{userId}")
    public ResponseEntity<List<BlogPostDto>> getBlogPostByUserId(@PathVariable Long userId) {
        List<BlogPostDto> pst = blogPostService.getBlogPostByUserId(userId);
        ResponseEntity<List<BlogPostDto>> post = new ResponseEntity<>(pst, HttpStatus.OK);
        return post;
    }

    @GetMapping("/getBlogPost/{id}")
    public ResponseEntity<BlogPostDto> getBlogPostById(@PathVariable Long id) {
        BlogPostDto pst = blogPostService.getBlogPostById(id);
        ResponseEntity<BlogPostDto> post = new ResponseEntity<>(pst, HttpStatus.OK);
        return post;
    }

}
