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

    public List<DirectorDTO> getList() {
        ModelMapper mapper = new ModelMapper();
        return repository.findAll().stream().map(director -> (mapper.map(director, DirectorDTO.class))).toList();
    }

    public DirectorDTO findById(Long id) {
        ModelMapper mapper = new ModelMapper();
        return mapper.map(repository.findById(id), DirectorDTO.class);
    }

    public void insert(DirectorDTO directorDTO) {
        ModelMapper mapper = new ModelMapper();
        Director director = mapper.map(directorDTO, Director.class);
        repository.save(director);
    }

    public ResponseEntity<Director> update(Long id, DirectorDTO directorDTO) {
        ModelMapper mapper = new ModelMapper();
        Director director = (Director) repository.findById(id).stream().map(dict -> (mapper.map(dict, Director.class)));
        mapper.map(directorDTO, director);
        repository.save(director);
        return ResponseEntity.ok(director);
    }

    public void delete(Long id) {
        ModelMapper mapper = new ModelMapper();

        if(repository.existsById(id)) {
            repository.deleteById(id);
        }
    }
}
