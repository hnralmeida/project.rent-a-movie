package com.example.backend.Services;

import com.example.backend.DTO.ClientDTO;
import com.example.backend.Models.Client;
import com.example.backend.Repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository repository;

    public ResponseEntity<List<ClientDTO>> getList() {
        ModelMapper mapper = new ModelMapper();
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(client -> (mapper.map(client, ClientDTO.class)))
                        .toList());
    }

    public ResponseEntity<ClientDTO> findById(Long id) {
        ModelMapper mapper = new ModelMapper();

        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), ClientDTO.class));
    }


    public ResponseEntity insert(ClientDTO clientDTO) {
        if (clientDTO.getName() != null) {
            ModelMapper mapper = new ModelMapper();
            Client client = mapper.map(clientDTO, Client.class);
            repository.save(client);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: No Content on body.");
    }

    public ResponseEntity<Client> update(Long id, ClientDTO clientDTO) {
        ModelMapper mapper = new ModelMapper();
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
