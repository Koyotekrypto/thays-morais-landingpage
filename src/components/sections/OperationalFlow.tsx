import React from 'react';
import { motion } from 'framer-motion';

export const OperationalFlow: React.FC = () => {
    const steps = [
        { id: '01', title: 'Afinamento Lógico', desc: 'Mapeamento profundo e definição de arquitetura base.' },
        { id: '02', title: 'Design Sistêmico', desc: 'UI/UX com foco absoluto na fricção zero.' },
        { id: '03', title: 'Build Elite', desc: 'Desenvolvimento ágil com código limpo e escalável.' },
        { id: '04', title: 'Growth Contínuo', desc: 'Análise de métricas e otimizações recorrentes.' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <section id="metodologia" className="py-24 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1920px] mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center justify-center text-center mb-20"
                >
                    <span className="text-primary font-display font-bold uppercase tracking-[0.3em] text-[10px] mb-4 drop-shadow-[0_0_8px_rgba(0,180,216,0.3)]">
                        A CIÊNCIA DA ENTREGA
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
                        Metodologia <span className="font-drama italic text-secondary lowercase tracking-normal font-normal">ConectaDev</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-secondary/50 to-transparent mt-8"></div>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting line for desktop */}
                    <div className="absolute top-8 left-[10%] w-[80%] h-[1px] bg-gray-800/30 hidden md:block z-0">
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            whileInView={{ width: '100%', opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_10px_rgba(0,180,216,0.5)]"
                        ></motion.div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
                    >
                        {steps.map((step, idx) => (
                            <motion.div variants={itemVariants} key={step.id} className="flex flex-col items-center text-center group cursor-pointer">
                                {/* Step Circle */}
                                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 
                                            bg-slate-900/80 backdrop-blur-md border border-gray-800 
                                            group-hover:bg-primary/10 group-hover:border-primary/50 
                                            transition-all duration-500 group-hover:-translate-y-2 
                                            shadow-inner-glow group-hover:shadow-[0_10px_30px_rgba(0,180,216,0.2)]">
                                    <span className="text-xl font-display font-black text-gray-500 group-hover:text-white transition-colors duration-500 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">{step.id}</span>
                                </div>

                                {/* Content */}
                                <h3 className="font-display text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px] group-hover:text-gray-300 transition-colors duration-300">
                                    {step.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default OperationalFlow;

