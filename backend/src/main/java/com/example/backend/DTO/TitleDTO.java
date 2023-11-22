package com.example.backend.DTO;

import lombok.Data;

import java.util.List;

@Data
public class TitleDTO {
    private Long id;
    private String name;
    private String synopsis;
    private String category;
    private DirectorDTO directorDTO;
    private TypeDTO typeDTO;
    private List<ItemDTO> itemDTOList;
}
