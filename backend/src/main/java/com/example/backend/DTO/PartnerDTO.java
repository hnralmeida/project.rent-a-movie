package com.example.backend.DTO;

import java.util.Date;
import java.util.List;

import com.example.backend.Models.Dependent;

import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PartnerDTO {
    private Long id;
    private Long subNumber;
    private String name;
    private Date birthDate;
    private String gender;
    private Boolean isActive;
    private String address;
    private String phone;
    private String cpf;
}
