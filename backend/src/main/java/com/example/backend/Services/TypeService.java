package com.example.backend.Services;

import com.example.backend.DTO.TypeDTO;
import com.example.backend.Models.Type;
import com.example.backend.Repository.TypeRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TypeService {
    private final TypeRepository repository;
    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<TypeDTO>> getList() {
        return ResponseEntity.ok(repository.findAll().stream().map(type -> (mapper.map(type, TypeDTO.class))).toList());
    }

    public ResponseEntity<TypeDTO> findById(Long id) {
        return ResponseEntity.ok(mapper.map(repository.findById(id), TypeDTO.class));
    }

    public ResponseEntity insert(TypeDTO typeDTO) {
        if (typeDTO.getName() != null && typeDTO.getReturnDate() != null && typeDTO.getClassValue() != null) {
            Type type = mapper.map(typeDTO, Type.class);
            repository.save(type);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: No Content on body");
    }

    public ResponseEntity<TypeDTO> update(Long id, TypeDTO typeDTO) {
        Type type = mapper.map(repository.findById(id), Type.class);
        mapper.map(typeDTO, type);
        repository.save(type);
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
