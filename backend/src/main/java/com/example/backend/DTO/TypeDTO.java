package com.example.backend.DTO;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class TypeDTO{
    private Long id;
    private String name;
    private Double classValue;
    private Long returnDate;
    private List<TitleDTO> titleList;
}
