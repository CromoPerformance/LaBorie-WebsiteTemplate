# 🏖️ Guia de Transição & Handover — Hotel Le Relais La Borie

Este documento foi preparado para servir de **guia técnico, conceitual e de continuidade** para qualquer desenvolvedor ou agente de IA que assuma o projeto a partir deste ponto.

---

## 1. 📌 Visão Geral do Projeto

* **Cliente**: Hotel Le Relais La Borie (Búzios - RJ).
* **Conceito Central**: Hotel boutique de charme "pé na areia" na Praia de Geribá, unindo a tradição francesa à brasilidade tropical desde 1986.
* **Stack Tecnológica**:
  * **Framework**: React 19 (`react`, `react-dom`)
  * **Build Tool**: Vite 8 (`vite`, `@vitejs/plugin-react`)
  * **Estilização**: Vanilla CSS com Design Tokens (variáveis CSS no `:root`) e classes utilitárias
  * **Linter**: Oxlint (`oxlint`)
  * **Arquitetura**: Componentes funcionais modularizados com CSS pareado (`.jsx` + `.css`)

---

## 2. 🏛️ O Que Foi Construído Até Agora

O projeto atualmente conta com uma landing page completa, responsiva e interativa composta por 9 seções principais e um modal global de reservas:

1. **Header (`Header.jsx`)**:
   * Layout responsivo com efeito glassmorphism ao rolar a página.
   * Monograma da marca, menu de navegação com tracking ativo via `IntersectionObserver`.
   * Botão de CTA para reservas e seletor visual de idioma (PT / FR / EN).

2. **Hero Section (`HeroSection.jsx`)**:
   * Abertura visual marcante com overlay elegante.
   * Headline oficial: *"Onde a França encontra o mar de Búzios."*
   * CTA rápido para reserva e navegação por âncoras.

3. **About Section (`AboutSection.jsx`)**:
   * Apresentação do pilar *"Sua casa à beira-mar"*.
   * Destaque para o Jubileu de **40 Anos (1986–2026)** e a campanha *"40 Verões à Beira-Mar"*.
   * Layout editorial split com elementos gráficos refinados.

4. **Dining Section (`DiningSection.jsx`)**:
   * Showcase da experiência gastronômica no restaurante **Chez Françoise**.
   * União da alta gastronomia francesa com ingredientes frescos de Búzios.

5. **Rooms Section (`RoomsSection.jsx`)**:
   * Exibição das 7 categorias oficiais de acomodação (conforme o briefing oficial em `CONTEXT.md`):
     1. *Suíte Master Mar*
     2. *Suíte Master Jardim*
     3. *Master Mar*
     4. *Master Jardim*
     5. *Confort Mar*
     6. *Confort Jardim*
     7. *Standard / Variantes adicionais*
   * Carrossel / grid interativo com botão de reserva direta por acomodação.

6. **Indulge Section (`IndulgeSection.jsx`)**:
   * Seção de bem-estar (*Rêverie Tropicale*, massagens à beira-mar, piscinas aquecidas, jacuzzi).

7. **Floral Section (`FloralSection.jsx`)**:
   * Apresentação para eventos, mini-weddings e celebrações intimistas nos jardins tropicais do hotel.

8. **Captivating Section (`CaptivatingSection.jsx`)**:
   * Seção conceitual de alto impacto visual com estética impressionista / Monet.

9. **Queen Bedroom Section (`QueenBedroomSection.jsx`)**:
   * Detalhamento e destaque especial para a acomodação Queen / Master com fotos e comodidades detalhadas.

10. **Booking Modal (`BookingModal.jsx`)**:
    * Modal global gerenciado pelo estado no `App.jsx`.
    * Formulário com seleção de datas (check-in / check-out), número de hóspedes (adultos / crianças) e escolha de categoria de acomodação.

11. **Footer (`App.jsx` + `App.css`)**:
    * Rodapé em 3 colunas: Navegação rápida, Identidade central com Monograma LB e Tagline *"Desde 1986 | Búzios"*, Informações de contato/endereço e links legais.

---

## 3. 📂 Estrutura de Arquivos

