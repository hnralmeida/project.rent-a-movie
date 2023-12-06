package com.example.backend.Models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "PARTNER")
public class Partner extends Client {

    @Column(length = 200, nullable = false)
    private String address;

    @Column(length = 9, nullable = false, unique = true)
    private String phone;

    @Column(length = 11, nullable = false, unique = true)
    private String cpf;

    @OneToMany(cascade = CascadeType.REMOVE, fetch = FetchType.EAGER, mappedBy = "partner")
    private List<Dependent> dependentList;

}
