package com.example.backend.Repository;

import com.example.backend.Models.Dependent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DependentRepository extends JpaRepository<Dependent, Long> {
}