```
test-laborie/
├── public/
│   ├── fonts/               # Fontes locais (NiveauGrotesk, Lucida Bright)
│   └── assets/              # Assets estáticos de mídia pública
├── src/
│   ├── assets/              # Imagens do projeto (hero.png, etc.)
│   ├── components/          # Componentes React + CSS pareados
│   │   ├── AboutSection.css
│   │   ├── AboutSection.jsx
│   │   ├── BookingModal.css
│   │   ├── BookingModal.jsx
│   │   ├── CaptivatingSection.css
│   │   ├── CaptivatingSection.jsx
│   │   ├── DiningSection.css
│   │   ├── DiningSection.jsx
│   │   ├── FloralSection.css
│   │   ├── FloralSection.jsx
│   │   ├── Header.css
│   │   ├── Header.jsx
│   │   ├── HeroSection.css
│   │   ├── HeroSection.jsx
│   │   ├── IndulgeSection.css
│   │   ├── IndulgeSection.jsx
│   │   ├── NotFoundSection.css
│   │   ├── NotFoundSection.jsx
│   │   ├── QueenBedroomSection.css
│   │   ├── QueenBedroomSection.jsx
│   │   ├── RoomsSection.css
│   │   └── RoomsSection.jsx
│   ├── App.css              # Estilos do layout base e Footer
│   ├── App.jsx              # Shell principal, IntersectionObserver e estado do Modal
│   ├── index.css            # Reset global, Design Tokens e fontes
│   └── main.jsx             # React DOM Root
├── CONTEXT.md               # Master Briefing Document (História, paleta, personas, diretrizes)
├── HANDOVER.md              # (Este arquivo) Guia de transferência do projeto
├── package.json             # Dependências e scripts
└── vite.config.js           # Configuração do bundler Vite
```

---

## 4. 🎨 Padrões de Design e Código

### 🎨 Paleta de Cores e Tokens CSS (`src/index.css`)
```css
:root {
  /* Cores Principais do Projeto */
  --forest:       #1D3A2F; /* Verde floresta tropical / identidade principal */
  --forest-dark:  #142A22;
  --forest-mid:   #244736;
  --gold:         #B8965A; /* Dourado / detalhes de luxo */
  --gold-light:   #C9AB78;
  --ivory:        #F7F4EE; /* Fundo alabastro off-white estilo editorial */
  --ivory-warm:   #F0EBE2;
  --charcoal:     #1A1714; /* Texto principal */
  --stone:        #7A7469; /* Textos secundários e legendas */
  --white:        #FFFFFF;

  /* Cores do Briefing Oficial (CONTEXT.md) */
  /* Azul Navy Profundo: #083572 | Azul Royal: #0064ff | Dourado: #a69149 */

  /* Tipografia */
  --font-serif:   'Lucida Bright', Georgia, serif;
  --font-sans:    'NiveauGrotesk', 'Helvetica Neue', sans-serif;
}
```

### 📐 Convenções de Componentes
1. **Pareamento de Arquivos**: Todo componente em `src/components/` possui seu respectivo `.jsx` e `.css`.
2. **Nomenclatura BEM**: As classes CSS seguem o padrão BEM ou pseudo-BEM (ex: `.header__inner`, `.hero__title`, `.rooms__card-body`).
3. **Prop Drilling de Callbacks**: Funções como `onBookNow` são passadas do `App.jsx` para os componentes filhos para abrir o modal centralizado.
4. **Respiro e Responsividade**: O layout usa variáveis `--section-v` (110px no desktop / 64px no mobile) e `--pad-h` (48px no desktop / 24px no mobile).

---

## 5. 💡 Dicas e Próximos Passos para o Próximo Agente

1. **Comandos Úteis**:
   * **Servidor de Desenvolvimento**: `npm run dev`
   * **Build de Produção**: `npm run build`
   * **Linter de Código**: `npm run lint`

2. **Consulta do Briefing**:
   * Sempre leia o arquivo [CONTEXT.md](file:///c:/Users/jmgvh/Desktop/test_antigravity/test-laborie/CONTEXT.md) para checar o tom de voz, regras de nomenclatura de quartos, história dos 40 anos e diretrizes do cliente.

3. **Melhorias Recomendadas**:
   * **Integração do Motor de Reservas**: Conectar o formulário do `BookingModal.jsx` com o sistema real (ex: Omnibees/Engine de reservas) ou gerar direcionamento via WhatsApp Business do hotel.
   * **Galeria Lightbox**: Adicionar visualização em tela cheia (Modal / Lightbox) ao clicar nas fotos das acomodações no `RoomsSection.jsx`.
   * **Internacionalização (i18n)**: Implementar suporte multilíngue dinâmico (PT-BR, FR, EN) utilizando `react-i18next` ou contexto local.
   * **Página de Erro 404 / Rotas Secundárias**: O arquivo `NotFoundSection.jsx` já está criado e pode ser integrado caso instale o `react-router-dom`.
   * **Animações de Scroll**: Adicionar `Framer Motion` ou animações sutis de fade-in no scroll para aumentar a sensação de sofisticação boutique.

---
*Documento gerado para fácil transição entre agentes.* 🚀
