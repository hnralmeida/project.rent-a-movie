package com.example.backend.Controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.DTO.TypeDTO;
import com.example.backend.Services.TypeService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/classe")
public class TypeController {
    private final TypeService service;

    @GetMapping
    public ResponseEntity<List<TypeDTO>> getList() {
        return service.getList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<TypeDTO> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody TypeDTO typeDTO) {
        return service.insert(typeDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TypeDTO> update(@PathVariable Long id, @RequestBody TypeDTO typeDTO) {
        return service.update(id, typeDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
