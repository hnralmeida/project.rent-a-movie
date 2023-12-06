package com.example.backend.Services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.example.backend.DTO.PartnerDTO;
import com.example.backend.Models.Partner;
import com.example.backend.Repository.PartnerRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PartnerService {
    private final PartnerRepository repository;

    @Autowired
    private final ModelMapper mapper;

    public ResponseEntity<List<PartnerDTO>> getList() {
        return ResponseEntity.ok(
                repository
                        .findAll()
                        .stream()
                        .map(partner -> (mapper.map(partner, PartnerDTO.class)))
                        .toList());
    }

    public ResponseEntity<PartnerDTO> findById(Long id) {
        if (!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(mapper.map(repository.findById(id), PartnerDTO.class));
    }

    public ResponseEntity insert(@Validated PartnerDTO partnerDTO) {
        Partner partner = mapper.map(partnerDTO, Partner.class);
        repository.save(partner);
        return ResponseEntity.ok().build();
    }

    public ResponseEntity<Partner> update(Long id, PartnerDTO partnerDTO) {
        if(!repository.existsById(id)) {
            return ResponseEntity.badRequest().build();
        }

        Partner partner = mapper.map(repository.findById(id), Partner.class);
        repository.save(partner);
        return ResponseEntity.ok(partner);
    }

    public ResponseEntity delete(Long id) {
        if(!repository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
