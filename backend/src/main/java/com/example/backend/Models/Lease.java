package com.example.backend.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "LEASE")
public class Lease {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "DTA_LOCACAO", nullable = false)
    private Date dtLease;

    @Column(name = "DTA_EXPECTED_RETURN", nullable = false)
    private Date dtExpectedReturn;

    @Column(name = "DTA_ACTUAL_RETURN", nullable = true)
    private Date dtActualReturn;

    @Column(name = "AMOUNT_CHARGED", nullable = false)
    private Double amountCharged;

    @Column(name = "FINE_CHARGED", nullable = false)
    private Double fineCharged;

    @ManyToOne(fetch = FetchType.LAZY)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    private Item item;

}
