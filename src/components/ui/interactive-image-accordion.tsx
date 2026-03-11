import React, { useState } from 'react';

interface AccordionItemData {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

const accordionItems: AccordionItemData[] = [
  {
    id: 0,
    title: 'IRPF 2026',
    subtitle: 'Declaração de IR para Pessoa Física e Empresas — prazo até 29/05/2026.',
    imageUrl: 'https://images.unsplash.com/photo-1733897898092-de56f2aad91f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 1,
    title: 'Abertura de Empresa',
    subtitle: 'Constituição estruturada no regime tributário correto desde o início.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Baixa Empresarial',
    subtitle: 'Extinção total com conformidade fiscal e sem passivos ocultos.',
    imageUrl: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1952&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Alteração Contratual',
    subtitle: 'Reestruturação societária, mudança de sócios e objeto social.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Transação Tributária',
    subtitle: 'Negocie débitos com a Receita com descontos e condições especiais.',
    imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1972&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Dívida Ativa',
    subtitle: 'Parcelamento e regularização perante a Fazenda Nacional e Estadual.',
    imageUrl: 'https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?q=80&w=1974&auto=format&fit=crop',
  },
];

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <div
      className={[
        'relative h-[450px] rounded-2xl overflow-hidden cursor-pointer',
        'transition-all duration-700 ease-in-out flex-shrink-0',
        isActive ? 'flex-[3]' : 'flex-[0.4]',
      ].join(' ')}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={`${item.title} - ${item.subtitle}`}
        title={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: isActive ? 'scale(1.04)' : 'scale(1)' }}
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.onerror = null;
          t.src = 'https://placehold.co/400x450/111827/ffffff?text=';
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Caption */}
      <div
        className="absolute text-white whitespace-nowrap transition-all duration-500"
        style={
          isActive
            ? { bottom: '24px', left: '20px', right: '20px', transform: 'none' }
            : {
                bottom: '50%',
                left: '50%',
                transform: 'translateX(-50%) translateY(50%) rotate(90deg)',
                transformOrigin: 'center center',
              }
        }
      >
        <p className={`font-black uppercase tracking-widest ${isActive ? 'text-sm mb-1' : 'text-[11px]'}`}>
          {item.title}
        </p>
        {isActive && (
          <p className="text-zinc-300 text-xs font-light leading-snug max-w-[200px]">
            {item.subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export const HeroImageAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-row items-stretch gap-3 w-full h-[450px]">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};
