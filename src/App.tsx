import React from 'react';
import { Navbar } from './components/Navbar';
import { LeftSidebar } from './components/LeftSidebar';
import { Hero } from './components/sections/Hero';
import { ServiceMatrix } from './components/sections/ServiceMatrix';
import { OperationalFlow } from './components/sections/OperationalFlow';
import { ValidationLog } from './components/sections/ValidationLog';
import { Authority } from './components/sections/Authority';
import { LeadFunnel } from './components/sections/LeadFunnel';
import { Footer } from './components/Footer';

import { ThemeProvider } from "@/components/theme-provider"

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-background text-foreground font-body selection:bg-primary/30 overflow-x-hidden flex">
                <LeftSidebar />

                {/* Main Content Area pushed to right */}
                <div className="flex-1 ml-20">
                    <Navbar />

                    <main className="relative z-10 p-4 max-w-[1920px] mx-auto flex flex-col gap-4">
                        <Hero />
                        <Authority />
                        <ServiceMatrix />
                        <OperationalFlow />
                        <ValidationLog />

                        {/* Lead Capture Section */}
                        <section id="contato" className="py-24 relative mt-12 mb-12">
                            <div className="max-w-[1920px] mx-auto px-6">
                                <div className="premium-gradient-card p-12 md:p-16 rounded-[2rem] relative overflow-hidden">
                                    {/* Glow effects - toned down for gradient bg */}
                                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-200/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
                                        {/* Copy */}
                                        <div>
                                            <span className="text-black/60 font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                                                PRÓXIMO PASSO
                                            </span>
                                            <h2 className="font-sans text-4xl md:text-5xl lg:text-5xl font-black text-[#1a1a1a] mb-6 leading-tight">
                                                Pronto para <br className="hidden md:block" />
                                                Transformar sua Empresa?
                                            </h2>
                                            <p className="text-[#1a1a1a]/80 text-lg mb-8 leading-relaxed max-w-lg font-medium">
                                                Agende uma sessão estratégica de 15 minutos com nossos engenheiros de software e descubra o impacto da ConectaDev no seu plano de negócios.
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-[#1a1a1a]/70 mb-8 font-semibold">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-[#1a1a1a] text-xl">verified_user</span>
                                                    <span>100% Confidencial (NDA)</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Lead Qualification Funnel */}
                                        <LeadFunnel />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <Footer />
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
