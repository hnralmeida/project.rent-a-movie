package com.example.backend.DTO;

import lombok.Data;

import java.util.Date;

@Data
public class ClientDTO {
    private Long id;
    private Long subNumber;
    private String name;
    private Date birthDate;
    private String gender;
    private Boolean isActive;
    private Long clientType;
}
