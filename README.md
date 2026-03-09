## F R O N T E N D ##

---

# ✈️ Agência de Viagens JTC

Sistema web de uma **Agência de Viagens** desenvolvido para apresentar destinos turísticos, hospedagens e permitir reservas de viagens.

O projeto possui **Frontend responsivo** e **Backend com API REST**, permitindo cadastro de reservas e envio de mensagens de contato.

---

# 🌍 Demonstração do Projeto

O site apresenta:

* Destinos nacionais
* Destinos internacionais
* Hospedagem
* Pagamentos
* Reserva de viagens
* Formulário de contato

Interface moderna com **HTML, CSS, Bootstrap e JavaScript**.

---

# 🧠 Tecnologias Utilizadas

## Frontend

* HTML5
* CSS3
* Bootstrap
* JavaScript
* Font Awesome

## Backend

* Java
* Spring Boot
* API REST
* MySQL

## Banco de Dados

* MySQL

---

# 📂 Estrutura do Projeto

```
Agencia-de-Viagens
│
├── Backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── application.properties
│
├── Frontend
│   ├── CSS
│   │   └── style.css
│   │
│   ├── js
│   │   └── script.js
│   │
│   ├── img
│   ├── img brasil
│   ├── img hospedagem
│   ├── img internacionais
│   ├── img viagens
│   │
│   ├── index.html
│   ├── contato.html
│   ├── destinos nacionais.html
│   ├── destinos internacionais.html
│   ├── hospedagem.html
│   ├── pagamentos.html
│   └── reserva.html
│
└── README.md
```

---

# 🚀 Funcionalidades

✔️ Visualização de destinos turísticos
✔️ Página de hospedagens
✔️ Sistema de reservas
✔️ Formulário de contato
✔️ Integração com API backend
✔️ Interface responsiva

---

# ⚙️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/seuusuario/agencia-viagens.git
```

---

### 2️⃣ Rodar o Backend

Entrar na pasta:

```
Backend
```

Executar o projeto Spring Boot.

O servidor irá iniciar em:

```
http://localhost:8080
```

---

### 3️⃣ Abrir o Frontend

Abrir o arquivo:

```
index.html
```

ou utilizar uma extensão como **Live Server no VS Code**.

---

# 🗄️ Banco de Dados

Criar banco MySQL:

```
CREATE DATABASE agencia_viagens;
```

Configurar no arquivo:

```
application.properties
```

---

# 📸 Interface do Sistema

O sistema possui páginas para:

* Home
* Destinos Nacionais
* Destinos Internacionais
* Hospedagem
* Pagamentos
* Reserva
* Contato

---

# 🎯 Objetivo do Projeto

Projeto desenvolvido para **prática de desenvolvimento Full Stack**, integrando:

* Interface web
* Backend com API
* Banco de dados

---

# 👩‍💻 Autora

Desenvolvido por **Janine**
Estudante de Tecnologia com foco em **Desenvolvimento Web Full Stack**.

---

# 📜 Licença

Projeto acadêmico para fins de estudo.

---

## B A C K E N D ##

---

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

