import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import { HeroImageAccordion } from "@/components/ui/interactive-image-accordion"
import { LeadFunnelModal } from "@/components/sections/LeadFunnelModal"
import { ArrowRight } from "lucide-react"
import { AnimatePresence } from "framer-motion"

// Countdown hook – target: 29 May 2026
function useCountdown(targetDate: string) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const tick = () => {
            const diff = new Date(targetDate).getTime() - Date.now();
            if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [targetDate]);
    return timeLeft;
}

const App: React.FC = () => {
    const countdown = useCountdown('2026-05-29T23:59:59');
    const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="antialiased font-body min-h-screen">
                {/* BEGIN: Navigation */}
                <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black flex items-center justify-center text-white font-bold text-xs">TM</div>
                            <span className="font-bold text-lg tracking-tight uppercase">Thays Morais</span>
                        </div>
                        <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
                            <a className="hover:text-gray-500 transition-colors" href="#about">Sobre</a>
                            <a className="hover:text-gray-500 transition-colors" href="#services">Serviços</a>
                            <a className="hover:text-gray-500 transition-colors" href="#ir2026" style={{color:'#16a34a', fontWeight:800}}>IR 2026</a>
                            <a className="hover:text-gray-500 transition-colors" href="#experience">Trajetória</a>
                            <a className="hover:text-gray-500 transition-colors" href="#insights">Insights</a>
                            <a className="hover:text-gray-500 transition-colors" href="#contact">Contato</a>
                        </div>
                        <a className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-tighter hover:bg-gray-800 transition-all" href="#contact">
                            Falar Agora
                        </a>
                    </div>
                </nav>
                {/* END: Navigation */}

                {/* BEGIN: New Hero Section — Thays Morais. Analista Contábil. */}
                <header className="pt-20 pb-0 bg-white" id="home">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Desktop: two-column layout */}
                        <div className="hidden lg:flex flex-row items-stretch min-h-[calc(100vh-80px)]">
                            {/* Left — text + CTAs */}
                            <div className="w-1/2 flex-shrink-0 flex flex-col justify-center pr-16 py-24">
                                <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">
                                    Consultoria Contábil Estratégica
                                </span>
                                <h1 className="font-extrabold text-black leading-none mb-8" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)' }}>
                                    Thays Morais.<br />
                                    Analista Contábil.
                                </h1>
                                <p className="text-gray-500 text-base leading-relaxed mb-12 max-w-sm">
                                    Sua parceira de confiança para gestão financeira e contábil.
                                    Expertise em planejamento tributário, conformidade fiscal e
                                    otimização de resultados empresariais.
                                </p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsLeadModalOpen(true)}
                                        className="bg-black text-white px-8 py-5 font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors flex items-center gap-3"
                                    >
                                        Falar com Especialista
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            {/* Right — Thays photo */}
                            <div className="w-1/2 flex-shrink-0 relative overflow-hidden">
                                <img
                                    src="/assets/thays-morais.png"
                                    alt="Thays Morais — Analista Contábil"
                                    className="w-full h-full object-cover object-top grayscale"
                                    style={{ minHeight: '100%' }}
                                />
                            </div>
                        </div>

                        {/* Mobile: stacked layout */}
                        <div className="flex lg:hidden flex-col min-h-screen pt-4">
                            {/* Photo first on mobile */}
                            <div className="w-full aspect-[3/4] overflow-hidden grayscale mb-8">
                                <img
                                    src="/assets/thays-morais.png"
                                    alt="Thays Morais — Analista Contábil"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="pb-12">
                                <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 mb-6">
                                    Consultoria Contábil Estratégica
                                </span>
                                <h1 className="text-5xl font-extrabold text-black leading-none mb-6">
                                    Thays Morais.<br />
                                    Analista Contábil.
                                </h1>
                                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                    Sua parceira de confiança para gestão financeira e contábil.
                                    Expertise em planejamento tributário, conformidade fiscal e
                                    otimização de resultados empresariais.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => setIsLeadModalOpen(true)}
                                        className="bg-black text-white px-6 py-5 font-black uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors text-center flex items-center justify-center gap-3"
                                    >
                                        Falar com Especialista
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* END: New Hero Section */}

                {/* BEGIN: Hero Section */}
                <header className="pt-28 lg:pt-32 pb-0">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Desktop: split side-by-side */}
                        <div className="hidden lg:flex flex-row items-center gap-12 min-h-[520px]">
                            {/* Left — texto e CTAs */}
                            <div className="w-1/2 flex-shrink-0 flex flex-col justify-center">
                                <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Thays Morais · Consultoria Fiscal &amp; Societária</span>
                                <h1 className="text-huge font-extrabold mb-6 text-black leading-none">
                                    Regularize. Estruture.<br />
                                    <span className="text-zinc-500">Cresça com segurança.</span>
                                </h1>
                                <p className="text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-lg">
                                    Especialista em constituição e encerramento de empresas, reestruturação contratual e negociação de débitos tributários. Conformidade total, do primeiro ao último passo.
                                </p>
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setIsLeadModalOpen(true)}
                                        className="bg-black text-white px-8 py-5 font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors flex items-center gap-3"
                                    >
                                        Falar com Especialista
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            {/* Right — image accordion */}
                            <div className="w-1/2 flex-shrink-0">
                                <HeroImageAccordion />
                            </div>
                        </div>

                        {/* Mobile: texto + foto da Thays */}
                        <div className="flex lg:hidden flex-col gap-8 pb-12">
                            <div>
                                <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Thays Morais · Consultoria Fiscal &amp; Societária</span>
                                <h1 className="text-5xl font-extrabold mb-4 text-black leading-none">
                                    Regularize. Estruture.<br /><span className="text-zinc-500">Cresça com segurança.</span>
                                </h1>
                                <p className="text-lg text-gray-500 font-light leading-relaxed mb-6">
                                    Especialista em constituição, encerramento, reestruturação contratual e negociação de débitos tributários.
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setIsLeadModalOpen(true)}
                                        className="bg-black text-white px-6 py-4 font-bold uppercase text-xs tracking-widest hover:bg-zinc-800 transition-colors w-full flex items-center justify-center gap-3"
                                    >
                                        Falar com Especialista
                                        <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="aspect-[4/5] bg-gray-100 overflow-hidden grayscale">
                                <img alt="Thays Morais — Analista Contábil" className="w-full h-full object-cover object-top" src="/assets/thays-morais.png" />
                            </div>
                        </div>
                    </div>
                </header>
                {/* END: Hero Section */}


                {/* BEGIN: Strategic Value Section */}
                <section className="section-padding border-y border-gray-100" id="strategic-value">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Valor Além dos Números</h2>
                            <h3 className="text-display text-black font-extrabold">Contabilidade como motor de crescimento.</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-bold">01</div>
                                <h4 className="text-2xl font-bold text-black">Otimização Tributária</h4>
                                <p className="text-gray-500 leading-relaxed">Redução legal da carga tributária através de análises profundas de regimes fiscais e aproveitamento de créditos.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-bold">02</div>
                                <h4 className="text-2xl font-bold text-black">Conformidade Total</h4>
                                <p className="text-gray-500 leading-relaxed">Segurança absoluta na entrega de obrigações acessórias (ECD, ECF, DCTF) eliminando riscos de multas e autuações.</p>
                            </div>
                            <div className="space-y-6">
                                <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-bold">03</div>
                                <h4 className="text-2xl font-bold text-black">Estratégia de Gestão</h4>
                                <p className="text-gray-500 leading-relaxed">Transformação de dados brutos em relatórios gerenciais que apoiam decisões críticas e expansão do negócio.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Consultancy Process */}
                <section className="section-padding bg-zinc-50" id="process">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                            <div className="max-w-xl">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Metodologia</h2>
                                <h3 className="text-display text-black font-extrabold">Como Funcionamos.</h3>
                            </div>
                            <p className="text-gray-500 text-lg max-w-md">Um processo estruturado para garantir que sua empresa receba o suporte necessário em cada fase da jornada contábil.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="relative p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow text-black">
                                <span className="text-step font-black absolute top-2 right-4">01</span>
                                <h4 className="text-xl font-bold mt-12 mb-4">Diagnóstico</h4>
                                <p className="text-gray-500 text-sm">Análise detalhada da situação fiscal e contábil atual da empresa.</p>
                            </div>
                            <div className="relative p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow text-black">
                                <span className="text-step font-black absolute top-2 right-4">02</span>
                                <h4 className="text-xl font-bold mt-12 mb-4">Estratégia</h4>
                                <p className="text-gray-500 text-sm">Desenvolvimento de um plano personalizado de otimização e organização.</p>
                            </div>
                            <div className="relative p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow text-black">
                                <span className="text-step font-black absolute top-2 right-4">03</span>
                                <h4 className="text-xl font-bold mt-12 mb-4">Implementação</h4>
                                <p className="text-gray-500 text-sm">Execução das rotinas contábeis com integração de sistemas e processos.</p>
                            </div>
                            <div className="relative p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow text-black">
                                <span className="text-step font-black absolute top-2 right-4">04</span>
                                <h4 className="text-xl font-bold mt-12 mb-4">Monitoramento</h4>
                                <p className="text-gray-500 text-sm">Acompanhamento contínuo e relatórios de desempenho mensal.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: About Section */}
                <section className="section-padding text-black" id="about">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                            <div className="lg:col-span-4">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400">Sobre Mim</h2>
                            </div>
                            <div className="lg:col-span-8">
                                <p className="text-3xl md:text-4xl font-medium leading-tight mb-12">
                                    Analista Contábil com sólida experiência em rotinas fiscais e contábeis. Especialista em entrega de declarações acessórias complexas como ECD e ECF.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed">
                                    <p>
                                        Meu foco é entregar resultados precisos e promover uma organização financeira estratégica que impulsione o crescimento sustentável de cada cliente. Com domínio profundo das legislações vigentes, garanto segurança jurídica e eficiência para o seu negócio.
                                    </p>
                                    <p>
                                        Acredito que a contabilidade vai além dos números; é a base para a tomada de decisões inteligentes. Trabalho lado a lado com gestores para transformar dados em inteligência de mercado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Testimonials/Quotes */}
                <section className="section-padding bg-black text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 dot-grid"></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <svg className="w-16 h-16 text-zinc-700 mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L10 3V15C10 18.3137 7.31371 21 4 21H3Z"></path></svg>
                            <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-12">
                                "Contabilidade não é apenas sobre o que já aconteceu, mas sobre planejar o que ainda está por vir. Nosso compromisso é com a transparência e a inteligência estratégica."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-px bg-zinc-500"></div>
                                <p className="text-sm font-bold uppercase tracking-widest text-zinc-400">Missão & Valores Profissionais</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Experience Section */}
                <section className="section-padding text-black" id="experience">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-20">
                            <h2 className="text-huge font-extrabold tracking-tighter">Trajetória.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black">
                            <div className="p-10 border-r border-b border-black hover-reveal flex flex-col justify-between min-h-[400px]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">2019 — Atual</span>
                                    <h3 className="text-3xl font-bold mb-4 leading-none text-black">Master Contabilidade</h3>
                                    <p className="text-gray-500 font-medium mb-6 uppercase text-xs tracking-widest">Analista Contábil Pleno</p>
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">Responsável pela integridade das demonstrações financeiras e planejamento estratégico, assegurando compliance e suportando a alta gestão corporativa.</p>
                                    <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Fechamento rigoroso de DRE e Balanços Patrimoniais.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Gestão, auditoria e entrega ágil de ECD e ECF complexas.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Conciliação avançada de contas, eliminando riscos e inconsistências.</span></li>
                                    </ul>
                                </div>
                                <div className="mt-12">
                                    <span className="text-[10px] font-black uppercase bg-black text-white px-2 py-1">Ativo</span>
                                </div>
                            </div>
                            <div className="p-10 border-r border-b border-black hover-reveal flex flex-col justify-between min-h-[400px]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">2019 — 2021</span>
                                    <h3 className="text-3xl font-bold mb-4 leading-none text-black">Havai Contabilidade</h3>
                                    <p className="text-gray-500 font-medium mb-6 uppercase text-xs tracking-widest">Analista Fiscal</p>
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">Atuação incisiva na gestão e mitigação de riscos tributários, garantindo correta apuração de impostos e a prevenção proativa de passivos fiscais.</p>
                                    <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Apuração precisa de tributos de Simples Nacional e Lucro Presumido.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Revisão técnica de notas fiscais e parametrização avançada de CFOPs/CSTs.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Entrega assertiva de declarações estaduais e cruzamento de informações gerenciais.</span></li>
                                    </ul>
                                </div>
                                <div className="mt-12 text-black"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
                            </div>
                            <div className="p-10 border-r border-b border-black hover-reveal flex flex-col justify-between min-h-[400px]">
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 block">2017 — 2019</span>
                                    <h3 className="text-3xl font-bold mb-4 leading-none text-black">Ricardo Contabilidade</h3>
                                    <p className="text-gray-500 font-medium mb-6 uppercase text-xs tracking-widest">Auxiliar Contábil</p>
                                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">Construção de base estrutural em contabilidade com forte visão analítica, suportando ativamente e tecnicamente o ciclo de fechamento mensal interno e externo.</p>
                                    <ul className="space-y-3 text-sm text-gray-600 font-medium">
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Classificação e conciliação criteriosa de contas ativas, passivas e de resultado.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Controle de fluxo de caixa operacional e elaboração de balancetes de verificação diários.</span></li>
                                        <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-black mt-1.5 flex-shrink-0"></span><span>Resolução autônoma de pendências e interface direta técnica e financeira com os responsáveis.</span></li>
                                    </ul>
                                </div>
                                <div className="mt-12 text-gray-400"><span className="text-xs uppercase font-bold">Início</span></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Capabilities/Services */}
                <section className="section-padding bg-black text-white" id="services">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-5">
                                <h2 className="text-display font-extrabold mb-8">Expertise Técnica.</h2>
                                <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                                    Abordagem holística para a gestão financeira, utilizando as melhores ferramentas do mercado para máxima precisão.
                                </p>
                                <div className="p-8 border border-zinc-800 bg-zinc-900/50">
                                    <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Tech Stack & Software</h4>
                                    <div className="grid grid-cols-2 gap-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                            <span className="text-sm font-medium">Domínio Sistemas</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                            <span className="text-sm font-medium">Excel Avançado</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                                            <span className="text-sm font-medium">Alterdata ERP</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <span className="text-sm font-medium">Questor Tax</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                            <span className="text-sm font-medium">Power BI</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <span className="text-sm font-medium">Sped Fiscal</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {/* Formation */}
                                <div data-purpose="service-block">
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-zinc-800 pb-2">Formação</h4>
                                    <ul className="space-y-4">
                                        <li>
                                            <div className="font-bold text-lg text-white">Ciências Contábeis</div>
                                            <div className="text-zinc-500 text-sm">Bacharelado com foco em Controladoria.</div>
                                        </li>
                                        <li>
                                            <div className="font-bold text-lg text-white">Legislação Trabalhista</div>
                                            <div className="text-zinc-500 text-sm">Especialização em rotinas de DP.</div>
                                        </li>
                                        <li>
                                            <div className="font-bold text-lg text-white">Escrita Fiscal</div>
                                            <div className="text-zinc-500 text-sm">Domínio técnico de ICMS, IPI, PIS/COFINS.</div>
                                        </li>
                                    </ul>
                                </div>
                                {/* Competencies */}
                                <div data-purpose="service-block">
                                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-zinc-800 pb-2">Competências</h4>
                                    <div className="flex flex-wrap gap-2 text-white">
                                        <span className="border border-zinc-700 px-4 py-2 text-xs font-medium uppercase hover:bg-white hover:text-black transition-colors cursor-default">Análise de Dados</span>
                                        <span className="border border-zinc-700 px-4 py-2 text-xs font-medium uppercase hover:bg-white hover:text-black transition-colors cursor-default">Liderança</span>
                                        <span className="border border-zinc-700 px-4 py-2 text-xs font-medium uppercase hover:bg-white hover:text-black transition-colors cursor-default">Resolução de Problemas</span>
                                        <span className="border border-zinc-700 px-4 py-2 text-xs font-medium uppercase hover:bg-white hover:text-black transition-colors cursor-default">Visão Estratégica</span>
                                    </div>
                                    <div className="mt-8 pt-6 border-t border-zinc-800 italic text-zinc-400 text-sm">
                                        "Comprometida com a excelência técnica e a transparência em todos os processos contábeis."
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — HERO BANNER */}
                {/* ============================================================ */}
                <section className="section-padding bg-black text-white overflow-hidden relative" id="ir2026">
                    <div className="absolute inset-0 opacity-5" style={{backgroundImage:'radial-gradient(circle at 20% 50%, #16a34a 0%, transparent 50%), radial-gradient(circle at 80% 20%, #15803d 0%, transparent 40%)'}}></div>
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block bg-green-600 text-white text-xs font-black uppercase tracking-widest px-4 py-2 mb-6">⏰ Prazo: 29 de Maio de 2026</span>
                                <h2 className="text-5xl md:text-6xl font-extrabold leading-none mb-6">
                                    Declare o IR 2026<br />
                                    <span style={{color:'#4ade80'}}>com Segurança.</span>
                                </h2>
                                <p className="text-zinc-300 text-xl font-light leading-relaxed mb-8">
                                    Sou especialista em IRPF. Cuido de tudo para você: do preenchimento ao acompanhamento da malha fina. Maximize sua restituição e fique em dia com a Receita Federal.
                                </p>
                                <p className="text-zinc-400 text-sm mb-10">
                                    Declaração de ajuste anual 2026 • Ano-base 2025 • Regras da Receita Federal
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Gostaria%20de%20contratar%20o%20servi%C3%A7o%20de%20declara%C3%A7%C3%A3o%20do%20IRPF%202026.%20Pode%20me%20passar%20mais%20informa%C3%A7%C3%B5es%3F" target="_blank" className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-green-500 transition-all text-sm">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                        Contratar via WhatsApp
                                    </a>
                                    <a href="#ir-planos" className="flex items-center justify-center border border-zinc-600 text-white px-8 py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-sm">
                                        Ver Planos e Preços
                                    </a>
                                </div>
                            </div>
                            {/* Countdown */}
                            <div className="grid grid-cols-2 gap-4">
                                {[{label:'Dias', value: countdown.days}, {label:'Horas', value: countdown.hours}, {label:'Minutos', value: countdown.minutes}, {label:'Segundos', value: countdown.seconds}].map(({label, value}) => (
                                    <div key={label} className="bg-zinc-900 border border-zinc-800 p-8 text-center">
                                        <div className="text-5xl md:text-6xl font-black tabular-nums" style={{color:'#4ade80'}}>{String(value).padStart(2,'0')}</div>
                                        <div className="text-xs font-bold uppercase tracking-widest text-zinc-500 mt-2">{label}</div>
                                    </div>
                                ))}
                                <div className="col-span-2 p-4 border border-zinc-800 text-center">
                                    <p className="text-zinc-400 text-xs uppercase tracking-widest">Prazo final da Receita Federal</p>
                                    <p className="text-white font-bold text-lg mt-1">29 de Maio de 2026</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — HERO BANNER */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — QUEM DEVE DECLARAR */}
                {/* ============================================================ */}
                <section className="section-padding bg-white text-black" id="ir-obrigatoriedade">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <span className="block text-xs font-black uppercase tracking-widest text-green-600 mb-4">IRPF 2026 — Ano-base 2025</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">Você precisa declarar<br />o Imposto de Renda?</h2>
                            <p className="text-gray-500 text-lg mt-4 max-w-2xl">Veja as situações que tornam a declaração obrigatória. Se você se encaixa em qualquer uma delas, entre em contato — eu cuido de tudo.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                {icon:'💰', title:'Renda acima de R$ 35.584', desc:'Recebeu rendimentos tributáveis (salário, aluguel etc.) acima de R$ 35.584 em 2025.'},
                                {icon:'🏠', title:'Patrimônio acima de R$ 800 mil', desc:'Possuía bens ou direitos acima de R$ 800.000 em 31/12/2025.'},
                                {icon:'📈', title:'Operações em Bolsa', desc:'Realizou vendas em bolsa acima de R$ 40.000 ou teve ganho de capital sujeito a imposto.'},
                                {icon:'🌍', title:'Rendimentos no Exterior', desc:'Recebeu dividendos, juros ou lucros de aplicações no exterior — tributação de 15% obrigatória.'},
                                {icon:'🏗️', title:'Imóvel Atualizado', desc:'Atualizou o valor de bens imóveis pagando ganho de capital diferenciado (Lei 14.973/2024).'},
                                {icon:'🌾', title:'Atividade Rural', desc:'Obteve receita bruta de atividade rural acima de R$ 169.440 em 2025.'},
                                {icon:'📊', title:'Ganho de Capital', desc:'Vendeu bens ou direitos e obteve ganho de capital sujeito à incidência do imposto.'},
                                {icon:'🇧🇷', title:'Residente Retornado', desc:'Passou à condição de residente no Brasil em qualquer mês de 2025.'},
                            ].map(({icon, title, desc}) => (
                                <div key={title} className="p-6 border border-gray-100 hover:border-black hover:shadow-lg transition-all group">
                                    <div className="text-3xl mb-4">{icon}</div>
                                    <h3 className="font-black text-base mb-2 group-hover:text-green-700 transition-colors">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 p-8 bg-amber-50 border-l-4 border-amber-400">
                            <p className="font-bold text-amber-900 text-lg">⚠️ Atenção: A nova isenção de R$ 5.000/mês NÃO afeta a declaração de 2026!</p>
                            <p className="text-amber-800 mt-2 text-sm leading-relaxed">A nova regra que isenta quem ganha até R$ 5.000/mês vale a partir de 2026, mas a declaração deste ano usa os dados de 2025. Quem ganhou entre R$ 35.584 e R$ 60.000 em 2025 ainda precisa declarar normalmente.</p>
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — QUEM DEVE DECLARAR */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — NOVIDADES */}
                {/* ============================================================ */}
                <section className="section-padding bg-zinc-950 text-white" id="ir-novidades">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <span className="block text-xs font-black uppercase tracking-widest text-green-500 mb-4">O que mudou</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold">Novidades do IRPF 2026</h2>
                            <p className="text-zinc-400 text-lg mt-4">Mantenha-se informado. Eu aplico essas regras na sua declaração.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    tag: 'Novo Limite', icon: '📊',
                                    title: 'Rendimento mínimo sobe para R$ 35.584',
                                    desc: 'O limite de obrigatoriedade subiu de R$ 33.888 (2025) para aproximadamente R$ 35.584 em 2026, reflexo do ajuste da tabela pela Lei nº 15.191/2025. Regras definitivas a serem confirmadas em 16/03/2026.',
                                },
                                {
                                    tag: 'Atenção Máxima', icon: '⚠️',
                                    title: 'Confusão com a isenção de R$ 5.000/mês',
                                    desc: 'A nova isenção para quem ganha até R$ 5.000/mês (≈ R$ 60k/ano) iniciou em janeiro/2026, mas só impacta a declaração de 2027. Quem ganhou até R$ 60k em 2025 pode ainda ser obrigado a declarar — não confunda!',
                                },
                                {
                                    tag: 'Restituição', icon: '⚡',
                                    title: 'Pré-preenchida + PIX = prioridade máxima',
                                    desc: 'Quem usar a declaração pré-preenchida E optar por receber a restituição via PIX tem prioridade máxima na fila. Eu configuro isso automaticamente para você receber primeiro.',
                                },
                                {
                                    tag: 'Investidores', icon: '🌍',
                                    title: 'Rendimentos no exterior: 15% definitivo',
                                    desc: 'Aplicações financeiras no exterior, ETFs internacionais, BDRs com dividendos e criptomoedas estrangeiras são tributados a 15% de forma anual e definitiva. Obrigação que permanece em 2026.',
                                },
                                {
                                    tag: 'Fiscalização', icon: '🔍',
                                    title: 'Receita Federal usa IA para cruzar dados',
                                    desc: 'A Receita intensificou o uso de inteligência artificial para cruzar dados bancários, notas fiscais e informes de rendimento. Erros e omissões são detectados com muito mais precisão do que anos anteriores.',
                                },
                                {
                                    tag: 'Alta Renda', icon: '🏦',
                                    title: 'Reforma tributária: impacto para alta renda',
                                    desc: 'A Reforma Tributária prevê imposto mínimo sobre alta renda e tributação de dividendos de forma progressiva. Contribuintes com renda acima de R$ 120k/ano devem fazer planejamento tributário com especialista.',
                                },
                            ].map(({tag, icon, title, desc}) => (
                                <div key={title} className="p-8 border border-zinc-800 hover:border-green-600 transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-2xl">{icon}</span>
                                        <span className="text-xs font-black uppercase tracking-widest text-green-500 border border-green-800 px-2 py-1">{tag}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — NOVIDADES */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — PLANOS */}
                {/* ============================================================ */}
                <section className="section-padding bg-white text-black" id="ir-planos">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <span className="block text-xs font-black uppercase tracking-widest text-green-600 mb-4">Serviços IRPF 2026</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold">Escolha seu plano</h2>
                            <p className="text-gray-500 text-lg mt-4">Preços transparentes. Sem surpresas. Declaração feita por especialista.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Essencial */}
                            <div className="border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Essencial</span>
                                <div className="text-5xl font-black mb-2">R$ 159</div>
                                <p className="text-gray-500 text-sm mb-8">Para quem tem uma única fonte de renda, sem complexidade.</p>
                                <ul className="space-y-3 text-sm flex-1">
                                    {['Assalariado com 1 empregador','Sem bens ou direitos relevantes','Sem investimentos em renda variável','Simplificada ou completa','Entrega e confirmação de recepção'].map(item => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>{item}</span></li>
                                    ))}
                                </ul>
                                <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Tenho%20interesse%20no%20Plano%20Essencial%20de%20Declara%C3%A7%C3%A3o%20do%20IRPF%202026%20(R%24%20159).%20Pode%20me%20atender%3F" target="_blank" className="mt-8 w-full py-4 border-2 border-black font-black uppercase tracking-widest text-sm text-center hover:bg-black hover:text-white transition-all block">Contratar</a>
                            </div>
                            {/* Padrão – destaque */}
                            <div className="border-2 border-black p-8 flex flex-col relative bg-black text-white shadow-2xl">
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1">Mais Escolhido</span>
                                <span className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Padrão</span>
                                <div className="text-5xl font-black mb-2">R$ 269</div>
                                <p className="text-zinc-400 text-sm mb-8">Para quem tem múltiplas fontes, aluguéis ou investimentos.</p>
                                <ul className="space-y-3 text-sm flex-1">
                                    {['Múltiplos empregos ou pró-labores','Rendimentos de aluguel','Investimentos em renda fixa/CDB/LCI','Dependentes e deduções completas','Acompanhamento de malha fina', 'Pré-preenchida + PIX configurados'].map(item => (
                                        <li key={item} className="flex items-start gap-2"><span style={{color:'#4ade80'}} className="font-bold mt-0.5">✓</span><span>{item}</span></li>
                                    ))}
                                </ul>
                                <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Tenho%20interesse%20no%20Plano%20Padr%C3%A3o%20de%20Declara%C3%A7%C3%A3o%20do%20IRPF%202026%20(R%24%20269).%20Pode%20me%20atender%3F" target="_blank" className="mt-8 w-full py-4 bg-green-600 font-black uppercase tracking-widest text-sm text-center hover:bg-green-500 transition-all block text-white">Contratar</a>
                            </div>
                            {/* Premium */}
                            <div className="border border-gray-200 p-8 flex flex-col hover:shadow-xl transition-shadow">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Premium</span>
                                <div className="text-5xl font-black mb-2">R$ 429</div>
                                <p className="text-gray-500 text-sm mb-8">Para quem tem complexidade: bolsa, cripto, exterior, rural.</p>
                                <ul className="space-y-3 text-sm flex-1">
                                    {['Operações em bolsa de valores','Criptoativos e ativos digitais','Rendimentos no exterior (15%)','Atividade rural','Ganho de capital em bens','Atualização de imóveis (Lei 14.973)', 'Consultoria tributária incluída'].map(item => (
                                        <li key={item} className="flex items-start gap-2"><span className="text-green-600 font-bold mt-0.5">✓</span><span>{item}</span></li>
                                    ))}
                                </ul>
                                <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Tenho%20interesse%20no%20Plano%20Premium%20de%20Declara%C3%A7%C3%A3o%20do%20IRPF%202026%20(R%24%20429).%20Tenho%20investimentos%20e%20opera%C3%A7%C3%B5es%20mais%20complexas.%20Pode%20me%20atender%3F" target="_blank" className="mt-8 w-full py-4 border-2 border-black font-black uppercase tracking-widest text-sm text-center hover:bg-black hover:text-white transition-all block">Contratar</a>
                            </div>
                        </div>
                        <p className="text-center text-gray-400 text-xs mt-8">* Valores para declarações sem retificação de anos anteriores. Casos especiais sob consulta.</p>
                    </div>
                </section>
                {/* END: IRPF 2026 — PLANOS */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — PROCESSO */}
                {/* ============================================================ */}
                <section className="section-padding bg-zinc-50 text-black" id="ir-processo">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <span className="block text-xs font-black uppercase tracking-widest text-green-600 mb-4">Como funciona</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold">Processo em 5 passos.</h2>
                            <p className="text-gray-500 text-lg mt-4">Do primeiro contato à confirmação de entrega — tudo sem estresse.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                            {[
                                {n:'01', title:'Contato', desc:'Você me chama no WhatsApp. Conversamos rapidamente sobre sua situação.'},
                                {n:'02', title:'Checklist', desc:'Envio uma lista personalizada com os documentos que preciso. Simples e claro.'},
                                {n:'03', title:'Análise', desc:'Analiso cada dado para maximizar deduções e minimizar riscos de malha fina.'},
                                {n:'04', title:'Aprovação', desc:'Você revisa o rascunho da declaração e dá o OK antes de enviar.'},
                                {n:'05', title:'Entrega', desc:'Transmito oficialmente e acompanho a situação junto à Receita Federal.'},
                            ].map(({n, title, desc}, i) => (
                                <div key={n} className="relative p-8 border border-gray-200 bg-white hover:shadow-lg transition-shadow">
                                    {i < 4 && <div className="hidden md:block absolute top-1/2 -right-0.5 w-1 h-8 bg-black -translate-y-1/2 z-10"></div>}
                                    <span className="block text-4xl font-black text-gray-100 mb-4">{n}</span>
                                    <h3 className="text-lg font-black mb-2">{title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — PROCESSO */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — FAQ */}
                {/* ============================================================ */}
                <section className="section-padding bg-white text-black" id="ir-faq">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="mb-16">
                            <span className="block text-xs font-black uppercase tracking-widest text-green-600 mb-4">FAQ IRPF 2026</span>
                            <h2 className="text-4xl md:text-5xl font-extrabold">Dúvidas Frequentes</h2>
                            <p className="text-gray-500 text-lg mt-4">As perguntas mais comuns sobre a declaração de 2026 — respondidas de forma direta.</p>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {[
                                {q:'Ganhei R$ 34.000 em 2025. Preciso declarar?', a:'Provavelmente não. O limite estimado de obrigatoriedade para 2026 é de R$ 35.584 (referente a 2025). Aguarde a confirmação oficial da Receita Federal em 16 de março. Mas se tiver dúvidas, entre em contato — faço uma análise gratuita da sua situação.'},
                                {q:'Quem ganha R$ 5.000/mês precisa declarar em 2026?', a:'Sim! A nova isenção de R$ 5.000/mês começou a valer em janeiro de 2026, mas a declaração de 2026 usa os dados de 2025. Quem ganhou entre R$ 35.584 e R$ 60.000 em 2025 ainda precisa declarar normalmente este ano.'},
                                {q:'Como a declaração pré-preenchida com PIX me ajuda?', a:'Usando a declaração pré-preenchida e optando por receber a restituição via PIX, você ganha prioridade máxima na fila de restituição. Isso pode antecipar seu recebimento em semanas. Eu configuro isso automaticamente para todos os meus clientes.'},
                                {q:'Tenho ETF ou ação estrangeira. Preciso declarar?', a:'Sim. Desde 2025, rendimentos de aplicações no exterior são tributados a 15% de forma anual e definitiva. Isso inclui ETFs internacionais como VOO e QQQ, dividendos de BDRs e contas em corretoras estrangeiras como a Avenue. É crucial declarar corretamente para evitar autuações.'},
                                {q:'O que acontece se eu perder o prazo de 29 de maio?', a:'Você recebe uma multa automática do mínimo de R$ 165,74 até 20% do imposto devido. Além disso, fica para o final da fila de restituição e pode ter o CPF suspenso em caso de reincidência. Não arrisque!'},
                                {q:'Invisto em criptomoedas. Preciso declarar?', a:'Sim. Criptoativos são obrigatórios na declaração de bens. Além disso, lucros em vendas acima de R$ 35.000/mês no mesmo mês estão sujeitos a imposto sobre ganho de capital. Exchange estrangeira também entra como rendimento no exterior.'},
                                {q:'Posso retificar uma declaração de anos anteriores?', a:'Sim! A Receita Federal permite retificação por até 5 anos. Muitas pessoas pagaram mais imposto do que deviam por não aproveitarem todas as deduções. Faço a análise e a retificação para você recuperar o valor.'},
                                {q:'Quando vou receber minha restituição?', a:'As restituições de 2026 serão pagas em 5 lotes, a partir de 30 de maio de 2026, com o último lote em 30 de setembro. Quem usar pré-preenchida + PIX entra nos primeiros lotes. Quem entregar próximo ao prazo final vai para os últimos lotes.'},
                            ].map(({q, a}) => (
                                <details key={q} className="group py-6">
                                    <summary className="flex justify-between items-start font-black text-base cursor-pointer list-none gap-4">
                                        <span>{q}</span>
                                        <span className="transition-transform duration-300 group-open:rotate-45 flex-shrink-0 w-6 h-6 border-2 border-black flex items-center justify-center font-black text-lg">+</span>
                                    </summary>
                                    <p className="text-gray-600 mt-4 leading-relaxed text-sm">{a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — FAQ */}

                {/* ============================================================ */}
                {/* BEGIN: IRPF 2026 — CTA URGENTE */}
                {/* ============================================================ */}
                <section className="py-20 text-white text-center" style={{background:'linear-gradient(135deg, #14532d 0%, #052e16 100%)'}}>
                    <div className="max-w-4xl mx-auto px-6">
                        <span className="inline-block bg-green-500 text-black font-black text-xs uppercase tracking-widest px-4 py-2 mb-8">⏰ Não deixe para última hora</span>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-none">Prazo termina em<br /><span className="text-green-400">{countdown.days} dias, {String(countdown.hours).padStart(2,'0')}h {String(countdown.minutes).padStart(2,'0')}min</span></h2>
                        <p className="text-green-200 text-xl mb-10 font-light">Quem declara cedo recebe a restituição primeiro. Não arrisque multas ou malha fina.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Quero%20declarar%20meu%20IRPF%202026%20antes%20do%20prazo.%20Pode%20me%20ajudar%3F" target="_blank" className="flex items-center justify-center gap-2 bg-green-500 text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-green-400 transition-all text-sm">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                Falar com Thays Agora
                            </a>
                            <a href="#ir-planos" className="flex items-center justify-center border border-green-500 text-green-400 px-10 py-5 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all text-sm">
                                Ver Planos
                            </a>
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — CTA URGENTE */}

                {/* BEGIN: Insights Section */}
                <section className="section-padding text-black" id="insights">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex justify-between items-end mb-16">
                            <div>
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Insights Contábeis</h2>
                                <h3 className="text-display font-extrabold text-black">Educação e Atualização.</h3>
                            </div>
                            <a className="text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hidden md:block" href="#">Ver todos os artigos</a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <article className="group cursor-pointer">
                                <div className="aspect-video bg-gray-100 mb-6 overflow-hidden">
                                    <img alt="IRPF 2026" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByD_4nRl1r7D0622--je78CzYxahEXRYOdhWj3M15wNjc369gHKuYggeRBUNk_U9HnB_sR5SKtSfpqq-Js1SFu4mNqL8zCC6rxSh_jWmeZxyGdUuRyI_sPDJ3AuJ-_mcjLfaw7zcFoPgRHX24ZILMrUPg9djkfmWeOfwvQmlauvWNGM_GWMQJRLzijbTGB6KBFjPfi3K6rhn08CSSLdkFOp09n3xRMuqvDUaCSAfy5eZ_OWwoXsm_95PzxZrtVc-TMWKqmh3M4-kE" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Março 2026 • IRPF 2026</span>
                                <h4 className="text-xl font-bold mt-2 group-hover:underline text-black">A isenção de R$ 5.000/mês não vale para a declaração de 2026 — entenda por quê</h4>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">Muitos contribuintes estão confusos. A nova isenção impacta os descontos de 2026, mas a declaração usa os dados de 2025.</p>
                            </article>
                            <article className="group cursor-pointer">
                                <div className="aspect-video bg-gray-100 mb-6 overflow-hidden">
                                    <img alt="Rendimentos no exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4CLtXFLew92gBmhgxE1eidXWCEa_3OAbFN3q1PK8wG2HUOtzP3Zk1HpbK0byfcoWvp9HA0SwnqCDNGyOpp7Ptcz8h1CiihiFv7CMQ2a1uBos3LmEP1ZVi7FxcuyP9tVg-f9bvN2v98XV5E8cV8UPNkO7wLpWDAq_Re0Gg6qKLbZGgRv2n-qKnEfDwKXWx8Rh6RdpEspnypycHK12zESAv1M2u_nM4NubNLGSb3aTJ6CWlMD9h6LKfiq55F_rO-3C44ZvXEx1B7DY" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-green-600">Março 2026 • Investimentos</span>
                                <h4 className="text-xl font-bold mt-2 group-hover:underline text-black">ETF, BDR e cripto no exterior: como declarar corretamente em 2026</h4>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">Com a tributação de 15% definitiva, investidores internacionais precisam de atenção redobrada na declaração deste ano.</p>
                            </article>
                            <article className="group cursor-pointer">
                                <div className="aspect-video bg-gray-100 mb-6 overflow-hidden">
                                    <img alt="Malha fina" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBn5jNtC5Bc-QQzs_d6l5IUr6668ZKnsmdXk4xLurHuJWhnjeeLW70N6sPgJMzCB3nzwNizGtKPOkYUaCEnMTVhnHCryfqfFXe7NbaFcLDpSTwbyzgWPkGLgbpW2eAslXZd6rceYYIJLUoBrq5wiAypHGTfSieT0nHSX0cIyT1OgIq7kY3zkeqaJd9HjsxuLoJhIEnao2huB5KvkszKNzB2FXTA2c6i0e5N7kM4wCfOzBG5OscSq0ml5ouzaaGQ2icV8cHdBPB9yY" />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Fevereiro 2026 • Planejamento</span>
                                <h4 className="text-xl font-bold mt-2 group-hover:underline text-black">Pré-preenchida + PIX: como garantir prioridade na restituição em 2026</h4>
                                <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">A Receita Federal criou uma nova fila prioritária. Saiba como se posicionar para receber antes em 2026.</p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* BEGIN: FAQ Section */}
                <section className="section-padding bg-zinc-50 text-black">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-4xl font-extrabold mb-12 text-center">Dúvidas Frequentes</h2>
                        <div className="divide-y divide-gray-200">
                            <details className="group py-6">
                                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                                    Como funciona o processo de migração contábil?
                                    <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                </summary>
                                <p className="text-gray-500 mt-4 leading-relaxed">O processo é simples e transparente. Realizamos uma auditoria inicial dos documentos e garantimos uma transição sem interrupções nas suas obrigações fiscais.</p>
                            </details>
                            <details className="group py-6">
                                <summary className="flex justify-between items-center font-bold text-lg cursor-pointer list-none">
                                    Atende empresas de quais regimes tributários?
                                    <span className="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg></span>
                                </summary>
                                <p className="text-gray-500 mt-4 leading-relaxed">Tenho vasta experiência com Simples Nacional, Lucro Presumido e Lucro Real, adaptando a estratégia contábil para cada necessidade específica.</p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Enhanced CTA Section */}
                <section className="py-24 bg-black text-white text-center">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-display font-extrabold mb-8">Pronto para elevar o nível da sua contabilidade?</h2>
                        <p className="text-zinc-400 text-xl mb-12 font-light">Solicite um diagnóstico gratuito hoje mesmo e descubra oportunidades de economia para o seu negócio.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <a className="bg-white text-black px-12 py-6 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors" href="#contact">Solicitar Diagnóstico</a>
                            <a className="border border-white text-white px-12 py-6 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all" href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20situa%C3%A7%C3%A3o%20cont%C3%A1bil.%20Pode%20me%20atender%3F" target="_blank">WhatsApp Direto</a>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Contact Section */}
                <section className="section-padding bg-zinc-50 border-t border-gray-100 text-black" id="contact">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-white p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-sm">
                            <div>
                                <h2 className="text-display font-extrabold mb-8">Vamos conversar?</h2>
                                <p className="text-gray-500 text-xl mb-12">Entre em contato para uma consultoria personalizada e descubra como podemos otimizar seu negócio.</p>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </div>
                                        <a href="https://wa.me/5562968896669" target="_blank" className="font-bold text-lg hover:text-green-700 transition-colors">(62) 9688-9669</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </div>
                                        <span className="font-bold text-lg">thays.morais@contabil.com.br</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-black flex items-center justify-center text-white">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        </div>
                                        <span className="font-bold text-lg">Rua CRP 12, QD. 03 Lt 24, Goiânia</span>
                                    </div>
                                </div>
                            </div>
                            <div className="h-full min-h-[400px] relative overflow-hidden grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-500">
                                <iframe
                                    title="Localização Thays Morais — Rua CRP 12, Goiânia"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.8!2d-49.3066!3d-16.7289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3b88d50acb5%3A0x7f2a2a8b7c5e6f1a!2sRua%20CRP%2012%2C%20Goi%C3%A2nia%20-%20GO!5e0!3m2!1spt-BR!2sbr!4v1741660000000"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, position: 'absolute', inset: 0, minHeight: '400px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Footer */}
                <footer className="py-12 border-t border-gray-100 text-black">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-black flex items-center justify-center text-white font-bold text-[10px]">TM</div>
                            <span className="font-bold text-sm tracking-tight uppercase">Thays Morais</span>
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                            © 2026 Thays Morais - Todos os direitos reservados. Analista Contábil.
                        </p>
                        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                            <a className="hover:text-black transition-colors" href="#">Privacidade</a>
                            <a className="hover:text-black transition-colors" href="#">Termos</a>
                            <a className="hover:text-black transition-colors" href="https://linkedin.com">LinkedIn</a>
                        </div>
                    </div>
                </footer>
                {/* END: Footer */}

                {/* BEGIN: Floating WhatsApp Button */}
                <a
                    href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%20Pode%20me%20atender%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Falar com Thays no WhatsApp"
                    style={{
                        position:'fixed', bottom:'24px', right:'24px', zIndex:9999,
                        width:'60px', height:'60px', borderRadius:'50%',
                        background:'#22c55e', display:'flex', alignItems:'center', justifyContent:'center',
                        boxShadow:'0 4px 24px rgba(34,197,94,0.5)', transition:'transform 0.2s'
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform='scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform='scale(1)')}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                </a>
                {/* END: Floating WhatsApp Button */}

                <LeadFunnelModal 
                    isOpen={isLeadModalOpen} 
                    onClose={() => setIsLeadModalOpen(false)} 
                />
            </div>
        </ThemeProvider>
    );
};

export default App;

