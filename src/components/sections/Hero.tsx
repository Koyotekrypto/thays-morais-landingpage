import React from 'react';
import { HERO_CONTENT } from '../../data/mockData';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

export const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-32">
            {/* Background Image / Texture Layer */}
            <motion.div
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={HERO_CONTENT.vizImage}
                    alt="Fundo digital abstrato representando tecnologia e inovação em serviços contábeis"
                    title="Tecnologia Contábil Thays Morais"
                    loading="lazy"
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent"></div>
            </motion.div>

            <div className="max-w-[1920px] mx-auto px-8 md:px-16 w-full relative z-10">
                {/* Text Content - Positioned Bottom Left */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                                delayChildren: 0.2
                            }
                        }
                    }}
                    className="flex flex-col gap-4 max-w-4xl"
                >
                    <motion.div
                        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <span className="w-12 h-px bg-primary/50"></span>
                        <span className="text-secondary font-display font-bold uppercase tracking-[0.3em] text-[10px]">
                            {HERO_CONTENT.directive}
                        </span>
                    </motion.div>

                    <h1 className="flex flex-col gap-0">
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                            className="font-display text-3xl md:text-5xl lg:text-5xl font-black text-white leading-none tracking-tighter uppercase mb-2"
                        >
                            {HERO_CONTENT.title}
                        </motion.span>
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: "easeOut", delay: 0.2 } } }}
                            className="font-drama text-6xl md:text-8xl lg:text-[10rem] italic text-primary leading-[0.8] -mt-2 drop-shadow-neon-glow"
                        >
                            ENGENHARIA
                        </motion.span>
                    </h1>

                    <motion.p
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 1 } } }}
                        className="text-muted-foreground text-sm md:text-lg max-w-xl font-medium leading-relaxed mt-8 mb-8 border-l border-primary/20 pl-6"
                    >
                        {HERO_CONTENT.description}
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap gap-5"
                    >
                        <MagneticButton>
                            <Button variant="neon" size="lg" className="btn-magnetic rounded-full px-10 h-14 text-xs font-bold uppercase tracking-widest shadow-neon-glow">
                                {HERO_CONTENT.primaryAction}
                                <span className="material-symbols-outlined text-sm ml-3">arrow_outward</span>
                            </Button>
                        </MagneticButton>

                        <MagneticButton>
                            <Button variant="outline" size="lg" className="btn-magnetic rounded-full px-10 h-14 text-xs font-bold uppercase tracking-widest border-white/10 hover:bg-white/5">
                                {HERO_CONTENT.secondaryAction}
                            </Button>
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Grid Pattern - Very Subtle */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #00B4D8 1px, transparent 1px), linear-gradient(to bottom, #00B4D8 1px, transparent 1px)', backgroundSize: '6rem 6rem' }}></div>

            {/* Status Indicator (System Operational) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 right-10 flex items-center gap-3"
            >
                <div className="w-2 h-2 rounded-full bg-green-500 status-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">System Operational</span>
            </motion.div>
        </section>
    );
};

export default Hero;
