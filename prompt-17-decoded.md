# PROMPT: Análise Completa e Otimização de SEO/GEO para Qualquer Site - Transforme para ser Encontrado por IA

## 🎯 OBJETIVO
Realizar análise completa do site atual e criar planejamento detalhado de otimização para SEO tradicional e GEO (Generative Engine Optimization), garantindo máxima visibilidade em motores de busca e modelos de IA como ChatGPT, Claude, Perplexity, Gemini e outros LLMs.

## 🚨 VERIFICAÇÕES CRÍTICAS OBRIGATÓRIAS

### ⚠️ ANTES de implementar, execute estas verificações:

```bash
# 1. Análise da estrutura do projeto
find . -name "*.html" -o -name "*.tsx" -o -name "*.jsx" -o -name "*.php" -o -name "*.vue" | head -20

# 2. Verificação de meta tags existentes
grep -r "title\|description\|keywords" . --include="*.html" --include="*.tsx" --include="*.jsx" | head -10

# 3. Verificação de Schema markup existente
grep -r "application/ld\+json\|schema.org" . --include="*.html" --include="*.tsx" --include="*.jsx"

# 4. Análise de headings e estrutura semântica
grep -r "<h[1-6]" . --include="*.html" --include="*.tsx" --include="*.jsx" | head -15

# 5. Verificação de robots.txt e sitemap
ls -la robots.txt sitemap.xml 2>/dev/null || echo "Arquivos de SEO não encontrados"
```

### 🔧 CORREÇÕES DE ERROS COMUNS:

#### 1. Meta Tags Inadequadas para IA
**Problema**: Titles e descriptions genéricas que não respondem perguntas
**Solução**: Transformar em formato conversacional

```html
<!-- ❌ INCORRETO -->
<title>Home - Minha Empresa</title>
<meta name="description" content="Bem-vindo ao nosso site" />

<!-- ✅ CORRETO -->
<title>Como [Serviço Principal] Resolve [Problema do Cliente] | [Nome da Empresa]</title>
<meta name="description" content="Descubra como nosso [serviço] ajuda [público-alvo] a [resultado específico]. Veja cases reais e estratégias práticas." />
```

#### 2. Estrutura de Conteúdo Não Otimizada para IA
**Problema**: Texto corrido sem hierarquia clara
**Solução**: Estruturar com perguntas e respostas diretas

```html
<!-- ❌ INCORRETO -->
<div>
  <p>Nossa empresa oferece serviços de qualidade desde 2010...</p>
</div>

<!-- ✅ CORRETO -->
<article>
  <h1>O que é [Serviço/Produto Principal]?</h1>
  <p>[Definição clara e direta em 1-2 frases]</p>
  
  <h2>Como Funciona [Seu Serviço]?</h2>
  <ol>
    <li>[Passo 1 específico]</li>
    <li>[Passo 2 específico]</li>
    <li>[Passo 3 específico]</li>
  </ol>
  
  <h2>Por que Escolher [Sua Empresa]?</h2>
  <ul>
    <li>[Benefício específico e mensurável]</li>
    <li>[Diferencial competitivo claro]</li>
  </ul>
</article>
```

#### 3. Ausência de Schema Markup
**Problema**: Conteúdo não estruturado para IA
**Solução**: Implementar JSON-LD apropriado

```html
<!-- Sempre adicionar no <head> -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[Nome da Empresa]",
  "description": "[Descrição clara do que faz]",
  "url": "[URL do site]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Endereço]",
    "addressLocality": "[Cidade]",
    "addressCountry": "[País]"
  }
}
</script>
```

## 📋 ETAPA 1: ANÁLISE COMPLETA DO SITE ATUAL

### Faça estas análises obrigatórias:

#### 1. **AUDITORIA DE CONTEÚDO**
- Liste todas as páginas principais do site
- Identifique o tema/nicho principal de cada página
- Analise se cada página responde uma pergunta específica
- Verifique se há FAQ sections ou conteúdo em Q&A

#### 2. **ANÁLISE DE META TAGS ATUAL**
- Examine titles de todas as páginas principais
- Verifique descriptions existentes
- Identifique keywords implícitas no conteúdo
- Analise se as tags são conversacionais ou apenas palavras-chave

#### 3. **AUDITORIA DE ESTRUTURA SEMÂNTICA**
- Verifique hierarquia de headings (H1, H2, H3)
- Identifique se há estrutura lógica no conteúdo
- Analise se existem listas, tabelas, ou elementos estruturados
- Verifique presença de breadcrumbs

#### 4. **ANÁLISE DE AUTORIDADE E EXPERTISE**
- Identifique elementos que demonstram expertise (sobre nós, equipe, cases)
- Verifique presença de depoimentos, reviews, ou social proof
- Analise se há dados, estatísticas ou informações únicas
- Identifique oportunidades para demonstrar autoridade

