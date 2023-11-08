package com.example.backend.DTO;

import com.example.backend.Models.Title;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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
