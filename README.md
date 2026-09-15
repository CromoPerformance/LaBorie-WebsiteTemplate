# Website · Hotel Le Relais La Borie

Site oficial do **Hotel Le Relais La Borie** (Búzios, RJ): hotel boutique de charme pé na
areia na Praia de Geribá, desde 1986. Stack React 19 + Vite, com 4 idiomas (PT / EN / FR / ES).

## Stack

- React 19 + Vite 8 (build estático SPA)
- CSS com design tokens (`src/index.css`), direção editorial francês à beira-mar
- Tipografia: Cormorant Garamond (display) + Niveau Grotesk (corpo/UI), Niveau servida
  localmente em `public/fonts/`
- Política de marca aplicada: sem travessão (—), sem termos "luxo"/"5 estrelas", sem fotos
  da família fundadora, nomes reais das suítes
- i18n próprio (`src/i18n.jsx`): dicionário PT/EN/FR/ES + switcher no header

## Desenvolvimento

```bash
npm install
npm run dev      # dev server
npm run build    # build de produção em dist/
```

## Estrutura

```
├─ src/
│  ├─ App.jsx            Composição das seções + footer + modal de reserva
│  ├─ App.css            Estilos globais (tokens, reveal, ken-burns)
│  ├─ i18n.jsx           Provider + dicionário PT/EN/FR/ES
│  ├─ index.css          Design tokens, sistema [data-reveal], prefers-reduced-motion
│  └─ components/        Header (menu + idiomas), Hero, About, Historia, Dining,
│                        Rooms + SuitesCarousel, Floral, Indulge, Contact, BookingModal
└─ public/
   ├─ rooms/*.avif       Fotos reais das 8 suítes (baixadas do site atual)
   ├─ fonts/             Niveau Grotesk (otf)
   └─ *.avif / favicon   Imagens institucionais
```

## Configuração

- Contato: `src/components/ContactSection.jsx` (endereço, telefone, e-mail, WhatsApp)
- Suítes: títulos/descrições em `src/i18n.jsx` (`suites.list`)
- Reserva: modal `src/components/BookingModal.jsx` (CTAs levam ao modal; integrar motor
  de reservas quando disponível)

## Regras de marca em vigor

- ✅ Nomes reais das suítes (Lua de Mel + 7 categorias do briefing)
- ✅ Sem cardápio com preços e sem carta de vinhos
- ✅ Sem formulários longos, sem pop-ups, sem chatbots
- ✅ Sem "hotel 5 estrelas" / "hotel de luxo"; tom editorial e acolhedor
- ✅ Sem travessão nos textos; sem emojis; sem fotos da família fundadora
- ✅ Selo dos 40 Verões e campanha "40 Verões à Beira-Mar"

## Deploy

Hospedado na Vercel (deploy automático na branch `main`).