# ARCHITECTURE OVERVIEW

## System Components
- **Frontend**: Single Page Application em React, TypeScript e Vite. O layout foi totalmente portado de um protótipo Stitch (`index.html` original) para componentes JSX (`App.tsx`).
- **Styling**: Tailwind CSS complementado com variáveis CSS globais e classes utilitárias semânticas em `src/index.css`.
- **Backend/Tools**: Antigravity AI Agent with MCP integrations.

## MCP Infrastructure
- **Stitch MCP**: Remote server proxy for specialized Google-powered tools.
- **Firecrawl MCP**: Local node-based MCP server for high-performance web scraping.
- Connected via `mcp_config.json` in the `.gemini/antigravity` directory.

## Development Environment
- **Port Management**: Uses dynamic port allocation (`--port 0`) to avoid conflicts during local development.