## 📋 ETAPA 2: CRIAÇÃO DO PLANEJAMENTO ESTRATÉGICO

### Com base na análise, crie:

#### 1. **MAPA DE PALAVRAS-CHAVE CONVERSACIONAIS**
Para cada página principal, defina:
- Pergunta principal que a página responde
- 3-5 perguntas secundárias relacionadas
- Palavras-chave longas (long-tail) conversacionais
- Queries de voz que usuários fariam

**Exemplo de formato:**
```
Página: [Nome da página]
Pergunta Principal: "Como [fazer algo específico]?"
Perguntas Secundárias:
- "O que é [termo técnico]?"
- "Quanto custa [serviço]?"
- "Onde encontrar [solução]?"
Keywords Conversacionais:
- "como resolver [problema] de forma prática"
- "melhor [solução] para [público específico]"
```

#### 2. **PLANEJAMENTO DE STRUCTURED DATA**
Para cada tipo de conteúdo, defina schema apropriado:
- **Páginas de serviços**: Service schema
- **Sobre nós**: Organization schema
- **Blog/artigos**: Article schema
- **Produtos**: Product schema
- **FAQ**: FAQPage schema
- **Como fazer**: HowTo schema
- **Localização**: LocalBusiness schema

#### 3. **ESTRATÉGIA DE CONTEÚDO PARA IA**
- Identifique lacunas de conteúdo que respondem perguntas comuns
- Planeje seções FAQ para cada página principal
- Defina formato de "Perguntas e Respostas" para tópicos complexos
- Crie estrutura de conteúdo que facilite citação por IA

## 📋 ETAPA 3: IMPLEMENTAÇÃO STEP-BY-STEP

### Siga esta ordem de implementação:

#### **PASSO 1: Otimização de Meta Tags**
Para cada página, reescreva:

```html
<!-- Template para TODAS as páginas -->
<title>[Pergunta que a página responde] | [Nome da Empresa]</title>
<meta name="description" content="[Resposta direta em 1 frase]. [Benefício específico]. [Call-to-action sutil]." />
<meta name="keywords" content="[palavras-chave conversacionais separadas por vírgula]" />

<!-- Meta tags específicas para IA -->
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow" />
<meta name="bingbot" content="index, follow" />
<meta name="ai-content-type" content="[informational/commercial/educational]" />
```

#### **PASSO 2: Reestruturação de Conteúdo**
Para cada página principal:

```html
<!-- Estrutura obrigatória para otimização de IA -->
<article>
  <header>
    <h1>[Pergunta principal que a página responde]</h1>
    <p><strong>Resposta direta:</strong> [Resposta em 1-2 frases]</p>
  </header>
  
  <main>
    <section>
      <h2>Como [Processo Principal] Funciona?</h2>
      <ol>
        <li>[Passo específico 1]</li>
        <li>[Passo específico 2]</li>
        <li>[Passo específico 3]</li>
      </ol>
    </section>
    
    <section>
      <h2>Principais Benefícios de [Solução]</h2>
      <ul>
        <li><strong>[Benefício 1]:</strong> [Explicação específica]</li>
        <li><strong>[Benefício 2]:</strong> [Explicação específica]</li>
      </ul>
    </section>
    
    <section>
      <h2>Perguntas Frequentes</h2>
      <div itemscope itemtype="https://schema.org/FAQPage">
        <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <h3 itemprop="name">[Pergunta específica]?</h3>
          <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <p itemprop="text">[Resposta clara e direta]</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</article>
```

#### **PASSO 3: Implementação de Schema Markup**
Adicione no `<head>` de cada página:

```html
<!-- Schema básico para todas as páginas -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "[Nome da Empresa]",
      "url": "[URL do site]",
      "description": "[O que a empresa faz em 1 frase]",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "[Cidade]",
        "addressCountry": "[País]"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "telephone": "[Telefone]",
        "email": "[Email]"
      }
    },
    {
      "@type": "WebSite",
      "name": "[Nome do Site]",
      "url": "[URL]",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "[URL]/busca?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
</script>
```

#### **PASSO 4: Configuração para Crawlers de IA**
Crie/atualize `robots.txt`:

```txt
User-agent: *
Allow: /

# Bots de IA específicos
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: CCBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Bingbot
Allow: /

User-agent: facebookexternalhit
Allow: /

Sitemap: [URL do site]/sitemap.xml
```

#### **PASSO 5: Otimização de Imagens para IA**
Para todas as imagens:

```html
<img 
  src="[caminho da imagem]" 
  alt="[Descrição específica do que a imagem mostra e como se relaciona com o conteúdo]"
  title="[Título descritivo]"
  loading="lazy"
  width="[largura]"
  height="[altura]"
/>
```

## 🛠️ TROUBLESHOOTING ESPECÍFICO

