import { FOOTER_LINKS, SYSTEM_STATS } from '../data/mockData';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-border bg-background pt-24 pb-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_15px_rgba(0,180,216,0.5)]"></div>

            <div className="max-w-[1920px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6 lg:col-span-2"
                    >
                        <a href="#" className="flex items-center gap-3 w-fit">
                            <img src="/assets/logo.png" alt="ConectaDev Logo" className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,180,216,0.3)] border-none outline-none" />
                        </a>
                        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                            Engenharia de software de elite para empresas que buscam liderar a nova economia digital. Não entregamos apenas código; entregamos resultados.
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                            <span className="flex h-3 w-3 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <Badge variant="outline" className="border-primary/20 bg-primary/5 text-white font-bold tracking-widest px-4 py-1.5 uppercase text-[10px]">
                                {SYSTEM_STATS.location} — Operando em Alto Nível
                            </Badge>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white font-display font-bold uppercase tracking-[0.2em] text-xs">Aceleração</h4>
                        <ul className="flex flex-col gap-4">
                            {FOOTER_LINKS.map((link, i) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.1 * i }}
                                >
                                    <a className="text-sm font-medium text-muted-foreground hover:text-white transition-all flex items-center gap-3 group" href={link.href}>
                                        <span className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,180,216,0.8)] transition-all">{link.icon}</span>
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal / Social */}
                    <div className="flex flex-col gap-8">
                        <h4 className="text-white font-display font-bold uppercase tracking-[0.2em] text-xs">Compliance</h4>
                        <ul className="flex flex-col gap-4">
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <a className="text-sm font-medium text-muted-foreground hover:text-white transition-all flex items-center gap-3 group" href="#">
                                    <span className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-primary transition-colors">description</span>
                                    Termos de Serviço
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <a className="text-sm font-medium text-muted-foreground hover:text-white transition-all flex items-center gap-3 group" href="#">
                                    <span className="material-symbols-outlined text-[16px] text-gray-600 group-hover:text-primary transition-colors">shield</span>
                                    Política de Privacidade (LGPD)
                                </a>
                            </motion.li>
                        </ul>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="mt-6 p-6 rounded-2xl bg-card border border-white/5 inline-block w-fit shadow-[0_0_30px_rgba(0,180,216,0.05)] hover:border-primary/20 transition-colors"
                        >
                            <span className="material-symbols-outlined text-primary text-3xl opacity-80 block mb-3 drop-shadow-[0_0_8px_rgba(0,180,216,0.5)]">policy</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] block">Ambiente</span>
                            <span className="text-sm text-white font-bold block mt-1 tracking-wide">100% Protegido</span>
                        </motion.div>
                    </div>

                </div>

                <Separator className="bg-white/10" />

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-[11px] text-gray-500 uppercase tracking-[0.2em] font-bold">
                    <span>© {new Date().getFullYear()} ConectaDev. Todos os direitos reservados.</span>
                    <span>CNPJ: 00.000.000/0000-00</span>
                </div>
            </div>

            {/* Background texture */}
            <div className="absolute top-1/2 right-0 blur-[150px] w-96 h-96 bg-primary/5 rounded-full pointer-events-none"></div>
        </footer>
    );
};

export default Footer;
