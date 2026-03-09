package com.agencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.agencia.model.Contato;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
}