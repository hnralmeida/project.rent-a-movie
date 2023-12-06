package com.example.backend.Controller;

import java.util.List;

import com.example.backend.DTO.DependentDTO;
import com.example.backend.Models.Partner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/{id}")
    public ResponseEntity<PartnerDTO> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity insertPartner(@RequestBody PartnerDTO partnerDTO) {
        return service.insert(partnerDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Partner> update(@PathVariable Long id, @RequestBody PartnerDTO partnerDTO) {
        return service.update(id, partnerDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }


}
