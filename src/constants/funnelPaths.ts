import { FC } from 'react';

export type FunnelOption = {
    id: string;
    label: string;
    icon: string;
};

export type FunnelStepDefinition = {
    id: string;
    title: string;
    subtitle: string;
    options: FunnelOption[];
};

export type FunnelPath = {
    id: string;
    steps: FunnelStepDefinition[];
};

export const initialProfiles: FunnelOption[] = [
    { id: 'saude', label: 'Saúde / Clínica Médica', icon: '🩺' },
    { id: 'consultoria', label: 'Consultoria / Assessoria', icon: '📈' },
    { id: 'marketing', label: 'Marketing / Publicidade', icon: '📣' },
    { id: 'beleza', label: 'Salão de Beleza / Barbearia', icon: '✂️' },
    { id: 'gastronomia', label: 'Gastronomia / Delivery', icon: '🍔' },
    { id: 'ecommerce', label: 'E-commerce / Varejo', icon: '🛒' },
    { id: 'tech', label: 'SaaS / Tech / Startup', icon: '🚀' },
    { id: 'direito', label: 'Advocacia / Jurídico', icon: '⚖️' },
    { id: 'imobiliaria', label: 'Imobiliária / Construção', icon: '🏠' },
    { id: 'educacao', label: 'Educação / Infoprodutos', icon: '🎓' },
    { id: 'b2b', label: 'Serviços B2B / Agência', icon: '💼' },
    { id: 'outro', label: 'Outro', icon: '💡' },
];

export const commonFinalSteps: FunnelStepDefinition[] = [
    {
        id: 'timeline',
        title: 'Qual é a sua urgência para o projeto?',
        subtitle: 'Para alinharmos as expectativas de entrega.',
        options: [
            { id: 'imediato', label: 'Urgente (< 30 dias)', icon: 'bolt' },
            { id: 'curto', label: 'Curto Prazo (1-3 meses)', icon: 'event' },
            { id: 'planejamento', label: 'Planejamento (3-6 meses)', icon: 'edit_calendar' },
            { id: 'sem_pressa', label: 'Sem pressa (Foco em Qualidade)', icon: 'diamond' },
        ]
    },
    {
        id: 'budget',
        title: 'Qual a faixa de investimento prevista?',
        subtitle: 'Para dimensionarmos o escopo ideal para o seu momento.',
        options: [
            { id: '2k_5k', label: 'R$ 2.000 a R$ 5.000', icon: 'payments' },
            { id: '5k_10k', label: 'R$ 5.000 a R$ 10.000', icon: 'account_balance_wallet' },
            { id: '10k_plus', label: 'Acima de R$ 10.000', icon: 'business_center' },
            { id: 'preciso_orcamento', label: 'Preciso de um escopo antes', icon: 'help_center' },
        ]
    }
];

