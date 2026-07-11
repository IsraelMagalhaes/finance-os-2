# Sprint 1.1 — Design System Foundations

## Objetivo

Centralizar as decisões visuais do Finance OS antes da construção dos componentes de interface.

## Entregas

- Paleta de marca e cores semânticas.
- Temas escuro, claro e preferência do sistema.
- Persistência da preferência visual.
- Escala de espaçamento baseada em 4 px.
- Tokens de raios, sombras, movimento e z-index.
- Integração dos tokens com Tailwind CSS 4.
- Estilos globais de foco, seleção e movimento reduzido.
- Página executável de validação visual.

## Decisões

- Dark mode continua sendo o padrão.
- Tokens CSS são a fonte única da verdade.
- Tailwind consome os tokens por meio de `@theme inline`.
- Componentes não devem declarar cores arbitrárias quando existir token equivalente.
- A preferência de tema usa uma chave isolada até a criação da camada de persistência da Sprint 2.

## Critérios de aceite

- O tema pode ser alternado sem recarregar a página.
- A preferência permanece após reiniciar a aplicação.
- O modo “Sistema” reage à preferência do sistema operacional.
- O projeto passa em lint, formatação e build.
- A interface mantém contraste e foco visível nos dois temas.
