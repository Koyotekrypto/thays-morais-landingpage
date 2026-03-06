import React from 'react';
import { NAV_LINKS } from '../data/mockData';
import { Button } from './ui/button';
import { ModeToggle } from './ModeToggle';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
        >
            <div className={`
                max-w-fit flex items-center gap-8 h-16 px-8 rounded-full border transition-all duration-500 pointer-events-auto
                ${isScrolled
                    ? 'bg-background/80 backdrop-blur-xl border-border shadow-2xl py-2 scale-100'
                    : 'bg-transparent border-transparent py-4 scale-105'
                }
            `}>
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img src="/assets/logo.png" alt="ConectaDev Logo" className="h-6 md:h-8 lg:h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(0,180,216,0.5)] border-none outline-none" />
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                    <div className="hidden sm:block">
                        <ModeToggle />
                    </div>
                    <Button variant="neon" size="sm" className="btn-magnetic rounded-full h-10 px-6 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(0,180,216,0.3)] hover:shadow-[0_0_25px_rgba(0,180,216,0.6)] transition-all">
                        Conectar
                    </Button>
                </div>
            </div>
        </motion.nav>
    );
};
