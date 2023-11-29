package com.example.backend.Services;

import com.example.backend.DTO.DependentDTO;
import com.example.backend.Models.Client;
import com.example.backend.Models.Dependent;
import com.example.backend.Repository.ClientRepository;
import com.example.backend.Repository.DependentRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DependentService {
    private final DependentRepository repository;

    private final ClientRepository clientRepository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<DependentDTO>> getList() {
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(dependent -> (mapper.map(dependent, DependentDTO.class)))
                        .toList());
    }

    public ResponseEntity<DependentDTO> findById(Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), DependentDTO.class));
    }


    public ResponseEntity insert(DependentDTO dependentDTO) {

        if(!clientRepository.existsById(dependentDTO.getClientId())) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: ClientID doesn't exist");
        }

        Optional<Client> client = clientRepository.findById(dependentDTO.getClientId());
        Long qtdDependents = client.get().getDependentList().stream().count();
        if(qtdDependents > 3) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Dependent List already full");
        }

        Dependent dependent = mapper.map(dependentDTO, Dependent.class);
        dependent.setClient(clientRepository.findById(dependentDTO.getClientId()).get());
        repository.save(dependent);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Dependent> update(Long id, DependentDTO dependentDTO) {
        Dependent dependent = mapper.map(repository.findById(id), Dependent.class);
        mapper.map(dependentDTO, dependent);
        repository.save(dependent);
        return ResponseEntity.ok(dependent);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}