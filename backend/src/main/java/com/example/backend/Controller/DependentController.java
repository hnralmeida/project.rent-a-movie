package com.example.backend.Controller;

import java.util.List;

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

import com.example.backend.DTO.DependentDTO;
import com.example.backend.Models.Dependent;
import com.example.backend.Services.DependentService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/dependent")
public class DependentController {
    private static final Logger logger = LoggerFactory.getLogger(DependentController.class);

    private final DependentService service;

    @GetMapping
    public ResponseEntity<List<DependentDTO>> getList() {
        return service.getList();
    }

    @GetMapping("/ativos")
    public ResponseEntity<List<DependentDTO>> getListActives() {
        return service.getListActive();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DependentDTO> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity insertClient(@RequestBody DependentDTO dependentDTO) {
        return service.insert(dependentDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Dependent> update(@PathVariable Long id, @RequestBody DependentDTO dependentDTO) {
        return service.update(id, dependentDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
