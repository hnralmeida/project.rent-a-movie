package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.Title;
import org.springframework.stereotype.Repository;

@Repository
public interface TitleRepository extends JpaRepository<Title, Long> {
}
