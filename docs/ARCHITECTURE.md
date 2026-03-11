# ARCHITECTURE OVERVIEW

## System Components
- **Frontend**: Single Page Application em React, TypeScript e Vite. O layout foi totalmente portado de um protótipo Stitch (`index.html` original) para componentes JSX (`App.tsx`).
- **Data Management**: Arquitetura centralizada de dados em `src/data/content.ts` (Single Source of Truth) para isolar copywriting, links e estruturas das seções visuais facilitando a manutenção futura sem impactar o layout.
- **Styling**: Tailwind CSS complementado com variáveis CSS globais e classes utilitárias semânticas em `src/index.css`.
- **Backend/Tools**: Antigravity AI Agent with MCP integrations. Integração direta e inteligente do *Lead Funnel* para o WhatsApp Expert da Especialista via Intent URL Format.

## MCP Infrastructure
- **Stitch MCP**: Remote server proxy for specialized Google-powered tools.
- **Firecrawl MCP**: Local node-based MCP server for high-performance web scraping.
- Connected via `mcp_config.json` in the `.gemini/antigravity` directory.

## Design System & UX Methodology
- **VIBE DEV & Premium Aesthetics**: O projeto implementa princípios modernos de UI focados na conversão, como Glassmorphism (efeito vidro nas cartas de apresentação com `backdrop-blur`), Grids Assimétricos para alocação natural de leitura, e Efeitos 3D sensíveis à interação (`hover-lift`, `card-3d`).
- **Icons**: Lucide-react para padronização de ícones sociais (Instagram, LinkedIn).
- **Responsive Approach**: Filosóficamente construído do Mobile para o Desktop, utilizando de Tailwind breakpoints integrados semanticamente.

## Development Environment
- **Port Management**: Uses dynamic port allocation (`--port 0`) to avoid conflicts during local development.
