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

import com.example.backend.DTO.DirectorDTO;
import com.example.backend.Models.Director;
import com.example.backend.Services.DirectorService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/api/diretor")
public class DirectorController {
    private final DirectorService service;

    @GetMapping
    public ResponseEntity<List<DirectorDTO>> getList() {
        return service.getList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<DirectorDTO> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody DirectorDTO director) {
        return service.insert(director);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Director> update(@PathVariable Long id, @RequestBody DirectorDTO directorDTO) {
        return service.update(id, directorDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
