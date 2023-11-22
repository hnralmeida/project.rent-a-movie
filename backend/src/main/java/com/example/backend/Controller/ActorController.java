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

import com.example.backend.DTO.ActorDTO;
import com.example.backend.Models.Actor;
import com.example.backend.Services.ActorService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/ator")
public class ActorController {
    private static final Logger logger = LoggerFactory.getLogger(ActorController.class);

    private final ActorService service;

    @GetMapping
    public ResponseEntity<List<ActorDTO>> getList() {
        return service.getList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ActorDTO> findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity insert(@RequestBody ActorDTO actor) {
        return service.insert(actor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Actor> update(@PathVariable Long id, @RequestBody ActorDTO actorDTO) {
        return service.update(id, actorDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
         return service.delete(id);
    }

}
