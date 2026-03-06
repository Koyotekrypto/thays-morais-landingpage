import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { initialProfiles, funnelPathsMap, commonFinalSteps, FunnelStepDefinition } from '../../constants/funnelPaths';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';

type FunnelData = {
    profile: string; // id
    profileLabel: string;
    step2_answer: string; // label
    step3_answer: string; // label
    timeline: string;
    budget: string;
    name: string;
    email: string;
    whatsapp: string;
    contextUrl: string; // replacing context with optional URL/LinkedIn
};

const initialData: FunnelData = {
    profile: '',
    profileLabel: '',
    step2_answer: '',
    step3_answer: '',
    timeline: '',
    budget: '',
    name: '',
    email: '',
    whatsapp: '',
    contextUrl: ''
};

const formatWhatsApp = (value: string) => {
    const rawValue = value.replace(/\D/g, '');
    let formattedValue = '';

    if (rawValue.length > 0) {
        formattedValue = `(${rawValue.substring(0, 2)}`;
    }
    if (rawValue.length > 2) {
        formattedValue += `) ${rawValue.substring(2, 7)}`;
    }
    if (rawValue.length > 7) {
        formattedValue += `-${rawValue.substring(7, 11)}`;
    }
    return formattedValue;
};

const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const LeadFunnel: React.FC = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FunnelData>(initialData);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const WHATSAPP_NUMBER = "5585981096763";

    const updateData = (field: keyof FunnelData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => {
        if (step < 6) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);

        const message = `Olá ConectaDev! 👋 Sou *${formData.name}* e vim pela consultoria do site.

📋 *Segmento:* ${formData.profileLabel}
🎯 *Maior Desafio:* ${formData.step2_answer}
🏢 *Tamanho/Maturidade:* ${formData.step3_answer}
⏱️ *Urgência:* ${formData.timeline}
💰 *Investimento Previsto:* ${formData.budget}
📧 *E-mail:* ${formData.email}
📱 *WhatsApp:* ${formData.whatsapp}
🔗 *URL/LinkedIn:* ${formData.contextUrl || 'Não informado'}

Aguardo o contato para a nossa sessão estratégica!`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        // Inicia o "UX Teatral"
        setStep(7);

        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
            setStep(8); // Success Step final
        }, 3500);
    };

    const LoadingStage = () => {
        const [stage, setStage] = useState(0);
        const stages = [
            "Autenticando requisição segura...",
            "Mapeando ecossistema tecnológico...",
            "Analisando métricas de maturidade...",
            "Gerando blueprint arquitetural...",
            "Sincronizando com central estratégica..."
        ];

        React.useEffect(() => {
            const interval = setInterval(() => {
                setStage(s => (s + 1) % stages.length);
            }, 700);
            return () => clearInterval(interval);
        }, []);

        return (
            <div className="flex flex-col items-center justify-center space-y-8 py-12">
                <div className="relative w-24 h-24">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-primary/20 border-t-primary rounded-full shadow-[0_0_20px_rgba(0,180,216,0.2)]"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 border-4 border-cyan-500/10 border-b-cyan-500 rounded-full shadow-[0_0_15px_rgba(0,180,216,0.1)]"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-primary animate-pulse">analytics</span>
                    </div>
                </div>

                <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-white font-display uppercase tracking-widest">Processando Inteligência</h3>
                    <div className="h-6 flex items-center justify-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.p
                                key={stage}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-primary text-[11px] font-bold uppercase tracking-[0.2em]"
                            >
                                {stages[stage]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3.5, ease: "easeInOut" }}
                        className="h-full bg-gradient-to-r from-primary to-cyan-400"
                    />
                </div>
            </div>
        );
    };

    const renderStepIndicator = () => (
        <div className="flex items-center justify-between mb-8 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-800/50 rounded-full z-0"></div>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((Math.min(step, 6) - 1) / 5) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full z-0 shadow-neon-glow"
            ></motion.div>

            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                    key={i}
                    className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all duration-300 ${step === i
                        ? 'bg-primary text-white shadow-neon-glow scale-110'
                        : step > i
                            ? 'bg-primary text-white'
                            : 'bg-gray-900 border border-gray-700 text-gray-500'
                        }`}
                >
                    {step > i ? <span className="material-symbols-outlined text-sm">check</span> : i}
                </div>
            ))}
        </div>
    );

    const SelectionCard = ({
        icon,
        label,
        isSelected,
        onClick,
        index
    }: {
        icon: string;
        label: string;
        isSelected: boolean;
        onClick: () => void;
        index: number;
    }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            onClick={onClick}
            className={`relative cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 px-4 py-6 flex flex-col items-center justify-center gap-3 text-center h-[140px] group ${isSelected
                ? 'bg-gradient-to-br from-primary/20 to-cyan-500/5 border-primary shadow-neon-cyan -translate-y-1 ring-1 ring-primary/30'
                : 'bg-card/40 backdrop-blur-md border-gray-800 hover:bg-gray-800/50 hover:border-primary/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,180,216,0.1)]'
                }`}
        >
            <div className={`p-4 rounded-full transition-all duration-500 ${isSelected ? 'bg-primary/20 text-primary scale-110 drop-shadow-neon-cyan' : 'bg-gray-800/50 text-gray-400 group-hover:text-primary group-hover:bg-primary/10'}`}>
                {icon.length <= 2 ? (
                    <span className="text-4xl filter drop-shadow-md">{icon}</span>
                ) : (
                    <span className="material-symbols-outlined text-4xl">{icon}</span>
                )}
            </div>

            <span className={`text-sm md:text-base font-medium leading-tight z-10 px-1 ${isSelected ? 'text-white drop-shadow-md font-bold' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {label}
            </span>

            {isSelected && (
                <div className="absolute top-3 right-3 text-primary animate-pulse">
                    <span className="material-symbols-outlined text-base drop-shadow-neon-cyan">check_circle</span>
                </div>
            )}
        </motion.div>
    );

    const stepVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, x: -50, transition: { duration: 0.3, ease: "easeIn" } }
    };

    const renderDynamicStep = (
        stepNumber: number,
        title: string,
        subtitle: string,
        options: any[],
        currentValue: string,
        fieldKey: keyof FunnelData
    ) => (
        <motion.div
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex-1 flex flex-col"
        >
            <h3 className="text-2xl font-bold text-white mb-2 font-display uppercase tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-sm mb-6">{subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-8 flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '60vh' }}>
                {options.map((opt, idx) => (
                    <SelectionCard
                        key={opt.id}
                        index={idx}
                        icon={opt.icon}
                        label={opt.label}
                        isSelected={currentValue === opt.label}
                        onClick={() => {
                            updateData(fieldKey, opt.label);
                        }}
                    />
                ))}
            </div>

            <div className="flex justify-between mt-auto pt-6 border-t border-gray-800/50 relative z-20">
                {stepNumber > 1 && (
                    <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-800/50 rounded-full h-12 px-6">
                        <span className="material-symbols-outlined text-sm mr-2">arrow_back</span> Voltar
                    </Button>
                )}
                <Button
                    variant="neon"
                    onClick={nextStep}
                    disabled={!currentValue}
                    className={`px-8 h-12 rounded-full shadow-neon-glow font-bold tracking-widest uppercase text-xs ${stepNumber === 1 ? 'ml-auto' : ''}`}
                >
                    Próximo <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                </Button>
            </div>
        </motion.div>
    );

    const profileId = formData.profile || 'outro';
    const dynamicSteps: FunnelStepDefinition[] = funnelPathsMap[profileId] || funnelPathsMap['outro'];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-primary/10 shadow-glow-container relative overflow-hidden my-24"
        >
            {/* Glossy top overlay */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/10 blur-[80px] rounded-full pointer-events-none"></div>

            {step <= 6 && renderStepIndicator()}

            <div className="relative z-10 min-h-[400px] flex flex-col">
                <AnimatePresence mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex-1 flex flex-col"
                        >
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-display uppercase tracking-tight">Identificação de Cenário</h3>
                            <p className="text-muted-foreground text-sm md:text-base mb-6">Inicie o diagnóstico selecionando o ecossistema que mais se aproxima da sua realidade hoje.</p>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 flex-1 overflow-y-auto pr-2 custom-scrollbar" style={{ maxHeight: '60vh' }}>
                                {initialProfiles.map((opt, idx) => (
                                    <SelectionCard
                                        key={opt.id}
                                        index={idx}
                                        icon={opt.icon}
                                        label={opt.label}
                                        isSelected={formData.profile === opt.id}
                                        onClick={() => {
                                            setFormData(prev => ({
                                                ...prev,
                                                profile: opt.id,
                                                profileLabel: opt.label,
                                                step2_answer: '',
                                                step3_answer: ''
                                            }));
                                        }}
                                    />
                                ))}
                            </div>

                            <div className="flex justify-end mt-auto pt-6 border-t border-gray-800/50">
                                <Button variant="neon" onClick={nextStep} disabled={!formData.profile} className="px-8 h-12 rounded-full shadow-neon-glow font-bold tracking-widest uppercase text-xs">
                                    Próximo <span className="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                                </Button>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && dynamicSteps[0] && (
                        <React.Fragment key="step2">
                            {renderDynamicStep(2, dynamicSteps[0].title, dynamicSteps[0].subtitle, dynamicSteps[0].options, formData.step2_answer, 'step2_answer')}
                        </React.Fragment>
                    )}

                    {step === 3 && dynamicSteps[1] && (
                        <React.Fragment key="step3">
                            {renderDynamicStep(3, dynamicSteps[1].title, dynamicSteps[1].subtitle, dynamicSteps[1].options, formData.step3_answer, 'step3_answer')}
                        </React.Fragment>
                    )}

                    {step === 4 && (
                        <React.Fragment key="step4">
                            {renderDynamicStep(4, commonFinalSteps[0].title, commonFinalSteps[0].subtitle, commonFinalSteps[0].options, formData.timeline, 'timeline')}
                        </React.Fragment>
                    )}

                    {step === 5 && (
                        <React.Fragment key="step5">
                            {renderDynamicStep(5, commonFinalSteps[1].title, commonFinalSteps[1].subtitle, commonFinalSteps[1].options, formData.budget, 'budget')}
                        </React.Fragment>
                    )}

                    {step === 6 && (
                        <motion.div
                            key="step6"
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex-1 flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-primary/10 text-primary p-4 rounded-2xl border border-primary/20 shadow-inner-glow">
                                    <span className="material-symbols-outlined text-3xl">bolt</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white font-display tracking-tight uppercase">Protocolo de Iniciação</h3>
                                    <p className="text-muted-foreground text-sm mt-1">Forneça as coordenadas finais para gerarmos seu blueprint arquitetural.</p>
                                </div>
                            </div>

                            <div className="space-y-6 mb-8 flex-1 bg-slate-900/40 p-8 rounded-[1.5rem] border border-gray-800/60 shadow-inner">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Identificação / Entidade</label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => updateData('name', e.target.value)}
                                            className="bg-slate-950/50 border border-gray-800 p-4 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl placeholder:text-gray-600 shadow-sm"
                                            placeholder="Ex: Carlos (Empresa X)"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Canal Direto (WhatsApp)</label>
                                        <input
                                            type="tel"
                                            value={formData.whatsapp}
                                            onChange={(e) => updateData('whatsapp', formatWhatsApp(e.target.value))}
                                            maxLength={15}
                                            className={`bg-slate-950/50 border ${formData.whatsapp.length > 0 && formData.whatsapp.length < 14 ? 'border-destructive/50 focus:border-destructive' : 'border-gray-800 focus:border-primary/50'} p-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all rounded-xl placeholder:text-gray-600 shadow-sm`}
                                            placeholder="(00) 00000-0000"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] pl-1">Comunicação Assíncrona</label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => updateData('email', e.target.value)}
                                            className={`bg-slate-950/50 border ${formData.email.length > 0 && !isValidEmail(formData.email) ? 'border-destructive/50 focus:border-destructive' : 'border-gray-800 focus:border-primary/50'} p-4 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all rounded-xl placeholder:text-gray-600 shadow-sm`}
                                            placeholder="root@empresa.com.br"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="flex items-center justify-between pl-1">
                                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Contexto Adicional</span>
                                            <span className="text-muted-foreground font-normal normal-case text-[10px] bg-slate-800/50 px-2 py-0.5 rounded-md border border-gray-700/50">Opcional</span>
                                        </label>
                                        <input
                                            type="url"
                                            value={formData.contextUrl}
                                            onChange={(e) => updateData('contextUrl', e.target.value)}
                                            className="bg-slate-950/50 border border-gray-800 p-4 text-white text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl placeholder:text-gray-600 shadow-sm"
                                            placeholder="https://linkedin.com/in/... ou Site"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mt-auto pt-6 border-t border-gray-800/50">
                                <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white border border-gray-800 hover:bg-gray-800/50 rounded-full h-12 px-6">
                                    <span className="material-symbols-outlined text-sm mr-2">arrow_back</span> Voltar
                                </Button>
                                <MagneticButton>
                                    <Button
                                        variant="neon"
                                        onClick={handleSubmit}
                                        disabled={!formData.name || formData.whatsapp.length < 14 || !isValidEmail(formData.email) || isSubmitting}
                                        className="px-8 h-12 rounded-full shadow-neon-glow font-bold tracking-widest uppercase text-xs disabled:opacity-50 disabled:shadow-none"
                                    >
                                        {isSubmitting ? (
                                            <span className="material-symbols-outlined text-xl animate-spin">refresh</span>
                                        ) : (
                                            <>INICIAR TRANSMISSÃO <span className="material-symbols-outlined text-sm ml-2">send</span></>
                                        )}
                                    </Button>
                                </MagneticButton>
                            </div>
                        </motion.div>
                    )}

                    {step === 7 && (
                        <motion.div
                            key="step7"
                            variants={stepVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex-1 flex flex-col items-center justify-center"
                        >
                            <LoadingStage />
                        </motion.div>
                    )}

                    {step === 8 && (
                        <motion.div
                            key="step8"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.5 }}
                            className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
                        >
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center relative border border-primary/20 shadow-neon-glow">
                                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                                <span className="material-symbols-outlined text-5xl text-primary drop-shadow-neon-cyan">check_circle</span>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white mb-3 font-display uppercase tracking-tight">Handshake Completo</h3>
                                <p className="text-muted-foreground text-sm max-w-sm mx-auto leading-relaxed">
                                    Os dados foram empacotados e estão sendo redirecionados para a central segura no WhatsApp. <br /><br />
                                    <span className="opacity-70 text-xs">Se o roteamento falhar, </span>
                                    <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Tenho interesse na ConectaDev!')}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-bold text-xs">force a conexão manual aqui</a>.
                                </p>
                            </div>
                            <Button variant="outline" onClick={() => { setStep(1); setFormData(initialData); }} className="mt-8 border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-full text-xs font-bold uppercase tracking-widest px-8">
                                Resetar Formulário
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

