package com.example.backend.Models;

import java.util.Date;
import java.util.UUID;

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

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "LEASE")
public class Lease {
    @GeneratedValue(strategy = GenerationType.UUID)
    @Id
    private UUID uuid;

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

    @Column(name = "IS_PAID", nullable = false)
    private Boolean isPaid;

    @ManyToOne(fetch = FetchType.LAZY)
    private Client client;

    @ManyToOne(fetch = FetchType.LAZY)
    private Item item;
}

/*
INSERT INTO LEASE(ID, DTA_LOCACAO, DTA_EXPECTED_RETURN, DTA_ACTUAL_RETURN, AMOUNT_CHARGED, FINE_CHARGED, IS_PAID) VALUES ('b35c602c-1ae8-4d97-aeba-0d5213601576', CURRENT_DATE, CURRENT_DATE, NULL, 0, 0, FALSE);
INSERT INTO LEASE(ID, DTA_LOCACAO, DTA_EXPECTED_RETURN, DTA_ACTUAL_RETURN, AMOUNT_CHARGED, FINE_CHARGED, IS_PAID) VALUES (CURRENT_DATE, CURRENT_DATE, NULL, 10, 0, TRUE);
INSERT INTO LEASE(ID, DTA_LOCACAO, DTA_EXPECTED_RETURN, DTA_ACTUAL_RETURN, AMOUNT_CHARGED, FINE_CHARGED, IS_PAID) VALUES (CURRENT_DATE, CURRENT_DATE, NULL, 20, 10, TRUE);
INSERT INTO LEASE(UUID, DTA_LOCACAO, DTA_EXPECTED_RETURN, DTA_ACTUAL_RETURN, AMOUNT_CHARGED, FINE_CHARGED, IS_PAID) VALUES ('b35c602c-1ae8-4d97-aeba-0d5213601576', CURRENT_DATE, CURRENT_DATE, NULL, 0, 0, FALSE);
*/