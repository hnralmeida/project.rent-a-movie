package com.example.backend;

import com.example.backend.Controller.ActorController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;


@SpringBootTest
@AutoConfigureMockMvc
public class ActorControllerTest {

    @Autowired
    private ActorController controller;

    @Autowired
    private MockMvc mockMvc;

    private String host = "http://localhost:8080/api/ator";

    @Test
    public void contextLoads(){
        assertNotNull(controller);
    }

    @Test
    public void getList() throws Exception {
        mockMvc.perform(get(host)).andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$").isNotEmpty());
    }

    @Test
    public void findById() throws Exception {
        mockMvc.perform(
                get(host + "/1")).andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("tiago"));
    }

    @Test
    @Rollback
    public void insert() throws Exception {
        mockMvc.perform(
                post(host).content("{\"name\": \"test\"}").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }

    @Test
    @Rollback
    public void delete() throws Exception {
        mockMvc.perform(
                        post(host).content("{\"name\": \"test\"}").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(MockMvcRequestBuilders.delete(host + "/5"))
                .andDo(print())
                .andExpect(status().isOk());
    }

    @Test
    @Rollback
    public void update() throws Exception {
        mockMvc.perform(post(host).content("{\"name\": \"test\"}").contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        mockMvc.perform(put(host + "/5").content("{\"name\": \"teste2\"}").contentType(MediaType.APPLICATION_JSON)).andDo(print())
                .andExpect(status().isOk());
                //.andExpect(jsonPath("$.name").value("teste2"));
    }





}
