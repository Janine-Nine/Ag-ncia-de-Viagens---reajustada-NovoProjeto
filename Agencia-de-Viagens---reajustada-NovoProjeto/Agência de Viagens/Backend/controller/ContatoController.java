package com.agencia.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.agencia.model.Contato;
import com.agencia.service.ContatoService;

@RestController
@RequestMapping("/contato")
@CrossOrigin("*")
public class ContatoController {

    @Autowired
    private ContatoService service;

    @PostMapping
    public Contato salvar(@RequestBody Contato contato){
        return service.salvar(contato);
    }
}