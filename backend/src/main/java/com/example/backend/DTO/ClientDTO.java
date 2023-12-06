package com.example.backend.DTO;

import java.util.Date;
import java.util.List;

import lombok.Data;

@Data
public class ClientDTO {
    private Long id;
    private Long subNumber;
    private String name;
    private Date birthDate;
    private String gender;
    private Boolean isActive;
    private List<DependentDTO> dependentDTOList;
}
