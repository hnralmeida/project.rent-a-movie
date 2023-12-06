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

import com.example.backend.DTO.ItemDTO;
import com.example.backend.Services.ItemService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/item")
public class ItemController {
    private static final Logger logger = LoggerFactory.getLogger(ItemController.class);

    private final ItemService service;

    @GetMapping
    public ResponseEntity<List<ItemDTO>> getList() { return service.getList();}

    @GetMapping("/{id}")
    public ResponseEntity<ItemDTO> findById(@PathVariable Long id) { return service.findById(id);}

    @PostMapping
    public ResponseEntity insert(@RequestBody ItemDTO itemDTO) { return service.insert(itemDTO);}

    @PutMapping("/{id}")
    public ResponseEntity<ItemDTO> update(@PathVariable Long  id, @RequestBody ItemDTO itemDTO) {
        return service.update(id, itemDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }
}
