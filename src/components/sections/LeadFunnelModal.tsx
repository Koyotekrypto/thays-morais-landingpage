import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, Check } from 'lucide-react';

interface LeadData {
    service: string;
    profile: string;
    situations: string[];
    urgency: string;
    investment: string;
    name: string;
    whatsapp: string;
    email: string;
    source: string;
}

const INITIAL_DATA: LeadData = {
    service: '',
    profile: '',
    situations: [],
    urgency: '',
    investment: '',
    name: '',
    whatsapp: '',
    email: '',
    source: '',
};

interface LeadFunnelModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LeadFunnelModal: React.FC<LeadFunnelModalProps> = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState<LeadData>(INITIAL_DATA);
    const [isClosing, setIsClosing] = useState(false);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setData(INITIAL_DATA);
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleNext = () => setStep(s => Math.min(s + 1, 6));
    const handlePrev = () => setStep(s => Math.max(s - 1, 1));

    const toggleSituation = (sit: string) => {
        setData(prev => {
            const current = prev.situations;
            if (current.includes(sit)) {
                return { ...prev, situations: current.filter(item => item !== sit) };
            }
            if (current.length >= 3) return prev;
            return { ...prev, situations: [...current, sit] };
        });
    };

    const formatWhatsAppMessage = () => {
        const text = `Olá, Thays! 👋 Vim pelo site e preenchi o questionário de qualificação.

📋 *Serviço desejado:* ${data.service}
👤 *Perfil:* ${data.profile}
📌 *Situação:* ${data.situations.join(', ')}
⏱ *Urgência:* ${data.urgency}
💰 *Investimento previsto:* ${data.investment}

*Meus dados:*
• Nome: ${data.name}
• WhatsApp: ${data.whatsapp}
• E-mail: ${data.email || 'Não informado'}
• Como te encontrei: ${data.source}

Aguardo seu retorno! 😊`;

        return encodeURIComponent(text);
    };

    const handleFinish = () => {
        const phone = '5562968896669';
        const message = formatWhatsAppMessage();
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/40 backdrop-blur-md z-40 transition-all duration-500"
            />

            {/* Modal Content */}
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative z-50 w-full max-w-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl h-full md:h-auto md:min-h-[600px] flex flex-col shadow-2xl border border-white/20 rounded-2xl overflow-hidden"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 hover:bg-gray-100 transition-colors rounded-none"
                    aria-label="Fecar modal"
                >
                    <X size={24} className="text-black" />
                </button>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-gray-100 flex mt-0">
                    {[1, 2, 3, 4, 5, 6].map(i => (
                        <div
                            key={i}
                            className={`h-full flex-1 transition-all duration-500 ${step >= i ? 'bg-black' : 'bg-transparent'}`}
                        />
                    ))}
                </div>

                {/* Steps Body */}
                <div className="flex-1 flex flex-col p-8 md:p-12">
                    <div className="mb-8">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 block mb-2">
                            Passo {step} de 6
                        </span>
                        <h2 className="text-2xl md:text-3xl font-black text-black leading-tight">
                            {step === 1 && "Qual o principal serviço que você precisa?"}
                            {step === 2 && "Você é Pessoa Física ou Jurídica?"}
                            {step === 3 && "Qual é a sua situação atual?"}
                            {step === 4 && "Qual é o seu prazo de urgência?"}
                            {step === 5 && "Qual é a sua faixa de investimento previsto?"}
                            {step === 6 && "Seus dados de contato"}
                        </h2>
                        {step === 3 && (
                            <p className="text-xs text-gray-400 mt-2 uppercase font-bold tracking-tighter">Selecione até 3 opções</p>
                        )}
                    </div>

                    <div className="flex-1">
                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 gap-3"
                                >
                                    {[
                                        "IR 2026 — Declaração do Imposto de Renda",
                                        "Abertura ou Encerramento de Empresa",
                                        "Reestruturação Contratual / Societária",
                                        "Negociação de Débitos Tributários",
                                        "Contabilidade Mensal / BPO Fiscal"
                                    ].map(item => (
                                        <button
                                            key={item}
                                            onClick={() => { setData({ ...data, service: item }); handleNext(); }}
                                            className={`w-full text-left p-4 border rounded-xl hover-lift transition-all flex justify-between items-center group ${data.service === item ? 'border-primary shadow-glow-container bg-primary/5' : 'border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${data.service === item ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 gap-3"
                                >
                                    {[
                                        "Pessoa Física (assalariado, autônomo, investidor)",
                                        "Empresa — MEI",
                                        "Empresa — Simples Nacional",
                                        "Empresa — Lucro Presumido / Real"
                                    ].map(item => (
                                        <button
                                            key={item}
                                            onClick={() => { setData({ ...data, profile: item }); handleNext(); }}
                                            className={`w-full text-left p-4 border rounded-xl hover-lift transition-all flex justify-between items-center group ${data.profile === item ? 'border-primary shadow-glow-container bg-primary/5' : 'border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${data.profile === item ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 gap-3"
                                >
                                    {[
                                        "Tenho pendências ou irregularidades fiscais",
                                        "Pagando muito imposto, quero reduzir",
                                        "Estou começando agora (nova empresa/atividade)",
                                        "Estou trocando de contador",
                                        "Nunca declarei / nunca organizei minha contabilidade"
                                    ].map(item => (
                                        <button
                                            key={item}
                                            onClick={() => toggleSituation(item)}
                                            className={`w-full text-left p-4 border rounded-xl hover-lift transition-all flex justify-between items-center group ${data.situations.includes(item) ? 'border-primary shadow-glow-container bg-primary/5' : 'border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                            {data.situations.includes(item) ? <Check size={16} className="text-primary" /> : <div className="w-4 h-4 border border-gray-300 dark:border-gray-600 rounded-sm" />}
                                        </button>
                                    ))}
                                    <button
                                        onClick={handleNext}
                                        disabled={data.situations.length === 0}
                                        className="mt-4 bg-black text-white p-4 font-black uppercase text-xs tracking-widest disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        Continuar ({data.situations.length}/3)
                                    </button>
                                </motion.div>
                            )}

                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 gap-3"
                                >
                                    {[
                                        "Urgente — preciso resolver esta semana",
                                        "Logo — dentro de 15 dias",
                                        "Sem pressa — estou pesquisando opções"
                                    ].map(item => (
                                        <button
                                            key={item}
                                            onClick={() => { setData({ ...data, urgency: item }); handleNext(); }}
                                            className={`w-full text-left p-4 border rounded-xl hover-lift transition-all flex justify-between items-center group ${data.urgency === item ? 'border-primary shadow-glow-container bg-primary/5' : 'border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${data.urgency === item ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                                        </button>
                                    ))}
                                    <div className="mt-2">
                                        <p className="text-[10px] font-black uppercase text-gray-400 mb-2">Ou especifique uma data:</p>
                                        <input
                                            type="text"
                                            placeholder="Ex: Até o final do mês..."
                                            className="w-full p-4 border border-gray-200 focus:border-black outline-none font-bold text-sm tracking-tight uppercase"
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    setData({ ...data, urgency: (e.target as HTMLInputElement).value });
                                                    handleNext();
                                                }
                                            }}
                                            onBlur={(e) => setData({ ...data, urgency: e.target.value })}
                                        />
                                    </div>
                                </motion.div>
                            )}

                            {step === 5 && (
                                <motion.div
                                    key="step5"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="grid grid-cols-1 gap-3"
                                >
                                    {[
                                        "Até R$ 300/mês",
                                        "R$ 300 a R$ 800/mês",
                                        "R$ 800 a R$ 2.000/mês",
                                        "Acima de R$ 2.000/mês",
                                        "Ainda não sei — preciso de uma proposta"
                                    ].map(item => (
                                        <button
                                            key={item}
                                            onClick={() => { setData({ ...data, investment: item }); handleNext(); }}
                                            className={`w-full text-left p-4 border rounded-xl hover-lift transition-all flex justify-between items-center group ${data.investment === item ? 'border-primary shadow-glow-container bg-primary/5' : 'border-gray-200 dark:border-white/10 hover:border-black dark:hover:border-white'}`}
                                        >
                                            <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                                            <ArrowRight size={16} className={`transition-transform group-hover:translate-x-1 ${data.investment === item ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {step === 6 && (
                                <motion.div
                                    key="step6"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-4"
                                >
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">Nome Completo *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full p-4 border border-gray-200 focus:border-black outline-none font-bold text-sm tracking-tight uppercase"
                                            value={data.name}
                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">WhatsApp *</label>
                                        <input
                                            required
                                            type="tel"
                                            placeholder="(00) 00000-0000"
                                            className="w-full p-4 border border-gray-200 focus:border-black outline-none font-bold text-sm tracking-tight uppercase"
                                            value={data.whatsapp}
                                            onChange={(e) => setData({ ...data, whatsapp: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">E-mail</label>
                                        <input
                                            type="email"
                                            className="w-full p-4 border border-gray-200 focus:border-black outline-none font-bold text-sm tracking-tight uppercase"
                                            value={data.email}
                                            onChange={(e) => setData({ ...data, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="text-[10px] font-black uppercase text-gray-400 block mb-1">Como me encontrou?</label>
                                        <select
                                            className="w-full p-4 border border-gray-200 focus:border-black outline-none font-bold text-xs tracking-widest uppercase bg-white"
                                            value={data.source}
                                            onChange={(e) => setData({ ...data, source: e.target.value })}
                                        >
                                            <option value="">Selecione...</option>
                                            <option value="Google">Google</option>
                                            <option value="Instagram">Instagram</option>
                                            <option value="Indicação">Indicação</option>
                                            <option value="LinkedIn">LinkedIn</option>
                                            <option value="Outro">Outro</option>
                                        </select>
                                    </div>

                                    <button
                                        onClick={handleFinish}
                                        disabled={!data.name || !data.whatsapp}
                                        className="w-full mt-4 bg-black text-white p-5 font-black uppercase text-xs tracking-widest disabled:opacity-30 flex items-center justify-center gap-3 active:scale-95 transition-transform"
                                    >
                                        Enviar para WhatsApp
                                        <ArrowRight size={16} />
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Footer Nav */}
                    <div className="mt-12 flex justify-between items-center border-t border-gray-100 pt-6">
                        {step > 1 ? (
                            <button
                                onClick={handlePrev}
                                className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
                            >
                                <ArrowLeft size={14} /> Anterior
                            </button>
                        ) : <div />}

                        <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
                            Privacidade garantida
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
