CREATE DATABASE agencia_viagens;

USE agencia_viagens;

CREATE TABLE contato (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    mensagem TEXT
);

CREATE TABLE reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    destino VARCHAR(100),
    transporte VARCHAR(50),
    data_viagem DATE
);