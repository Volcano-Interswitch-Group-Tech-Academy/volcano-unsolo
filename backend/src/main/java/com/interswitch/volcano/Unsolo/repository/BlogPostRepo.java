package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.dtos.BlogPostDto;
import com.interswitch.volcano.Unsolo.model.BlogPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface BlogPostRepo extends JpaRepository<BlogPost, Long> {

    void deletePostById( Long userId);

    List<BlogPostDto> findByUserId(Long userId);

    Optional<BlogPost> findByIdAndUserId(Long id, Long userId);

}
