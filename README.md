# Maison Aurum: Landing Page de Luxo em Angular

Landing page e-commerce fictícia de **relógios, pulseiras e roupas de luxo**, criada em Angular 19 para portfólio. O destaque é um relógio em SVG que marca a **hora real do visitante** na hero.

🔗 **Demo:** `landingpage-luxury-angular.vercel.app` (troque pelo seu link)

## Funcionalidades

- Hero com relógio animado em SVG, sincronizado com o horário atual
- Catálogo com 9 produtos e filtro por categoria (Relógios, Pulseiras, Roupas)
- Sacola de compras funcional: adicionar, alterar quantidade, total e finalização simulada
- Formulário de newsletter com validação de e-mail
- Valores formatados em reais (pt-BR)
- Layout responsivo, foco visível no teclado e suporte a `prefers-reduced-motion`
- Deploy pronto para a Vercel, com `vercel.json` incluído

## Tecnologias

- [Angular 19](https://angular.dev): standalone components, signals e novo control flow (`@if`, `@for`, `@switch`)
- TypeScript (strict) e SCSS
- Google Fonts: Cormorant Garamond e Jost
- Vercel (hospedagem)

## Estrutura

```
src/
├── app/
│   ├── app.component.ts      # Header, hero, atelier, newsletter e rodapé
│   ├── catalog.component.ts  # Catálogo e filtros
│   ├── cart.component.ts     # Gaveta da sacola
│   ├── cart.service.ts       # Estado da sacola com signals
│   └── products.ts           # Modelo e dados dos produtos
├── index.html
├── main.ts
└── styles.scss               # Design tokens e estilos globais
```

## Como rodar localmente

Pré-requisitos: [Node.js](https://nodejs.org) 20 ou superior e Git.

```bash
git clone https://github.com/SEU-USUARIO/maison-aurum.git
cd maison-aurum
npm install
npm start
```

Acesse `http://localhost:4200`.

## Build de produção

```bash
npm run build
```

Os arquivos são gerados em `dist/maison-aurum/browser`.

## Deploy na Vercel

1. Envie o projeto para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), clique em **Import** no repositório.
3. Mantenha o preset **Angular** (ou use o `vercel.json` já incluído) e clique em **Deploy**.

Ou pela CLI:

```bash
npm i -g vercel
vercel --prod
```

## Personalização

- **Produtos:** edite `src/app/products.ts`.
- **Cores:** altere as variáveis em `:root`, no topo de `src/styles.scss`.
- **Nome da marca:** busque por "Maison Aurum" em `app.component.ts` e `index.html`.

## Autor

**Samuel Lazarin** · [LinkedIn](https://linkedin.com/in/samuel-lazarin) · [GitHub](https://github.com/Lazarin123)

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes. Marca e produtos são fictícios.
