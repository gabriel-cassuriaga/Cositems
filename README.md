# CosItems - Loja de Cosplays Artesanais

**CosItems** é uma loja de cosplays artesanais fictícia, desenvolvida como parte do Trabalho de Conclusão de Curso (TCC) do curso Técnico de Informática da Fundatec. Este projeto foi criado por João Gabriel e Raul.

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Funcionalidades](#funcionalidades)
- [Licença](#licença)

## Sobre o Projeto

CosItems é uma plataforma que simula uma loja online especializada em cosplays artesanais. A loja oferece uma interface moderna e amigável para que os usuários possam navegar, visualizar e adquirir produtos de cosplay. Este projeto visa combinar habilidades em frontend e backend para criar uma experiência completa e funcional para o usuário final.

## Tecnologias Utilizadas

### Frontend
- **React** com **Vite**.
- **Axios** para chamadas HTTP.
- **React Router DOM** para navegação entre páginas.
- **Tanstack Query** para gerenciamento de estado de dados e cache no frontend.

### Backend
- **Java 17** com **Gradle** como gerenciador de dependências.
- **Spring Boot** com:
  - `spring-boot-starter-data-mongodb` para integração com banco de dados MongoDB.
  - `spring-boot-starter-web` para criar uma API REST.
  - `lombok` para simplificar a criação de classes Java.
  - `spring-boot-devtools` para um ambiente de desenvolvimento mais rápido.
  - `spring-boot-starter-test` e **JUnit** para testes automatizados.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- **Node.js** e **npm** para o frontend.
- **Java 17** e **Gradle** para o backend.
- **MongoDB** como banco de dados.

## Instalação
1. Clone o repositório
    ```bash
      git clone https://github.com/gabriel-cassuriaga/CosItems.git

### Backend
1. Navegue até a pasta do backend:
   ```bash
   cd CosItems/backend/cositems

2. Compile o projeto com o Gradle:
   ```bash
   ./gradlew build
   
3. Execute a aplicação:
   ```bash
   ./gradlew bootRun
   
### Frontend
1. Navegue até a pasta do frontend
    ```bash
    cd CosItems/frontend/cositems

2. Instale as dependências:
    ```bash
    # Instala o axios
    npm install axios
    
    # Instala o react-router-dom
    npm install react-router-dom
    
    # Instala o @tanstack/react-query
    npm install @tanstack/react-query
    
3. Inicie o servidor de desenvolvimento:
     ```bash
     npm run dev

4. Acesse a aplicação em [http://localhost:5173/](http://localhost:5173/)

## Funcionalidades

- **Frontend**
  - Navegação por categorias e pesquisa de produtos.
  - Detalhamento de produtos e carrinho de compras.
  - Finalização de pedidos.

- **Backend**
  - API REST para gerenciamento de produtos e pedidos.
  - Conexão com MongoDB para armazenamento de dados.
  - Testes automatizados com JUnit.

## Licença

Este projeto é licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

