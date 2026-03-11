# CHANGELOG

## [1.3.0] - 2026-03-11
### Adicionado
- **Nova Logo Oficial**: Implementada a logo inspirada no "Leão do Imposto de Renda" na Navbar e no Footer (`leao-imposto.png`), customizando o portal para a Consultoria Thays Morais.
- **Design System Premium**: Atualizado `tailwind.config.js` com variáveis de animação (`scale-in`, `fade-in-up`, `pulse-soft`) e texturas (sombras `glass`, `3d`, `3d-hover`).
- **Glassmorphism Base**: Inseridas classes dinâmicas em `index.css` (`.glass`, `.glass-dark`, `.card-3d`, `.hover-lift`).

### Alterado
- **Modais e Cards 3D**: Componentes chave (`LeadFunnelModal.tsx`, `OperationalFlow.tsx`, `ServiceMatrix.tsx`) reestilizados para suportar Glassmorphism (desfoque, bordas sutis) e profundidade 3D nas interações de clique/hover.
- **Botões Dinâmicos**: Componente de botão global refatorado para ter inner shadows 3D e efeito tátil realista (`active:scale-[0.98]`).

## [1.2.0] - 2026-03-10
### Adicionado
- **Migração de Projeto Stitch**: Substituída a landing page anterior pelo projeto "Thays Morais - Site Profissional Expandido" (Stitch ID: 6226505574339480181).
- **Layout Thays Morais**: Implementada nova estrutura React em `App.tsx` com seções completas: Hero, Valores Estratégicos, Processo de Consultoria, Sobre Mim, Serviços, Insights, FAQ e Contato.
- **Tipografia e Estilo**: Estilos e tipografia específicos integrados ao `index.css` global (`Inter` font).

## [1.1.0] - 2026-03-10
### Alterado
- Configuração do Vite para utilizar porta dinâmica (`--port 0`) no ambiente de desenvolvimento, garantindo que o projeto sempre inicie mesmo se a porta padrão estiver ocupada.

## [2026-03-05]
### Adicionado
- **Layout Obsidian Elite (Navbar & Footer)**: Refatoração premium dos componentes de navegação com animações de entrada via Framer Motion, micro-interações de hover e estética ultra-clean (fundo dinâmico e logos com brilho neon suave).
- **Design Cinematográfico (Sprint 1 & 2)**: Implementação de scroll-reveals e parallax sutis em todas as seções principais (Hero, OperationalFlow, ServiceMatrix, ValidationLog, Authority), garantindo uma experiência visual de alto impacto.
- **Dark Mode Obsidian Elite**: Transição completa para paleta Slate 950/Zinc.
- **Design System Semântico**: Substituição de classes `navy-*` por variáveis CSS padrão do Shadcn (`background`, `muted-foreground`, etc.).
- **Integração Firecrawl MCP**: Instalado e configurado o servidor Firecrawl para extração de dados e web scraping.
- **Funil de Qualificação de Leads**: Implementado wizard multi-step interativo na CTA substituindo o formulário genérico, com redirecionamento para o WhatsApp da ConectaDev.
- **Árvore de Decisão Consultiva (Progressive Profiling)**: Upgrade no Funil de Leads para 6 passos dinâmicos que se adaptam por nicho, capturando Dores Reais, Maturidade da Empresa, Urgência e Expectativa de Investimento B2B/B2C para máxima qualificação.

### Corrigido
- **Fix Crítico de Renderização**: Erro de sintaxe no componente `OperationalFlow` (tag JSX duplicada).
- **Hero Section**: Removida exportação duplicada e corrigidos tipos que causavam tela branca.
- **Consistência de Botões**: Unificados todos os botões de ação para utilizarem o componente `Button` da branch UI, garantindo visual premium.
