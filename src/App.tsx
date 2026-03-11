import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "@/components/theme-provider"
import { HeroImageAccordion } from "@/components/ui/interactive-image-accordion"
import { LeadFunnelModal } from "@/components/sections/LeadFunnelModal"
import { ArrowRight, Linkedin, Instagram } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { ScrollScaleSection } from "@/components/ui/scroll-scale-section"
import { contentData } from "@/data/content"

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
                        <div className="flex items-center gap-3">
                            <img src="/assets/logo-leao.jpg" alt="Logo Leão Thays Morais" className="h-12 w-auto object-contain" />
                            <span className="font-bold text-xl tracking-tight uppercase">Thays Morais</span>
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
                <ScrollScaleSection startScale={0.9} className="bg-white">
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
                </ScrollScaleSection>
                {/* END: New Hero Section */}

                {/* BEGIN: Hero Section */}
                <ScrollScaleSection startScale={0.9} className="bg-white">
                <header className="pt-28 lg:pt-32 pb-0">
                    <div className="max-w-7xl mx-auto px-6">
                        {/* Desktop: split side-by-side */}
                        <div className="hidden lg:flex flex-row items-center gap-12 min-h-[520px]">
                            {/* Left — texto e CTAs */}
                            <div className="w-1/2 flex-shrink-0 flex flex-col justify-center">
                                <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">Thays Morais · Consultoria Fiscal &amp; Societária</span>
                                <h2 className="text-huge font-extrabold mb-6 text-black leading-none">
                                    Regularize. Estruture.<br />
                                    <span className="text-zinc-500">Cresça com segurança.</span>
                                </h2>
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
                                <h2 className="text-5xl font-extrabold mb-4 text-black leading-none">
                                    Regularize. Estruture.<br /><span className="text-zinc-500">Cresça com segurança.</span>
                                </h2>
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
                </ScrollScaleSection>
                {/* END: Hero Section */}


                {/* BEGIN: Strategic Value Section */}
                <section className="section-padding border-y border-gray-100" id="strategic-value">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Valor Além dos Números</h2>
                            <h3 className="text-display text-black font-extrabold">Sua declaração executada de forma inteligente.</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {contentData.strategicValue.map((item) => (
                                <div key={item.number} className="space-y-6">
                                    <div className="w-12 h-12 bg-black flex items-center justify-center text-white font-bold">{item.number}</div>
                                    <h3 className="text-2xl font-bold text-black">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BEGIN: Consultancy Process */}
                <section className="section-padding bg-zinc-50" id="process">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
                            <div className="max-w-xl">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Metodologia</h2>
                                <h3 className="text-display text-black font-extrabold">Nosso Processo de Trabalho.</h3>
                            </div>
                            <p className="text-gray-500 text-lg max-w-md">Um modelo rigoroso e transparente desenhado para garantir precisão absoluta, segurança fiscal e a máxima restituição do seu Imposto de Renda.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {contentData.methodology.map((item) => (
                                <div key={item.step} className="relative p-8 bg-white border border-gray-100 hover:shadow-xl transition-shadow text-black">
                                    <span className="text-step font-black absolute top-2 right-4">{item.step}</span>
                                    <h3 className="text-xl font-bold mt-12 mb-4">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BEGIN: About Section */}
                <section className="section-padding bg-zinc-50 text-black relative mx-4 md:mx-0 my-12 md:my-0 rounded-2xl md:rounded-none overflow-hidden" id="about">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
                            {/* Left: Professional Card */}
                            <div className="lg:col-span-4 mb-10 lg:mb-0">
                                <div className="sticky top-32 p-1 border border-zinc-200 bg-white shadow-xl flex flex-col items-center hover:shadow-2xl hover:border-black transition-all duration-500 hover:-translate-y-1">
                                    <div className="w-full aspect-square bg-zinc-100 overflow-hidden relative">
                                        <img src="/assets/thays-dossie.jpg" alt="Thays Morais Profile" className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6">
                                            <span className="text-white font-bold tracking-widest uppercase text-xs">Thays Morais</span>
                                        </div>
                                    </div>
                                    <div className="w-full p-8 text-center flex flex-col items-center">
                                        <h3 className="text-lg font-black uppercase tracking-tight text-black mb-1">Analista Contábil</h3>
                                        <p className="text-xs text-zinc-500 font-bold tracking-widest uppercase mb-6">CRC/GO Ativo • Goiânia/GO</p>
                                        <div className="flex items-center justify-center gap-4 w-full">
                                            <a href={contentData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-black hover:text-white transition-all hover:scale-110">
                                                <Linkedin size={18} />
                                            </a>
                                            <a href={contentData.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-black hover:text-white transition-all hover:scale-110">
                                                <Instagram size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right: Bio and Metrics */}
                            <div className="lg:col-span-8 flex flex-col justify-center py-10 md:py-0">
                                <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-6 border-b border-zinc-200 w-max pb-2">O Dossiê Profissional</span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-none mb-10 text-black tracking-tight drop-shadow-sm">
                                    Experiência que transforma números em <span className="text-zinc-400">segurança e estratégia.</span>
                                </h2>
                                
                                <div className="space-y-6 text-zinc-600 text-lg leading-relaxed mb-12">
                                    <p>
                                        Sou uma <strong className="text-black">Analista Contábil</strong> com sólida vivência em rotinas fiscais e contábeis de alta complexidade. Meu propósito é ir além do cumprimento das obrigações: eu atuo para garantir <strong className="text-black">conformidade estrutural</strong> e proteção jurídica total para o patrimônio de cada cliente.
                                    </p>
                                    <p>
                                        Com profundo domínio na entrega de declarações acessórias como ECD e ECF, e uma visão clínica da legislação vigente, transformo dados brutos em inteligência. Proporciono o alicerce sólido que gestores e empreendedores precisam para tomar decisões de impacto e alavancar seus negócios de forma inabalável.
                                    </p>
                                </div>

                                {/* Authority Metrics */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-zinc-200">
                                    {contentData.authorityMetrics.map((metric, idx) => (
                                        <div key={idx} className="flex flex-col group cursor-default">
                                            <span className="text-5xl font-black text-black leading-none mb-3 group-hover:scale-110 transform origin-left transition-transform">{metric.value}</span>
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 whitespace-pre-line">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Signature */}
                                <div className="mt-12 md:mt-16 text-left pt-6">
                                    <span className="font-drama text-5xl md:text-6xl text-zinc-300 mb-2 block -ml-2 select-none pointer-events-none">Thays Morais</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Testimonials/Quotes 
                <section className="py-16 md:py-32 bg-black text-white overflow-hidden relative border-y border-zinc-900 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-black z-0"></div>
                    <div className="absolute top-0 right-0 w-3/4 h-full opacity-[0.03] bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:24px_24px] z-0"></div>
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-zinc-800 rounded-full mix-blend-screen filter blur-[100px] opacity-30 group-hover:opacity-50 transition-opacity duration-1000"></div>
                    
                    <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
                        <svg className="w-12 h-12 md:w-16 md:h-16 text-zinc-800 mb-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L21.017 3V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C8.55228 16 9 15.5523 9 15V9C9 8.44772 8.55228 8 8 8H5C3.89543 8 3 7.10457 3 6V3L10 3V15C10 18.3137 7.31371 21 4 21H3Z"></path></svg>
                        <blockquote className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-12 max-w-5xl tracking-tight text-white/90 drop-shadow-2xl">
                            "A contabilidade transcende o passado; <span className="text-zinc-500">ela é a bússola para planejar o seu futuro.</span> Meu compromisso é alinhar transparência à inteligência estratégica."
                        </blockquote>
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-px bg-zinc-700"></div>
                            <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">O Manifesto</p>
                            <div className="w-16 h-px bg-zinc-700"></div>
                        </div>
                    </div>
                </section>
                END: Testimonials/Quotes */}

                {/* BEGIN: Experience Section */}
                <section className="section-padding text-black bg-white" id="experience">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="mb-16 flex flex-col items-start gap-4">
                            <span className="block text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2 border-b border-zinc-200 pb-2">Experiência Profissional</span>
                            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-black leading-none drop-shadow-sm">A Jornada.</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {contentData.trajetoria.map((item, idx) => (
                                <div key={idx} className={`card-3d hover-lift p-10 border flex flex-col justify-between shadow-xl min-h-[440px] cursor-default group ${item.cardStyle}`}>
                                    <div>
                                        <span className={`text-[10px] font-black uppercase tracking-widest mb-8 inline-block shadow-sm ${item.periodStyle}`}>{item.period}</span>
                                        <h3 className="text-3xl font-black mb-2 leading-none text-black tracking-tight group-hover:text-zinc-700 transition-colors">{item.company}</h3>
                                        <p className="text-zinc-500 font-bold mb-6 uppercase text-xs tracking-widest border-b border-zinc-100 pb-4">{item.role}</p>
                                        <p className="text-sm text-zinc-600 mb-6 leading-relaxed">{item.desc}</p>
                                        <ul className="space-y-4 text-sm text-zinc-700 font-medium">
                                            {item.bullets.map((bullet, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <span className={`w-1.5 h-1.5 mt-1.5 flex-shrink-0 shadow-sm ${item.bulletStyle}`}></span>
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
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
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Tech Stack & Software</h3>
                                    <div className="grid grid-cols-2 gap-y-4">
                                        {contentData.techStack.map((tech) => (
                                            <div key={tech.name} className="flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full ${tech.color}`}></div>
                                                <span className="text-sm font-medium">{tech.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                                {/* Formation */}
                                <div data-purpose="service-block">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-zinc-800 pb-2">Formação</h3>
                                    <ul className="space-y-4">
                                        {contentData.formation.map((item) => (
                                            <li key={item.title}>
                                                <div className="font-bold text-lg text-white">{item.title}</div>
                                                <div className="text-zinc-500 text-sm">{item.desc}</div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {/* Competencies */}
                                <div data-purpose="service-block">
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 border-b border-zinc-800 pb-2">Competências</h3>
                                    <div className="flex flex-wrap gap-2 text-white">
                                        {contentData.competencies.map((comp) => (
                                            <span key={comp} className="border border-zinc-700 px-4 py-2 text-xs font-medium uppercase hover:bg-white hover:text-black transition-colors cursor-default">{comp}</span>
                                        ))}
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
                                    <a href={contentData.socialLinks.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-5 font-black uppercase tracking-widest hover:bg-green-500 transition-all text-sm">
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
                            {contentData.novidades.map(({tag, icon, title, desc}) => (
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
                            {contentData.planos.map((plano, index) => (
                                <div key={index} className={`p-8 flex flex-col ${plano.style}`}>
                                    {plano.badge && (
                                        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-black uppercase tracking-widest px-4 py-1">
                                            {plano.badge}
                                        </span>
                                    )}
                                    <span className={`text-xs font-black uppercase tracking-widest mb-4 ${plano.badge ? 'text-zinc-400' : 'text-gray-400'}`}>{plano.name}</span>
                                    <div className={`text-5xl font-black mb-2 ${plano.textColor}`}>{plano.price}</div>
                                    <p className={`${plano.descColor} text-sm mb-8`}>{plano.description}</p>
                                    <ul className={`space-y-3 text-sm flex-1 ${plano.textColor}`}>
                                        {plano.features.map(item => {
                                            const isHighlighted = plano.highlightedFeatures.includes(item);
                                            return (
                                                <li key={item} className="flex items-start gap-2">
                                                    <span className={`font-bold mt-0.5 ${isHighlighted ? 'text-[#4ade80]' : plano.checkColor}`}>✓</span>
                                                    <span>{item}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                    <a href={plano.callToAction} target="_blank" rel="noopener noreferrer" className={`mt-8 w-full py-4 font-black uppercase tracking-widest text-sm text-center transition-all block ${plano.btnStyle}`}>Contratar</a>
                                </div>
                            ))}
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
                            {contentData.processos.map(({n, title, desc}, i) => (
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
                            {contentData.faqsIRPF.map(({q, a}) => (
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
                            <a href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Quero%20declarar%20meu%20IRPF%202026%20antes%20do%20prazo.%20Pode%20me%20ajudar%3F" target="_blank" className="flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-4 md:px-10 md:py-5 font-black uppercase tracking-widest hover:bg-green-400 transition-all text-xs md:text-sm text-center">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                Falar com Thays Agora
                            </a>
                            <a href="#ir-planos" className="flex items-center justify-center border border-green-500 text-green-400 px-6 py-4 md:px-10 md:py-5 font-bold uppercase tracking-widest hover:bg-green-500 hover:text-black transition-all text-xs md:text-sm text-center">
                                Ver Planos
                            </a>
                        </div>
                    </div>
                </section>
                {/* END: IRPF 2026 — CTA URGENTE */}

                {/* BEGIN: Insights Section 
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
                            {contentData.insights.map((insight, idx) => (
                                <article key={idx} className="group cursor-pointer">
                                    <div className="aspect-video bg-gray-100 mb-6 overflow-hidden">
                                        <img alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={insight.image} />
                                    </div>
                                    <span className={`text-[10px] font-bold uppercase tracking-widest ${insight.tagColor}`}>{insight.tag}</span>
                                    <h4 className="text-xl font-bold mt-2 group-hover:underline text-black">{insight.title}</h4>
                                    <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">{insight.desc}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
                END: Insights Section */}

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
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                            <a className="bg-white text-black px-6 py-4 md:px-12 md:py-6 font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center justify-center text-center text-xs md:text-sm" href="#contact">Solicitar Diagnóstico</a>
                            <a className="border border-white text-white px-6 py-4 md:px-12 md:py-6 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center justify-center text-center text-xs md:text-sm" href="https://wa.me/5562968896669?text=Ol%C3%A1%2C%20Thays!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20situa%C3%A7%C3%A3o%20cont%C3%A1bil.%20Pode%20me%20atender%3F" target="_blank">WhatsApp Direto</a>
                        </div>
                    </div>
                </section>

                {/* BEGIN: Contact Section */}
                <section className="section-padding bg-zinc-50 border-t border-gray-100 text-black" id="contact">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="bg-white p-8 md:p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center shadow-sm">
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
                        <div className="flex items-center gap-3">
                            <img src="/assets/logo-leao.jpg" alt="Logo Leão Thays Morais" className="h-10 w-auto object-contain grayscale opacity-80" />
                            <span className="font-bold text-base tracking-tight uppercase">Thays Morais</span>
                        </div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest">
                            © 2026 Thays Morais - Todos os direitos reservados. Analista Contábil.
                        </p>
                        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
                            <a className="hover:text-black transition-colors" href="#">Privacidade</a>
                            <a className="hover:text-black transition-colors" href="#">Termos</a>
                            <a className="hover:text-black transition-colors" href={contentData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a className="hover:text-black transition-colors" href={contentData.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
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

