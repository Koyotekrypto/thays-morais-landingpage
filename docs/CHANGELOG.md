# CHANGELOG

## [Unreleased]
### Added
- Seção "Sobre Mim" completamente refatorada utilizando um **Layout Assimétrico (Grid)** para apresentar um formato de dossiê profissional.
- Cartão com Efeito **Glassmorphism** e Links dinâmicos importados do `lucide-react` para o Instagram e LinkedIn da Thays Morais.
- Adição da barra de **Métricas de Autoridade** no perfil, enfatizando foco de conformidade (100%), tempo de experiência (+7 Anos), e volume de entregas.
- Assinatura estilizada ("Thays Morais") com fontes script decorativas para personalização de marca e proximidade humana.
- Renderização "Manifesto" na Seção de Citações com melhoramentos tipográficos dramáticos e gradientes premium envolventes.
- Nova identidade visual (Logo Leão do IRPF) implantada na Navbar e Footer.
- Adição de `ScrollScaleSection` envolvendo as áreas de `Hero` principal e do acordeão, executando um efeito de scale in visual atrelado à barra de rolagem (sem quebrar a estrutura existente de copy).

### Changed
- Evolução do copywriting na seção "Valor Além dos Números" para alinhar com as dores reais do cliente pessoa física focando em "Restituição Maximizada", "Blindagem Anti-Malha Fina" e "Agilidade no Recebimento".
- Cards na secção "Experiência" renderizam com classes utilitárias `.card-3d` e `.hover-lift` para dar feedback tátil e melhorar a imersão (Depth UI).
- Extração completa de dados fixos (mockados) de dentro do `App.tsx` para um novo arquivo centralizado `src/data/content.ts` para facilitar manutenção.
- Remoção real de componentes não utilizados que estavam presentes na árvore principal (`Footer.tsx` e `Navbar.tsx` internos). Os originais incorporados no `App.tsx` receberam refinamento de IDs e remoção de links mortos (hashtag "#").

### Fixed
- Pequenos ajustes em padding (`py-24`, `pb-8`) em diferentes viewports para suportar o design assimétrico e melhorar a escaneabilidade.
- Correções de quebras de layout em dispositivos móveis (Hero, Plataforma, Sobre Mim, Trajetória, Serviços) através de revisão Mobile-First em classes utilitárias.
- Link de roteamento na Navbar consertados com redirecionamentos corretos para as âncoras na própria landing page de Serviço de IR.
- Botão "Ver todos os artigos" e secção Insights foi comentado temporariamente até que artigos reais do blog sejam providenciados pelo cliente.
