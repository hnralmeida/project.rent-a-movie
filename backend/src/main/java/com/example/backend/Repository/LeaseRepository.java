package com.example.backend.Repository;

import com.example.backend.Models.Lease;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaseRepository extends JpaRepository<Lease, Long> {
}
