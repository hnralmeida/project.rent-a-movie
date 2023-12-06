package com.example.backend.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.DTO.ActorDTO;
import com.example.backend.Models.Actor;
import com.example.backend.Repository.ActorRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ActorService {
    private final ActorRepository repository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<ActorDTO>> getList() {
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(actor -> (mapper.map(actor, ActorDTO.class)))
                        .toList());
    }

    public ResponseEntity<ActorDTO> findById(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), ActorDTO.class));
    }


    public ResponseEntity insert(ActorDTO actorDTO) {
        if (actorDTO.getName() != null) {
            Actor actor = mapper.map(actorDTO, Actor.class);
            repository.save(actor);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: No Content on body.");
    }

    public ResponseEntity<Actor> update(Long id, ActorDTO actorDTO) {
        Actor actor = mapper.map(repository.findById(id), Actor.class);
        mapper.map(actorDTO, actor);
        repository.save(actor);
        return ResponseEntity.ok(actor);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
