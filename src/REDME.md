# 📌 API de Gerenciamento de Tarefas

## Descrição da API

Esta é uma API desenvolvida em Node.js puro para gerenciamento de tarefas.

A aplicação permite:

* Criar tarefas
* Listar tarefas
* Buscar tarefa por ID
* Atualizar título
* Marcar como concluída
* Deletar tarefas
---

## Tecnologias Utilizadas

* Node.js
* JavaScript
* Módulo HTTP

---

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/joaocarlos-lima/API-tarefas-PWII
```

2. Acesse a pasta do projeto:

```bash
cd seu-repo
```

Obs: Este projeto não utiliza dependências externas.

---

## Execução

Para iniciar o servidor, execute:

```bash
node app.js
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## Endpoints da API

### Criar tarefa

* Método: POST
* URL: `/tasks`
* Body:

```json
{
  "title": "Estudar Node.js"
}
```

---

### Listar tarefas

* Método: GET
* URL: `/tasks`

---

### Buscar tarefa por ID

* Método: GET
* URL: `/tasks/:id`

---

### Atualizar título

* Método: PUT
* URL: `/tasks/:id`
* Body:

```json
{
  "title": "Novo título"
}
```

---

### Atualizar status (concluído)

* Método: PATCH
* URL: `/tasks/:id`
* Body:

```json
{
  "completed": true
}
```

---

### Deletar tarefa

* Método: DELETE
* URL: `/tasks/:id`

---

## Explicação da Solução

O projeto foi estruturado utilizando uma arquitetura em camadas, separando responsabilidades:

* **Controller**: Responsável por lidar com requisições e respostas HTTP.
* **Service**: Contém a lógica de negócio da aplicação.
* **Model**: Define a estrutura dos dados (tarefas).
* **Routes**: Faz o roteamento das requisições com base na URL e método HTTP.

A leitura do corpo das requisições (body) foi feita manualmente utilizando eventos (`data` e `end`) do Node.js, convertendo os dados para JSON.

As tarefas são armazenadas em um array em memória, com IDs incrementais.

---
