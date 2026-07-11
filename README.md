# Finance OS

Sistema financeiro pessoal premium, desenvolvido de forma incremental a partir do Finance OS Blueprint.

## Status

**Versão:** `0.1.0-alpha.0`  
**Sprint atual:** Sprint 0 — Preparação do projeto

## Stack inicial

- React 19
- Vite 8
- Tailwind CSS 4
- JavaScript moderno
- ESLint
- Prettier
- Husky
- lint-staged

## Requisitos

- Node.js 22.12 ou superior
- npm 10 ou superior

## Execução

```bash
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`.

## Comandos

```bash
npm run dev          # ambiente de desenvolvimento
npm run build        # build de produção
npm run preview      # pré-visualização do build
npm run lint         # validação estática
npm run lint:fix     # correção automática do lint
npm run format       # formatação do projeto
npm run format:check # validação da formatação
npm run check        # lint + formatação + build
```

## Estrutura

```text
src/
├── assets/
├── components/
├── features/
├── hooks/
├── services/
├── utils/
├── data/
├── constants/
└── styles/

docs/
├── blueprint/
├── decisions/
└── changelog/
```

## Regras arquiteturais

- Componentes não devem acessar diretamente mecanismos de persistência.
- Regras financeiras deverão permanecer fora da camada visual.
- Novos módulos deverão ser organizados por feature.
- Valores monetários serão representados em centavos quando a persistência for implementada.
- Toda mudança estrutural relevante deverá possuir documentação.

## Roadmap imediato

A próxima etapa é a **Sprint 1 — Design System e shell da aplicação**.

## Licença

Uso privado durante a fase inicial do projeto.
