package com.example.backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ACTOR")
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ACTOR_NAME", unique = true, nullable = false)
    private String name;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Title> titleList;

    public Actor(String name, List<Title> titleList) {
        this.name = name;
        this.titleList = titleList;
    }
}
