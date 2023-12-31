package com.example.backend.DTO;

import java.util.Date;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class DependentDTO {
    private Long id;
    private Long subNumber;
    private String name;
    private Date birthDate;
    private String gender;
    private Boolean isActive;
    private PartnerDTO partner;
}
