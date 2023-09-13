package com.example.backend.Models;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Type {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String name;

    private Double value;

    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate returnDate;

    public Type(String name, Double value, LocalDate returnDatedate) {
        this.name = name;
        this.value = value;
        this.returnDate = returnDatedate;
    }
}
