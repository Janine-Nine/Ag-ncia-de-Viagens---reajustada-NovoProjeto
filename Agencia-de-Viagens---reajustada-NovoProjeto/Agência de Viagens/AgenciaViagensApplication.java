package com.agenciaviagens;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AgenciaViagensApplication {

    public static void main(String[] args) {
        SpringApplication.run(AgenciaViagensApplication.class, args);
        System.out.println("🚀 Servidor da Agência de Viagens iniciado com sucesso!");
    }
}