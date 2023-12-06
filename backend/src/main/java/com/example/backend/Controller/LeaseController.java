package com.example.backend.Controller;

import com.example.backend.DTO.LeaseDTO;
import com.example.backend.Models.Lease;
import com.example.backend.Services.LeaseService;
import lombok.RequiredArgsConstructor;
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

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/lease")
public class LeaseController {
    private static final Logger logger = LoggerFactory.getLogger(DependentController.class);

    private final LeaseService service;

    @GetMapping
    public ResponseEntity<List<LeaseDTO>> getList() {
        return service.getList();
    }

    @GetMapping("/{uuid}")
    public ResponseEntity<LeaseDTO> findById(@PathVariable UUID uuid) {
        return service.findById(uuid);
    }

    @PostMapping
    public ResponseEntity insertLease(@RequestBody LeaseDTO leaseDTO) {
        return service.insert(leaseDTO);
    }

    @PutMapping("/{uuid}")
    public ResponseEntity<Lease> updateLease(@PathVariable UUID uuid, @RequestBody LeaseDTO leaseDTO) {
        return service.update(uuid, leaseDTO);
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity delete(@PathVariable UUID uuid) {
        return service.delete(uuid);
    }
}
