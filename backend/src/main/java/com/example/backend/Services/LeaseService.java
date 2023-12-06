package com.example.backend.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.backend.DTO.LeaseDTO;
import com.example.backend.Models.Lease;
import com.example.backend.Repository.ClientRepository;
import com.example.backend.Repository.DependentRepository;
import com.example.backend.Repository.LeaseRepository;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class LeaseService {
    private final LeaseRepository repository;
    private final ClientRepository clientRepository;
    private final DependentRepository dependentRepository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<LeaseDTO>> getList() {
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(lease -> (mapper.map(lease, LeaseDTO.class)))
                        .toList());
    }

    public ResponseEntity<LeaseDTO> findById(Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(id), LeaseDTO.class));
    }

/*
    public ResponseEntity insert(LeaseDTO leaseDTO) {
        if(leaseDTO.getClientId() == 1L) {
            if(!clientRepository.existsById(leaseDTO.getClientId())) {
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: ClientID doesn't exist");
            }

            if(repository.findBy())

            //Client client = clientRepository.findById(leaseDTO.getClientId()).get();


        }


        if (leaseDTO != null) {
            Lease lease = mapper.map(leaseDTO, Lease.class);
            repository.save(lease);
            return ResponseEntity.ok().build();
        }

        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: No Content on body.");
    }
 */

    public ResponseEntity<LeaseDTO> update(Long id, LeaseDTO leaseDTO) {
        Lease lease = mapper.map(repository.findById(id), Lease.class);
        mapper.map(leaseDTO, lease);
        repository.save(lease);
        return ResponseEntity.ok(leaseDTO);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}

