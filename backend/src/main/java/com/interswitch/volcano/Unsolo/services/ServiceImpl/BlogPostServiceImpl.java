package com.interswitch.volcano.Unsolo.services.ServiceImpl;

import com.interswitch.volcano.Unsolo.dtos.BlogPostDto;
import com.interswitch.volcano.Unsolo.exceptions.PostNotFoundException;
import com.interswitch.volcano.Unsolo.model.BlogPost;
import com.interswitch.volcano.Unsolo.repository.BlogPostRepo;
import com.interswitch.volcano.Unsolo.services.BlogPostService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BlogPostServiceImpl implements BlogPostService {

    private final BlogPostRepo blogPostRepo;


    @Override
    @Transactional
    public String createBlogPost(BlogPostDto blogPostDto) {
        // Converted BlogPostDto to BlogPost entity
        BlogPost blogPost = new BlogPost();
        blogPost.setUserId(blogPostDto.getUserId());
        blogPost.setName(blogPostDto.getName());
        blogPost.setPost(blogPostDto.getPost());

        blogPostRepo.save(blogPost);

        return "Blog post created successfully";
    }


    @Override
    public List<BlogPostDto> getAllBlogPosts() {
        List<BlogPost> blogPosts = blogPostRepo.findAll();

        // Converting BlogPost entities to BlogPostDto objects
        // .stream() is to convert blogpost to streams for processing of the list
        List<BlogPostDto> blogPostDtos = blogPosts.stream()
                // .map() to transform each BlogPost entity into a BlogPostDto object using the convertToDto method.
                //:: is a shorthand lambda function calling the covertToDto on the streams
                .map(this::convertToDto)
                //collects the transformed BlogPostDto objects back into a list.
                .collect(Collectors.toList());

        return blogPostDtos;
    }

    //private helper method that takes a BlogPost entity as input and converts it into a BlogPostDto object.
    private BlogPostDto convertToDto(BlogPost blogPost) {
        // Convert a BlogPost entity to a BlogPostDto object here
        BlogPostDto blogPostDto = new BlogPostDto();
        blogPostDto.setUserId(blogPost.getUserId());
        blogPostDto.setName(blogPost.getName());
        blogPostDto.setPost(blogPost.getPost());


        return blogPostDto;
    }


    @Override
    @Transactional
    public void deleteByIdAndUserId(Long id, Long userId) {
        // Check if a blog post with the given id and userId exists
        Optional<BlogPost> blogPost = blogPostRepo.findByIdAndUserId(id, userId);

        if (blogPost.isPresent()) {
            // If it exists, then it will be deleted
            blogPostRepo.delete(blogPost.get());
        } else {
            throw new PostNotFoundException("Blog post with id: " + id + " & user id: " + userId + " not found");
        }
    }

    @Override
    @Transactional
    public void deleteById(Long userId) {
        // Check if a blog post with the given id exists
        if (blogPostRepo.existsById(userId)) {
            // If it exists, then it will delete
            blogPostRepo.deletePostById(userId);
        } else {

            throw new PostNotFoundException("Blog post with id " + userId + " not found");
        }
    }



    @Override
    @Transactional
    public String updateBlogPost(Long userId, BlogPostDto updatedBlogPostDto) {
        // Check if a blog post with the given id exists
        BlogPost existingBlogPost = blogPostRepo.findById(userId).orElseThrow(() -> new PostNotFoundException("Blog post with id " + userId + " not found"));

        // Update the existing blog post with the data from the updatedBlogPostDto
        if (updatedBlogPostDto.getName() != null) {
            existingBlogPost.setName(updatedBlogPostDto.getName());
        }
        if (updatedBlogPostDto.getPost() != null) {
            existingBlogPost.setPost(updatedBlogPostDto.getPost());
        }

        // Save the updated blog post
        blogPostRepo.save(existingBlogPost);

        return "Blog post with id " + userId + " updated successfully";
    }





    @Override
    public BlogPostDto getBlogPostById(Long id) {
        // Retrieve the BlogPost entity by ID
        var blogPost = blogPostRepo.findById(id).orElseThrow(
                ()-> new PostNotFoundException("Post not found")
        );
        BlogPostDto blogPostDto = new BlogPostDto();
        blogPostDto.setUserId(blogPost.getUserId());
        blogPostDto.setName(blogPost.getName());
        blogPostDto.setPost(blogPost.getPost());

        // Return the list of BlogPostDto directly
        return blogPostDto;
    }


    @Override
    public List<BlogPostDto> getBlogPostByUserId(Long userId) {
        List<BlogPostDto> blogPosts = blogPostRepo.findByUserId(userId);

        if (blogPosts.isEmpty()) {
            // You can handle the case where no posts are found, e.g., by returning an empty list or throwing an exception.
            // For now, let's return an empty list.
            return Collections.emptyList();
        }

        // Return the list of BlogPostDto directly
        return blogPosts;
    }


}
