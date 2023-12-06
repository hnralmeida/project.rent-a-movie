package com.example.backend.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.DTO.PartnerDTO;
import com.example.backend.Services.PartnerService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/socios")
public class PartnerController {
    private static final Logger logger = LoggerFactory.getLogger(PartnerController.class);

    private final PartnerService service;

    @GetMapping
    public ResponseEntity<List<PartnerDTO>> getList() {
        return service.getList();
    }


}
