package com.agenciaviagens.service;

import com.agenciaviagens.model.Reserva;
import com.agenciaviagens.repository.ReservaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservaService {

    @Autowired
    private ReservaRepository reservaRepository;

    // salvar reserva
    public Reserva salvarReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    // listar reservas
    public List<Reserva> listarReservas() {
        return reservaRepository.findAll();
    }

    // buscar reserva por id
    public Reserva buscarPorId(Long id) {
        return reservaRepository.findById(id).orElse(null);
    }

    // deletar reserva
    public void deletarReserva(Long id) {
        reservaRepository.deleteById(id);
    }
}