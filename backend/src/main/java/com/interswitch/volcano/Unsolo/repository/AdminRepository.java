package com.interswitch.volcano.Unsolo.repository;

import com.interswitch.volcano.Unsolo.model.SuperAdmin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<SuperAdmin, Long> {

}
