package com.example.backend.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.DTO.ClientDTO;
import com.example.backend.Models.Client;
import com.example.backend.Repository.ClientRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository repository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<ClientDTO>> getList() {
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(client -> (mapper.map(client, ClientDTO.class)))
                        .toList());
    }

    public ResponseEntity<ClientDTO> findById(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), ClientDTO.class));
    }


    public ResponseEntity insert(ClientDTO clientDTO) {
        if (clientDTO.getName() != null) {
            Client client = mapper.map(clientDTO, Client.class);
            repository.save(client);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: No Content on body.");
    }

    public ResponseEntity<Client> update(Long id, ClientDTO clientDTO) {
        Client client = mapper.map(repository.findById(id), Client.class);
        mapper.map(clientDTO, client);
        repository.save(client);
        return ResponseEntity.ok(client);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
