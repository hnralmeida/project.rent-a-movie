package com.example.backend.Controller;

import com.example.backend.DTO.ClientDTO;
import com.example.backend.DTO.DependentDTO;
import com.example.backend.Models.Client;
import com.example.backend.Services.ClientService;
import com.example.backend.Services.DependentService;
import lombok.RequiredArgsConstructor;
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

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/client")
public class ClientController {
    private static final Logger logger = LoggerFactory.getLogger(ClientController.class);

    private final ClientService service;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getList() {
        return service.getList();
    }

    @PostMapping
    public ResponseEntity insertClient(@RequestBody ClientDTO client) {
        return service.insert(client);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Client> update(@PathVariable Long id, @RequestBody ClientDTO clientDTO) {
        return service.update(id, clientDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Long id) {
        return service.delete(id);
    }

}
