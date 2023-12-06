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

import com.example.backend.DTO.TitleDTO;
import com.example.backend.Services.TitleService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/title")
public class TitleController {
    private static final Logger logger = LoggerFactory.getLogger(TitleController.class);

    private final TitleService service;

    @GetMapping
    public ResponseEntity<List<TitleDTO>> getList() { return service.getList();}

    @GetMapping("/{id}")
    public ResponseEntity<TitleDTO> findById(@PathVariable Long id) { return service.findById(id);}

    @PostMapping
    public ResponseEntity insert(@RequestBody TitleDTO titleDTO) { return service.insert(titleDTO);}

    @PutMapping("/{id}")
    public ResponseEntity<TitleDTO> update(@PathVariable Long  id, @RequestBody TitleDTO titleDTO) {
        return service.update(id, titleDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }

}