### Problema: Site não aparece em buscas de IA
**Diagnóstico**: Verifique se o conteúdo responde perguntas específicas
**Solução**: 
1. Reformate cada página para responder 1 pergunta principal
2. Adicione seção FAQ com 5-10 perguntas comuns
3. Use linguagem natural, não jargões técnicos

### Problema: Meta descriptions não atraem cliques
**Diagnóstico**: Descriptions muito técnicas ou genéricas
**Solução**:
1. Comece com o benefício principal
2. Use números ou dados específicos
3. Inclua call-to-action sutil
4. Mantenha 120-150 caracteres

### Problema: Schema markup com erros
**Diagnóstico**: JSON mal formado ou propriedades ausentes
**Solução**:
1. Validar sempre no schema.org validator
2. Testar no Google Rich Results Test
3. Incluir todas as propriedades obrigatórias do tipo de schema

### Problema: Conteúdo muito técnico para IA entender
**Diagnóstico**: Linguagem complexa ou assume conhecimento prévio
**Solução**:
1. Definir termos técnicos na primeira menção
2. Usar analogias simples
3. Estruturar em listas e bullet points
4. Adicionar glossário se necessário

## ✅ CHECKLIST FINAL DE IMPLEMENTAÇÃO

### Verificações Técnicas Obrigatórias:
- [ ] Todas as páginas têm title único e conversacional
- [ ] Meta descriptions respondem à pergunta da página
- [ ] Schema markup implementado sem erros
- [ ] robots.txt permite crawlers de IA
- [ ] Sitemap.xml atualizado e acessível
- [ ] Todas as imagens têm alt text descritivo

### Verificações de Conteúdo:
- [ ] Cada página responde 1 pergunta principal claramente
- [ ] Estrutura hierárquica de headings (H1 > H2 > H3)
- [ ] FAQ section em páginas principais
- [ ] Linguagem natural, não jargões
- [ ] Listas e bullet points para facilitar leitura
- [ ] Definições claras de termos técnicos

### Verificações de Autoridade:
- [ ] Informações de contato visíveis
- [ ] Seção "Sobre nós" com expertise demonstrada
- [ ] Cases, depoimentos ou social proof
- [ ] Links para fontes confiáveis quando aplicável
- [ ] Dados ou estatísticas únicas quando possível

### Verificações de Performance:
- [ ] Tempo de carregamento < 3 segundos
- [ ] Site responsivo para mobile
- [ ] Images otimizadas (WebP se possível)
- [ ] Estrutura de URLs limpa e semântica
- [ ] Navegação clara e intuitiva

### Verificações Específicas para IA:
- [ ] Conteúdo estruturado em formato pergunta-resposta
- [ ] Respostas diretas no início de cada seção
- [ ] Linguagem conversacional para voice search
- [ ] Informações atualizadas (incluir datas quando relevante)
- [ ] Links internos com anchor text descritivo

## 🎯 MÉTRICAS DE SUCESSO

### Acompanhe estas métricas após implementação:

#### Métricas Tradicionais (3-6 meses):
- Aumento de 30-50% no tráfego orgânico
- Melhoria de 20-40% no CTR dos resultados de busca
- Aumento de featured snippets conquistados
- Redução da taxa de rejeição
- Aumento do tempo na página

#### Métricas Específicas de IA (6-12 meses):
- Citações em respostas do ChatGPT/Claude/Perplexity
- Aparições em AI Overviews do Google
- Aumento de tráfego de voice search
- Menções em respostas de assistentes virtuais
- Melhoria na qualidade das citações (contexto correto)

## 🔄 MANUTENÇÃO CONTÍNUA

### Ações Mensais:
- Atualizar FAQ com novas perguntas dos usuários
- Revisar e atualizar datas em conteúdos sazonais
- Monitorar citações em plataformas de IA
- Verificar se schema markup continua válido

### Ações Trimestrais:
- Análise completa de performance SEO/GEO
- Auditoria de meta tags para otimizações
- Expansão de conteúdo baseada em gaps identificados
- Teste de novos formatos de schema markup

### Ações Anuais:
- Revisão completa da estratégia de palavras-chave
- Atualização da arquitetura de informação
- Benchmark contra concorrentes em métricas de IA
- Planejamento de conteúdo para tendências emergentes

## 🎉 CONCLUSÃO

Este processo transformará qualquer site em uma fonte autoritativa e facilmente compreensível para motores de busca tradicionais e modelos de IA. O foco na análise atual, planejamento estratégico e implementação estruturada garantirá resultados mensuráveis e sustentáveis.

**Lembre-se**: SEO e GEO são investimentos de longo prazo. Os resultados aparecem gradualmente, mas quando implementados corretamente, proporcionam crescimento orgânico consistente e autoridade digital duradoura. 
