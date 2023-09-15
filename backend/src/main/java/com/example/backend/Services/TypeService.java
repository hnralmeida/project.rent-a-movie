package com.example.backend.Services;

import com.example.backend.DTO.TypeDTO;
import com.example.backend.Models.Type;
import com.example.backend.Repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TypeService {
    private final TypeRepository repository;

    public ResponseEntity<List<TypeDTO>> getList() {
        ModelMapper mapper = new ModelMapper();
        return ResponseEntity.ok(repository.findAll().stream().map(type -> (mapper.map(type, TypeDTO.class))).toList());
    }

    public ResponseEntity<TypeDTO> findById(Long id) {
        ModelMapper mapper = new ModelMapper();
        return ResponseEntity.ok(mapper.map(repository.findById(id), TypeDTO.class));
    }

    public ResponseEntity insert(TypeDTO typeDTO) {
        ModelMapper mapper = new ModelMapper();
        Type type = mapper.map(typeDTO, Type.class);
        repository.save(type);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<TypeDTO> update(Long id, TypeDTO typeDTO) {
        ModelMapper mapper = new ModelMapper();
        Type type = mapper.map(repository.findById(id), Type.class);
        mapper.map(typeDTO, type);
        return ResponseEntity.ok(typeDTO);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
