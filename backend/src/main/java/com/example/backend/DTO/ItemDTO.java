package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ItemDTO {
    private Long id;
    private Long serialNumber;
    private String itemType;
    private TitleDTO titleDTO;
}
