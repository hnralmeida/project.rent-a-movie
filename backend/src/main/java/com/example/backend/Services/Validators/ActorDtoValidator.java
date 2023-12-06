package com.example.backend.Services.Validators;

import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.example.backend.DTO.ActorDTO;

@Component
public class ActorDtoValidator implements Validator {
    @Override
    public boolean supports(Class<?> clazz) {
        return ActorDTO.class.equals(clazz);
    }

    @Override
    public void validate(Object target, Errors errors) {
        ActorDTO actorDTO = (ActorDTO) target;

        ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "name.empty");

        if (actorDTO.getId() != null) {
            errors.rejectValue("id", "notnull");
        }


    }
}
