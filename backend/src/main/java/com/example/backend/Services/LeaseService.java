package com.example.backend.Services;

import java.util.List;
import java.util.UUID;

import com.example.backend.Models.Client;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

    public ResponseEntity<LeaseDTO> findById(UUID uuid) {
        if (!repository.existsById(uuid)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(mapper.map(repository.findById(uuid), LeaseDTO.class));
    }


    public ResponseEntity insert(LeaseDTO leaseDTO) {
        if(!clientRepository.existsById(leaseDTO.getClient().getId())) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Error: Client doesn't exist");
            }

        Client client = clientRepository.findById(leaseDTO.getClient().getId()).get();

        for (Lease lease : client.getLeaseList()) {
            if(!lease.getIsPaid()) return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: Already have a lease not paid");
        }

        Lease lease = mapper.map(leaseDTO, Lease.class);
        repository.save(lease);
        return ResponseEntity.ok().build();
        }

    public ResponseEntity<Lease> update(UUID uuid, LeaseDTO leaseDTO) {
        Lease lease = mapper.map(repository.findById(uuid), Lease.class);
        mapper.map(leaseDTO, lease);
        repository.save(lease);
        return ResponseEntity.ok(lease);
    }

    public ResponseEntity delete(UUID uuid) {
        if(!repository.existsById(uuid)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(uuid);
        return ResponseEntity.ok().build();
    }
}

