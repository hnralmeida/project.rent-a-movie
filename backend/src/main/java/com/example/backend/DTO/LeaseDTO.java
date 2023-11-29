package com.example.backend.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
public class LeaseDTO {
    private Long id;
    private Date dtLease;
    private Date dtExpectedReturn;
    private Date dtActualReturn;
    private Double amountCharged;
    private Double fineCharged;
    private Long clientId;
    private Long typeClient;
}