export const funnelPathsMap: Record<string, FunnelStepDefinition[]> = {
    // ROTA SAÚDE E BEM-ESTAR
    'saude': [
        {
            id: 'pain',
            title: 'Qual é o seu maior desafio hoje?',
            subtitle: 'Onde a tecnologia pode te ajudar imediatamente?',
            options: [
                { id: 'captar_pacientes', label: 'Captar pacientes particulares', icon: 'group_add' },
                { id: 'reduzir_faltas', label: 'Reduzir faltas com sistema', icon: 'event_busy' },
                { id: 'autoridade', label: 'Site Médico p/ Autoridade', icon: 'military_tech' },
                { id: 'app_interno', label: 'Criar App Próprio / Telemedicina', icon: 'health_and_safety' },
            ]
        },
        {
            id: 'maturity',
            title: 'Qual é a sua estrutura de atendimento?',
            subtitle: 'Nosso time adapta sistemas para qualquer tamanho.',
            options: [
                { id: 'sozinho', label: 'Atendo sozinho', icon: 'person' },
                { id: 'clinica_pequena', label: 'Equipe Pequena (2-5 docs)', icon: 'groups' },
                { id: 'clinica_media', label: 'Clínica Média/Grande', icon: 'domain' },
                { id: 'rede', label: 'Rede de Clínicas', icon: 'location_city' },
            ]
        }
    ],

    // ROTA ADVOCACIA
    'direito': [
        {
            id: 'pain',
            title: 'Onde o digital faria mais diferença para o escritório?',
            subtitle: 'Foco na conversão do seu nicho jurídico.',
            options: [
                { id: 'captar_leads', label: 'Captar leads no Google/Meta', icon: 'ads_click' },
                { id: 'institucional', label: 'Site Institucional Premium', icon: 'account_balance' },
                { id: 'crm', label: 'Sistema de Acompanhamento (CRM)', icon: 'contact_page' },
                { id: 'cursos', label: 'Venda de Infoprodutos / Cursos', icon: 'school' },
            ]
        },
        {
            id: 'maturity',
            title: 'Quantos profissionais compõem a banca/escritório?',
            subtitle: 'Para dimensionar o tráfego ou os usuários do sistema.',
            options: [
                { id: 'individual', label: 'Advocacia Individual', icon: 'person' },
                { id: 'pequena', label: 'Sociedade Enxuta (2-5)', icon: 'group' },
                { id: 'media', label: 'Médio / Grande Porte', icon: 'business' },
            ]
        }
    ],

    // ROTA B2B SERVICES & TECH
    'b2b_tech': [
        {
            id: 'pain',
            title: 'Qual o principal gargalo da sua operação hoje?',
            subtitle: 'Tecnologia p/ escalar receita ou resolver processos.',
            options: [
                { id: 'vendas_b2b', label: 'Máquina de Vendas / Leads', icon: 'trending_up' },
                { id: 'produto', label: 'Criar um SaaS/App (MVPs)', icon: 'code' },
                { id: 'retencao', label: 'Portal do Cliente / Retenção', icon: 'handshake' },
                { id: 'processos', label: 'Automação de Processos Internos', icon: 'memory' },
            ]
        },
        {
            id: 'maturity',
            title: 'Qual é o tamanho atual da equipe?',
            subtitle: 'Entendendo a sua máquina atual.',
            options: [
                { id: 'founder', label: 'Fundador Solo (Bootstrapped)', icon: 'emoji_objects' },
                { id: 'pequena', label: 'Equipe de Crescimento (2-10)', icon: 'groups' },
                { id: 'media', label: 'Operação Ativa (11-50)', icon: 'corporate_fare' },
                { id: 'grande', label: 'Estrutura Corporativa (50+)', icon: 'apartment' },
            ]
        }
    ],

    // ROTA E-COMMERCE / VAREJO
    'ecommerce': [
        {
            id: 'pain',
            title: 'O que você comercializa ou pretende comercializar?',
            subtitle: 'O modelo de loja perfeito para a sua operação.',
            options: [
                { id: 'produto_fisico', label: 'Produtos Físicos (Estoque/Dropship)', icon: 'inventory_2' },
                { id: 'infoproduto', label: 'Infoprodutos / Cursos', icon: 'ondemand_video' },
                { id: 'assinatura', label: 'Clube de Assinaturas (Recorrência)', icon: 'card_membership' },
                { id: 'b2b_atacado', label: 'Venda B2B / Atacado', icon: 'pallet' },
            ]
        },
        {
            id: 'maturity',
            title: 'Qual a tração de faturamento mensal online hoje?',
            subtitle: 'Para indicarmos a plataforma mais estável.',
            options: [
                { id: 'zero', label: 'Vou começar agora', icon: 'rocket_launch' },
                { id: 'ate_50k', label: 'Até R$ 50k / mês', icon: 'show_chart' },
                { id: 'acima_50k', label: 'Acima de R$ 50k / mês', icon: 'moving' },
            ]
        }
    ],

    // ROTA GASTRONOMIA
    'gastronomia': [
        {
            id: 'pain',
            title: 'Onde está a maior dor com pedidos ou clientes?',
            subtitle: 'Tecnologia que aumenta a margem do restaurante.',
            options: [
                { id: 'novo_delivery', label: 'App de Delivery Próprio', icon: 'delivery_dining' },
                { id: 'cardapio', label: 'Cardápio Digital / QR Code no Local', icon: 'qr_code_2' },
                { id: 'taxas', label: 'Cansado de altas taxas (iFood)', icon: 'money_off' },
                { id: 'pdv', label: 'Totem de Autoatendimento / PDV', icon: 'point_of_sale' },
            ]
        },
        {
            id: 'maturity',
            title: 'Qual é o seu volume médio diário de pedidos?',
            subtitle: 'Para entendermos a infraestrutura de servidor necessária.',
            options: [
                { id: 'pequeno', label: 'Iniciando / Até 50 pedidos', icon: 'storefront' },
                { id: 'medio', label: 'Até 200 pedidos ao dia', icon: 'local_shipping' },
                { id: 'alto', label: 'Rede/Franquia (Alto volume)', icon: 'food_bank' },
            ]
        }
    ],

    // ROTA OUTROS (Genérico Profissional)
    'outro': [
        {
            id: 'pain',
            title: 'Qual objetivo te trouxe até aqui hoje?',
            subtitle: 'Seja claro para encontrarmos a melhor saída.',
            options: [
                { id: 'landing_page', label: 'Landing Page de Alta Conversão', icon: 'web' },
                { id: 'sistema_web', label: 'Sistema Web Exclusivo', icon: 'data_object' },
                { id: 'app_mobile', label: 'Aplicativo Mobile (iOS/Android)', icon: 'smartphone' },
                { id: 'consultoria', label: 'Consultoria de Tecnologia Otimizada', icon: 'psychology' },
            ]
        },
        {
            id: 'maturity',
            title: 'Como está a estruturada da sua empresa atualmente?',
            subtitle: 'Para prepararmos a melhor apresentação.',
            options: [
                { id: 'ideacao', label: 'Ainda é apenas uma ideia', icon: 'wb_incandescent' },
                { id: 'startup', label: 'Startup Early-Stage', icon: 'rocket' },
                { id: 'pme', label: 'PME (Já rodando operando firmemente)', icon: 'business' },
                { id: 'enterprise', label: 'Grande Empresa / Corporação', icon: 'corporate_fare' },
            ]
        }
    ],
};
