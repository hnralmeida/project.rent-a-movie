package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
public class TypeDTO{
    private Long id;
    private String name;
    private Double classValue;
    private Long returnDate;
    private List<TitleDTO> titleList;
}
