package com.example.backend.Controller;

import com.example.backend.DTO.ActorDTO;
import com.example.backend.Models.Actor;
import com.example.backend.Services.ActorService;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
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
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/ator")
public class ActorController {
    private final ActorService service;

    @GetMapping
    public List<ActorDTO> getList() {
        return service.getList();
    }

    @GetMapping("/{id}")
    public ActorDTO findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PostMapping
    public void insert(@RequestBody ActorDTO actor) {
        service.insert(actor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Actor> update(@PathVariable Long id, @RequestBody ActorDTO actorDTO) {
        return service.update(id, actorDTO);
    }

    @DeleteMapping({"/{id}"})
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

}
