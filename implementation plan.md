# Plano de Implementação: GALLERIA GRAND HOTEL (Website Baseado na Referência)

Desenvolver um website de hotel de altíssimo padrão ("GALLERIA GRAND HOTEL") com estéticas editoriais sofisticadas, paleta de cores dramática, tipografia clássica serifada e interatividade moderna, replicando fielmente cada uma das páginas/seções exibidas na imagem de referência.

## Identidade Visual & Design System

Baseado no painel da imagem de referência:

- **Tipografia**:
  - *Serifas de Alta Moda / Editorial*: `Cormorant Garamond` & `Cinzel` (para títulos grandes como *A DESTINATION UNTO ITSELF*, *FOREVER IN BLOOM*, *QUEEN BEDROOM*, *ROOMS*, *404 TAKE ME BACK HOME*).
  - *Sans-Serif Limpa*: `Plus Jakarta Sans` / `Inter` para sub-títulos, legendas e botões.
- **Paleta de Cores por Seção**:
  - **Terracota / Vermelho Nobre**: `#8C2518` (Seção Hero "A Destination Unto Itself")
  - **Midnight Navy / Azul Escuro**: `#151928` / `#111523` (Seção 404 e "Eternal Captivation")
  - **Verde Sálvia / Verde Musgo**: `#2C3528` / `#364132` (Seção "Rooms" e Gastronomia)
  - **Creme / Areia Classico**: `#F3EFE7` / `#EBE6DD` (Seção "Queen Bedroom" e "Indulge")
  - **Dourado Suave / Champanhe**: `#E5C687` / `#D4AF37` (Acentos no tema escuro)
- **Elementos Visuais Característicos**:
  - Molduras pretas/brancas em fotografias arquivísticas e quadros a óleo clássicos.
  - Relógio vintage sobrepostos a cartões ("Check Availability" e botões).
  - Acentos de flores ilustradas/fotográficas (flores em 404 e "Forever in Bloom").
  - Botões pílula com bordas finas e setas minimalistas `➔`.
  - Badges circulares para botões de ação ("BOOK NOW", "CHECK AVAILABILITY").

---

## Estrutura da Aplicação & Páginas/Seções

O site contará com navegação fluida entre todas as páginas/seções demonstradas na referência, permitindo ao usuário navegar via menu fixo superior ou rolar as seções curtas e marcantes.

### 1. Header Fixo & Barra de Navegação (Global)
- Logo centralizado/à esquerda: **GALLERIA** `GRAND HOTEL`.
- Navegador de Páginas/Seções: *Home*, *Rooms*, *Dining*, *Indulge*, *404 Preview*.
- Botão interativo superior direito: `BOOK NOW` com badge circular de toggle/status.

### 2. Seção 1: Hero - "A DESTINATION UNTO ITSELF"
- **Fundo**: Vermelho Terracota profundo.
- **Título**: "A DESTINATION UNTO ITSELF" em caixa alta com tipografia serifada editorial.
- **Descrição**: Texto centralizado descrevendo a experiência em Nova York / hotel boutique.
- **Galeria Inferior**: Carrossel/grid de fotos P&B arquivísticas emolduradas (arquitetura vintage, jazz, táxis e vida urbana retrô).

### 3. Seção 2: Dark Floral - "FOREVER IN BLOOM"
- **Fundo**: Tema escuro com pintura a óleo clássica de vaso de flores ao fundo.
- **Título**: "FOREVER IN BLOOM" com texto dourado reluzente.
- **Texto e Botão**: Parágrafo descritivo e botão pílula `BOOK NOW`.

### 4. Seção 3: Suítes - "ROOMS" & "QUEEN BEDROOM"
- **Página/Seção 3A: "ROOMS"**:
  - Fundo Verde Sálvia com imagens divididas de quartos sofisticados.
  - Título "ROOMS" sobreposto à foto e link "LEARN MORE".
- **Página/Seção 3B: "QUEEN BEDROOM"**:
  - Fundo Creme/Areia.
  - Título principal "QUEEN BEDROOM" acompanhado do badge flutuante de relógio vintage "CHECK AVAILABILITY".
  - Grid de 3 fotografias emolduradas (Sofá verde, banheira de imersão, leitor de jornal vintage).
  - Abas interativas na parte inferior: `FEATURES ➔`, `AMENITIES ➔`, `FLOORPLAN ➔`.

### 5. Seção 4: Gastronomia - "THE VELVET GROVE", "ELYSIAN EMBER", "CELESTE & NOIR"
- **Fundo**: Verde Oliva e Creme.
- **Cartões de Pratos & Ambientes**:
  - *The Velvet Grove*: Foto de prato com aspargos e ovo pochê.
  - *Elysian Ember*: Foto de taças de champanhe e salão aconchegante.
  - *Celeste & Noir*: Foto de coquetéis artesanais e jantar à luz de velas.
- **Interatividade**: Clique nos cartões abre detalhes do menu gastronômico e reserva de mesa.

### 6. Seção 5: Arte & Galeria - "INDULGE"
- **Fundo**: Beige Claro.
- **Layout**: Título "INDULGE" com galeria de pinturas a óleo emolduradas (paisagens clássicas, mares e montanhas) com efeito lightbox ao clicar.

### 7. Seção 6: Página Interativa 404 - "404 TAKE ME BACK HOME"
- **Fundo**: Azul Navy Noturno.
- **Design**: Tipografia gigante "404 TAKE ME BACK HOME" decorada artisticamente com elementos botânicos (papoula roxa, besouro e relógio antigo embutido nas letras).
- **Ação**: Botão pílula `GO BACK` que retorna ao início com transição suave.

### 8. Modal Interativo de Reserva ("BOOK NOW")
- Drawer / Modal moderno de reserva com seleção de datas, quantidade de hóspedes, escolha da suíte (*Queen Bedroom*, *Royal Suite*, *Presidential Suite*) e confirmação visual instantânea.

---

## Proposta Tecnológica

- **Framework**: React (Vite) para rendering ultra rápido, navegação por abas/seções e estados interativos.
- **Estilização**: CSS Modular / Vanilla CSS puro com variáveis CSS para cada tema (Terracotta, Navy, Sage, Sand, Floral), garantindo máxima fidelidade aos detalhes visuais, fontes do Google Fonts e animações suaves.
- **Ícones & Micro-Animações**: Lucide-React para ícones elegantes, transições CSS e animações no hover.

---

## Plano de Verificação

### Testes Automatizados & Build
- Executar `npm run build` para garantir zero erros de TypeScript/JSX ou imports.
- Executar o servidor dev com `npm run dev` para validar a aplicação no navegador.

### Verificação Manual Visual
- Comparar cada seção desenvolvida diretamente com a imagem `input_file_0.png`:
  - Verificar tipografia e caixa das letras.
  - Verificar proporções das molduras das imagens.
  - Verificar paleta de cores idêntica.
  - Testar modais de reserva, navegação entre seções, abas de amenities e página 404.

---

## Solicitando Aprovação do Usuário
Por favor, revise o plano acima. Assim que aprovado, iniciaremos a criação do projeto e o desenvolvimento dos componentes.
