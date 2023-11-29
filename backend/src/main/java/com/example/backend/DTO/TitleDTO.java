package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class TitleDTO {
    private Long id;
    private String name;
    private String synopsis;
    private String category;
    private List<ActorDTO> actorDTOList;
    private DirectorDTO directorDTO;
    private TypeDTO typeDTO;
}
