package com.example.backend.Services;

import com.example.backend.DTO.ActorDTO;
import com.example.backend.Models.Actor;
import com.example.backend.Repository.ActorRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.record.RecordModule;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ActorService {
    private final ActorRepository repository;

    public List<ActorDTO> getList() {
        ModelMapper mapper = new ModelMapper();
        return repository.findAll().stream().map(actor -> (mapper.map(actor, ActorDTO.class))).toList();
    }

    public ActorDTO findById(Long id) {
        ModelMapper mapper = new ModelMapper();
        if(!repository.existsById(id)) {
            return null;
        }
        return mapper.map(repository.findById(id), ActorDTO.class);
    }

    public void insert(ActorDTO actorDTO) {
        ModelMapper mapper = new ModelMapper();
        Actor actor  = mapper.map(actorDTO, Actor.class);
        repository.save(actor);
    }

    public ResponseEntity<Actor> update(Long id, ActorDTO actorDTO) {
        ModelMapper mapper = new ModelMapper();
        Actor actor = mapper.map(repository.findById(id), Actor.class);
        mapper.map(actorDTO, actor);
        repository.save(actor);
        return ResponseEntity.ok(actor);
    }

    public void delete(Long id) {
        ModelMapper mapper = new ModelMapper();

        if(repository.existsById(id)) {
            repository.deleteById(id);
        }
    }
}
