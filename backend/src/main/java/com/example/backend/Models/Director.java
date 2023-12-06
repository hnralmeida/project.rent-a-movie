package com.example.backend.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "DIRECTOR")
public class Director {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "DIRECTOR_NAME", unique = true, nullable = false)
    private String name;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Title> titleList;

    public Director(String name, List<Title> titleList) {
        this.name = name;
        this.titleList = titleList;
    }
}
