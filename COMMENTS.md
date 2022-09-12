<p align="center">
 <img width="128" src="https://maisaedu.com.br/hubfs/site-grupo-a/logo-mais-a-educacao.svg"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-82b547?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vue-3eaf7c?style=for-the-badge&logo=vue.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vuetify-1697f6?style=for-the-badge&logo=vuetify&logoColor=white">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
</p>

## Sumário

:small_blue_diamond: [Descrição](#descrição)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy](#deploy)

:small_blue_diamond: [Documentação](#documentação)

:small_blue_diamond: [Requisitos](#requisitos)

:small_blue_diamond: [Execute projeto](#execute-projeto)

:small_blue_diamond: [Tecnologias utilizadas](#tecnologias-utilizadas)

:small_blue_diamond: [Decisão técnicas](#decisão-técnicas)

:small_blue_diamond: [Autor](#autor)

:small_blue_diamond: [Licença](#licença)

## Descrição

<p align="justify">
  MVP of Wet Bat Travel functions to create quotes
</p>

## Funcionalidades

:heavy_check_mark: Listar estudantes

:heavy_check_mark: Exibir estudante

:heavy_check_mark: Salvar estudante

:heavy_check_mark: Atualizar estudante

:heavy_check_mark: Excluir estudante

## Requisitos

:warning: [Node:^16](https://nodejs.org/en/download/)

:warning: [PostgreSQL](https://www.postgresql.org/) ou [MySQL](https://www.mysql.com/)

## Execute projeto

No terminal, clone o projeto

```
git clone https://github.com/tharlei/challenge-full-stack-web.git
```

Entre na pasta

```
cd challenge-full-stack-web
```

Instale dependências npm

```
npm i && npm i --prefix server/
```

Copie .env.example para .env e preencha com informações

```
cp .env.example .env && cp server/.env.example server/.env
```

Execute as migrations

```
npm run typeorm --prefix server/ -- migration:run
```

Execute o projeto no modo desenvolvimento

```
npm run dev
```

## Tecnologias utilizadas

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Typescript](https://www.typescriptlang.org/)
- [Vue.js](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Sweet Alert](https://sweetalert2.github.io/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Vuetify](https://next.vuetifyjs.com/en/)
- [TypeORM](https://typeorm.io/)
- [Vue3 Easy Data Table](https://github.com/HC200ok/vue3-easy-data-table)
- [UUID](https://github.com/uuidjs/uuid)

## Decisão técnicas

### Arquitetura

- Em único repositório possui dois projetos. Na raiz fica o front-end e dentro pasta "server" na raiz, o back-end.
- Front-end: Vue.js 3 com Typescript e Composition API, compilado com Vite e biblioteca gráfica Vuetify
- Back-end: Node.js com Typescript, Express e TypeORM para gerenciamento do banco.

### Pastas

- Pasta "infra" são classes que tem uma externa dependência em algo.
- Pasta "repository" tem a responsabilidade por manipular banco de dados.
- Pasta "queries" tem intenção de retornar dados já filtrados ou não do banco de dados.
- Pasta "services" visa executar alguma lógica antes de enviar para uma dependência externa.
- Pasta "shared" são lógicas compartilhadas dentro do projeto.

### Melhorias futuras

- Adicionar autenticação com [bcrypt](https://github.com/kelektiv/node.bcrypt.js) e [JWT](https://github.com/auth0/node-jsonwebtoken)
- Cacheamento usando o [Redis](https://github.com/redis/node-redis).
- Ao concluir cadastro, disparar tarefa com [Bull](https://github.com/OptimalBits/bull) para envio de e-mail de bem-vindo.

## Autor

[<img src="https://avatars2.githubusercontent.com/u/32899049?s=460&u=946f73939bb511fa8ae40ed80764cc4dbffe359f&v=4" width=115><br><sub>Tharlei Aleixo</sub>](https://github.com/Tharlei)

## Licença

The [MIT License]() (MIT)

Copyright :copyright: 2022 - challenge-full-stack-web
