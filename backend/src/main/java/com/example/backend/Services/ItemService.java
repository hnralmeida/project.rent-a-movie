package com.example.backend.Services;

import com.example.backend.DTO.ItemDTO;
import com.example.backend.Models.Item;
import com.example.backend.Repository.ItemRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class ItemService {
    private final ItemRepository repository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<ItemDTO>> getList() {
        return ResponseEntity.ok(
                repository.findAll()
                        .stream()
                        .map((item) -> (mapper.map(item, ItemDTO.class)))
                        .toList());
    }

    public ResponseEntity<ItemDTO> findById(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(mapper.map(repository.findById(id), ItemDTO.class));
    }

    public ResponseEntity insert(ItemDTO itemDTO) {
        Item item = mapper.map(itemDTO, Item.class);
        repository.save(item);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<ItemDTO> update(Long id, ItemDTO itemDTO) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        Item item = mapper.map(repository.findById(id), Item.class);
        mapper.map(itemDTO, item);
        repository.save(item);
        return ResponseEntity.ok(itemDTO);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
