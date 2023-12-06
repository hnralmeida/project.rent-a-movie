package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.Type;

public interface TypeRepository extends JpaRepository<Type, Long> {
}
