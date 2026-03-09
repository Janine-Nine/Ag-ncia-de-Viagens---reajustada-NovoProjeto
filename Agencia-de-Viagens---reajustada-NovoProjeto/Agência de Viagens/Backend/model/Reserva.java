package com.agencia.model;

import jakarta.persistence.*;

@Entity
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;
    private String destino;
    private String transporte;
    private String dataViagem;

    // getters e setters
}