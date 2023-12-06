package com.example.backend.Models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "CLIENT")
public class Client {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "SUB_NUMBER", nullable = false)
    private Long subNumber;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "BIRTH_DATE")
    private Date birthDate;

    @Column(name = "GENDER", nullable = true)
    private String gender;

    @Column(name = "IS_ACTIVE", nullable = false)
    private Boolean isActive;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Lease> leaseList;
}