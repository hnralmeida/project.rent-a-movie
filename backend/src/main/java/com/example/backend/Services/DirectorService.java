package com.example.backend.Services;

import com.example.backend.DTO.DirectorDTO;
import com.example.backend.Models.Director;
import com.example.backend.Repository.DirectorRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class DirectorService {
    private final DirectorRepository repository;

    public ResponseEntity<List<DirectorDTO>> getList() {
        ModelMapper mapper = new ModelMapper();
        return ResponseEntity.ok(repository
                .findAll()
                .stream()
                .map(director -> (mapper.map(director, DirectorDTO.class)))
                .toList());
    }

    public ResponseEntity<DirectorDTO> findById(Long id) {
        ModelMapper mapper = new ModelMapper();

        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), DirectorDTO.class));
    }

    public ResponseEntity insert(DirectorDTO directorDTO) {
        ModelMapper mapper = new ModelMapper();
        Director director = mapper.map(directorDTO, Director.class);
        repository.save(director);
        return ResponseEntity.ok().build();

    }

    public ResponseEntity<Director> update(Long id, DirectorDTO directorDTO) {
        ModelMapper mapper = new ModelMapper();
        Director director = mapper.map(repository.findById(id), Director.class);
        mapper.map(directorDTO, director);
        repository.save(director);
        return ResponseEntity.ok(director);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
