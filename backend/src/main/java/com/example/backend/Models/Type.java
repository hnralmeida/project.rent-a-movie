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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "TYPE")
public class Type {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "TYPE_NAME", unique = true, nullable = false)
    private String name;

    @Column(name = "CLASS_VALUE", nullable = false)
    private Double classValue;

    @Column(name = "RETURN_DATE", nullable = false)
    private Long returnDate;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Title> titleList;

    public Type(String name, Double classValue, Long returnDatedate, List<Title> titleList) {
        this.name = name;
        this.classValue = classValue;
        this.returnDate = returnDatedate;
        this.titleList = titleList;
    }
}
