# ADR 001: Escolha da Stack e Padrões Estéticos

## Status
Aceito

## Contexto
O projeto exige uma landing page de altíssimo impacto visual (cinematográfico) que sirva como base para futuros SaaS. A performance e a facilidade de evolução são críticas.

## Decisão
Adotamos:
- **React + Vite**: Para ciclos de desenvolvimento ultrarrápidos e ecossistema robusto.
- **Tailwind CSS**: Pela facilidade de manter um design system consistente via classes utilitárias.
- **Glassmorphism & Noise Filters**: Uso de `backdrop-blur` e filtros SVG para estética cinematográfica.
- **Drama Font (Instrument Serif)**: Uso de tipografia serifada em itálico para criar pontos de autoridade visual.

## Consequências
- **Positivas**: Interface moderna, carregamento instantâneo, facilidade de implementação de micro-interações.
- **Negativas**: Exige maior cuidado com performance ao abusar de filtros de blur e animações complexas.
