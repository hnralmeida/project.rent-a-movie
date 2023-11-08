package com.example.backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name = "ITEM")
public class Item {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "SERIAL_NUMBER", unique = true, nullable = false)
    private Long serialNumber;

    @Column(name = "ITEM_TYPE", unique = true, nullable = false)
    private String itemType;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Title title;

    public Item(Long serialNumber, String itemType, Title title) {
        this.serialNumber = serialNumber;
        this.itemType = itemType;
        this.title = title;
    }
}
