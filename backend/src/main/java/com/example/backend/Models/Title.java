package com.example.backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "TITLE")
public class Title {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "TITLE_NAME", unique = true, nullable = false)
    private String name;

    @Column(name = "SYNOPSIS", nullable = false)
    private String synopsis;

    @Column(name = "CATEGORY", nullable = false, length = 255)
    private String category;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<Actor> actorList;

    @ManyToOne(fetch = FetchType.LAZY)
    private Director director;

    @ManyToOne(fetch = FetchType.LAZY)
    private Type type;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Item> itemList;

    public Title(String name, String synopsis, String category, List<Actor> actorList, Director director, Type type, List<Item> itemList) {
        this.name = name;
        this.synopsis = synopsis;
        this.category = category;
        this.actorList = actorList;
        this.director = director;
        this.type = type;
        this.itemList = itemList;
    }
}
