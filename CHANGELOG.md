# CHANGELOG

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
