package com.agencia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.agencia.model.Reserva;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
}