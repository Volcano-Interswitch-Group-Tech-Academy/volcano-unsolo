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
        return ResponseEntity.status(HttpStatus.CREATED).body(createBlogPost);
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
        return ResponseEntity.ok("Blog post deleted successfully");
    }

    @DeleteMapping("/delete/{userId}")
    public ResponseEntity<String> deleteBlogPostById(@PathVariable Long userId) {
        blogPostService.deleteById(userId);
        return ResponseEntity.ok("Blog post deleted successfully");
    }


    @PutMapping("/update/{userId}")
    public ResponseEntity<String> updateBlogPostById(
            @PathVariable Long userId,
            @RequestBody BlogPostDto updatedBlogPostDto) {

        String updateResponse = blogPostService.updateBlogPost(userId, updatedBlogPostDto);
        return ResponseEntity.ok(updateResponse);
    }


    @GetMapping("/getBlogPost/{userId}")
    public ResponseEntity<List<BlogPostDto>> getBlogPostByUserId(@PathVariable Long userId) {
        List<BlogPostDto> post = blogPostService.getBlogPostByUserId(userId);
        return ResponseEntity.ok(post);
    }

    @GetMapping("/getBlogPost/{id}")
    public ResponseEntity<BlogPostDto> getBlogPostById(@PathVariable Long id) {
        BlogPostDto post = blogPostService.getBlogPostById(id);
        return ResponseEntity.ok(post);
    }

}
