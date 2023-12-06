package com.example.backend.DTO;

import java.util.Date;
import java.util.UUID;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class LeaseDTO {
    private UUID uuid;
    private Date dtLease;
    private Date dtExpectedReturn;
    private Date dtActualReturn;
    private Double amountCharged;
    private Double fineCharged;
    private Boolean isPaid;
    private ClientDTO client;
    private ItemDTO item;
}
