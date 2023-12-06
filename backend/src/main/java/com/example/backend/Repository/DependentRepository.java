package com.example.backend.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.backend.Models.Dependent;
import org.springframework.stereotype.Repository;

@Repository
public interface DependentRepository extends JpaRepository<Dependent, Long> {

    @Query(value = "SELECT * FROM DEPENDENT, CLIENT WHERE CLIENT.ID = DEPENDENT.ID AND CLIENT.IS_ACTIVE = TRUE ", nativeQuery = true)
    List<Dependent> getDependentAtivos();

}
