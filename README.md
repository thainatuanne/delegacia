# 🕵️‍♀️ Sistema de Gerenciamento da Delegacia

Projeto desenvolvido para informatizar o sistema de uma delegacia de polícia de uma cidade fictícia, permitindo o cadastro e a consulta de **criminosos**, **crimes**, **armas** e **endereços** relacionados.

---

## 📚 Descrição

Neste sistema, cada criminoso pode estar envolvido em **vários crimes**, mas cada crime é atribuído a **apenas um criminoso**. Os crimes podem envolver o uso de **uma ou mais armas**, sendo que **cada arma é apreendida** e, portanto, **não pode ser reutilizada** em outros crimes.

Este projeto segue os princípios de **Programação Orientada a Objetos (POO)**, **Clean Code** e o padrão de organização de pastas em **Controller - Service - DTO - Routes**, com tratamento de erros reutilizável e uso do ORM **Prisma**.

---

## 💠 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postman](https://www.postman.com/) para testes
- [Dotenv](https://www.npmjs.com/package/dotenv) para variáveis de ambiente

---

## 🧱 Estrutura de Pastas

```bash
src/
├── controllers/
├── dtos/
├── services/
├── routes/
├── database/
├── utils/
└── index.ts
```

---

## 🔄 Funcionalidades

### 🔹 Endereços
- `POST /enderecos` → Cadastrar endereço
- `GET /enderecos` → Listar todos
- `GET /enderecos/:id` → Buscar por ID

### 🔹 Criminosos
- `POST /criminosos` → Cadastrar criminoso
- `GET /criminosos` → Listar todos
- `GET /criminosos/:id` → Buscar por ID

### 🔹 Crimes
- `POST /crimes` → Cadastrar crime (com armas)
- `GET /crimes` → Listar todos
- `GET /crimes/:id` → Buscar por ID

### 🔹 Armas
- `POST /armas` → Cadastrar arma
- `GET /armas` → Listar todas
- `GET /armas/:id` → Buscar por ID

---

## 🚀 Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/delegacia-crud.git
cd delegacia-crud

# Instale as dependências
npm install

# Configure o .env com sua DATABASE_URL
cp .env.example .env

# Execute as migrations
npx prisma migrate dev

# Inicie o servidor
npm run dev
```

---

## ✅ Testes com Postman

Todas as rotas podem ser testadas utilizando o Postman. É possível cadastrar entidades e fazer consultas.

Se desejar, você pode importar a Collection do Postman para facilitar os testes.

---

## 🧠 Aprendizados

- Relacionamentos 1:N e 1:1 com Prisma
- Organização em camadas (Controller, Service, DTO)
- Boas práticas REST
- Reutilização de código com utils e tratamento de erros
- Documentação e testes de rotas

---

Feito com ❤️ para fins de estudo.
