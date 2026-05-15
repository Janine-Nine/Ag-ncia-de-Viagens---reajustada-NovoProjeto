# ✈️ Agência de Viagens JTC

![Java](https://img.shields.io/badge/Java-17-red)
![Spring Boot](https://img.shields.io/badge/SpringBoot-3-green)
![MySQL](https://img.shields.io/badge/MySQL-8-blue)
![Docker](https://img.shields.io/badge/Docker-ready-blue)
![License](https://img.shields.io/badge/license-MIT-purple)

Sistema Full Stack de **Agência de Viagens** com reservas, pagamentos e painel administrativo.

---

# 🌍 Sobre o Projeto

Aplicação web que permite:

- visualizar destinos turísticos
- realizar reservas
- gerenciar hospedagens
- realizar pagamentos
- acessar painel administrativo

O sistema possui **Frontend responsivo** e **Backend com API REST segura usando JWT**.

---

# 🚀 Tecnologias

## Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

## Backend
- Java
- Spring Boot
- Spring Security
- JWT

## Banco de Dados
- MySQL

## DevOps
- Docker
- AWS
- GitHub Actions

---

# 📂 Estrutura do Projeto

agencia-viagens
│
├── Backend
│ ├── controller
│ ├── service
│ ├── repository
│ ├── model
│ ├── security
│ └── AgenciaViagensApplication.java
│
├── Frontend
│ ├── css
│ ├── js
│ ├── img
│ ├── index.html
│ ├── contato.html
│ ├── reserva.html
│ └── pagamentos.html
│
├── docker-compose.yml
├── Dockerfile
└── README.md

---

# 📊 Funcionalidades

✔ Cadastro de reservas  
✔ Pagamento online  
✔ Login com JWT  
✔ Painel administrativo  
✔ API REST  
✔ Dashboard de reservas  

---

# ⚙️ Como Executar

### Clonar o projeto

```bash
git clone https://github.com/seuusuario/agencia-viagens.git

---

👩‍💻 Autora

Desenvolvido por Janine

Estudante de Tecnologia focada em Desenvolvimento Web Full Stack.

---

📜 Licença

MIT


---

# ⭐ 2. Diagrama de arquitetura

          Internet
             │
       ┌───────────┐
       │  Frontend │
       │ HTML/CSS  │
       │ Bootstrap │
       └─────┬─────┘
             │
             │ HTTP
             │
      ┌──────▼──────┐
      │ Spring Boot │
      │   API REST  │
      └──────┬──────┘
             │
    ┌────────▼────────┐
    │  MySQL Database │
    └────────┬────────┘
             │
    ┌────────▼────────┐
    │   Stripe API    │
    │   Pagamentos    │
    └─────────────────┘

    Arquitetura usada em produção:


S3 (Frontend)
│
CloudFront CDN
│
EC2 (Spring Boot API)
│
RDS MySQL


---

# ⭐ 3. API documentada com Swagger

```xml
<dependency>
<groupId>org.springdoc</groupId>
<artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
<version>2.3.0</version>
</dependency>

