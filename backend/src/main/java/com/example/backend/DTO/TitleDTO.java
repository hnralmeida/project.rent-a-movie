package com.example.backend.DTO;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;

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
