package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
