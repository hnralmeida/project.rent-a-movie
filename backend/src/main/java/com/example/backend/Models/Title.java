package com.example.backend.Models;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column(name = "RELEASE_YEAR", nullable = false)
    private Long year;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinColumn(table = "ACTOR")
    private List<Actor> actorList;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "DIRECTOR_ID")
    private Director director;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "TYPE_ID")
    private Type type;

    @OneToMany(fetch = FetchType.EAGER, mappedBy = "title")
    private List<Item> itemList;

    public Title(String name, Long year, String synopsis, String category, List<Actor> actorList, Director director, Type type, List<Item> itemList) {
        this.name = name;
        this.year = year;
        this.synopsis = synopsis;
        this.category = category;
        this.actorList = actorList;
        this.director = director;
        this.type = type;
        this.itemList = itemList;
    }
}
