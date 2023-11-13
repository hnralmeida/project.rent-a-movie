package com.example.backend.Services;

import com.example.backend.DTO.ItemDTO;
import com.example.backend.DTO.TitleDTO;
import com.example.backend.Models.Item;
import com.example.backend.Models.Title;
import com.example.backend.Repository.TitleRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class TitleService {
    private final TitleRepository repository;
    private final ModelMapper mapper = new ModelMapper();

    public ResponseEntity<List<TitleDTO>> getList() {
        return ResponseEntity.ok(
                repository.findAll()
                        .stream()
                        .map(title -> (mapper.map(title, TitleDTO.class)))
                        .toList());
    }

    public ResponseEntity<TitleDTO> findById(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(mapper.map(repository.findById(id), TitleDTO.class));
    }

    public ResponseEntity insert(TitleDTO titleDTO) {
        Title title = mapper.map(titleDTO, Title.class);
        repository.save(title);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<TitleDTO> update(Long id, TitleDTO titleDTO) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Title title = mapper.map(repository.findById(id), Title.class);
        mapper.map(titleDTO, title);
        repository.save(title);
        return ResponseEntity.ok(titleDTO);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
