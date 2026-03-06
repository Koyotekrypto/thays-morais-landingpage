import React from 'react';
import { VALIDATION_LOGS } from '../../data/mockData';
import { motion } from 'framer-motion';

export const ValidationLog: React.FC = () => {
    return (
        <section id="cases" className="py-32 relative bg-background border-y border-white/5 overflow-hidden">
            {/* Subtle dynamic background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

            <div className="max-w-[1920px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
                >
                    <div>
                        <span className="text-secondary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block drop-shadow-[0_0_8px_rgba(0,180,216,0.3)]">
                            MÚLTIPLOS REAIS
                        </span>
                        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                            Resultados <span className="font-drama italic text-primary lowercase tracking-normal font-normal">Comprovados</span>
                        </h2>
                    </div>
                    <p className="text-muted-foreground max-w-lg text-sm md:text-base leading-relaxed">
                        Nossos projetos não são apenas código; são ativos digitais mensuráveis construídos para alavancar lucratividade.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {VALIDATION_LOGS.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="p-10 rounded-[2rem] group cursor-pointer
                                       bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-primary/30 
                                       transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,180,216,0.2)]"
                        >
                            <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5 group-hover:border-primary/20 transition-colors duration-500">
                                <span className="px-4 py-1.5 text-[10px] uppercase font-bold tracking-[0.2em] bg-primary/10 text-primary border border-primary/20 rounded-full">
                                    {log.sector}
                                </span>
                                <span className="material-symbols-outlined text-gray-700 group-hover:text-primary transition-colors duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                    north_east
                                </span>
                            </div>

                            <div className="mb-6">
                                <span className="font-display text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 group-hover:from-white group-hover:to-primary transition-all duration-500">
                                    {log.metric}
                                </span>
                            </div>

                            <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 group-hover:text-white transition-colors duration-300">
                                {log.label}
                            </span>

                            <p className="text-sm text-muted-foreground italic leading-relaxed">
                                "{log.quote}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValidationLog;

