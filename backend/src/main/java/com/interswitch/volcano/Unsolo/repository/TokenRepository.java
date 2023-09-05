package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends JpaRepository<Token, Long> {

}
