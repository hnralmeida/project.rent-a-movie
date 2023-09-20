package com.example.backend.DTO;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
public class TypeDTO{
    private Long id;
    private String name;
    private Double classValue;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate returnDate;
}
