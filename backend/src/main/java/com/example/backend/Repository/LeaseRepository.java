package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.Lease;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LeaseRepository extends JpaRepository<Lease, UUID> {
}
