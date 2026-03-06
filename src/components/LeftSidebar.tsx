import React from 'react';

export const LeftSidebar: React.FC = () => {
    return (
        <aside className="fixed top-0 left-0 h-screen w-20 flex flex-col items-center py-8 z-50 border-r border-white/5 bg-background overflow-hidden isolate">
            {/* Glossy gradient effect behind the sidebar */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none -z-10" />

            {/* Logo Mark */}
            <div className="w-10 h-10 flex items-center justify-center font-display font-black text-xl bg-primary text-black rounded-lg mb-12 shadow-[0_0_20px_rgba(0,180,216,0.3)]">
                C
            </div>

            {/* Navigation Icons */}
            <nav className="flex-1 flex flex-col gap-8 w-full items-center">
                {[
                    { icon: 'home', active: true },
                    { icon: 'view_quilt', active: false },
                    { icon: 'data_object', active: false },
                    { icon: 'architecture', active: false }
                ].map((item, idx) => (
                    <button
                        key={idx}
                        className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${item.active
                            ? 'bg-primary/20 text-primary border border-primary/30 shadow-neon-glow'
                            : 'text-muted-foreground hover:bg-white/5 hover:text-white'
                            }`}
                    >
                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                    </button>
                ))}
            </nav>

            {/* Settings / Footer Icon */}
            <button className="w-12 h-12 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-white/5 hover:text-white mt-auto">
                <span className="material-symbols-outlined text-xl">settings</span>
            </button>
        </aside>
    );
};

export default LeftSidebar;
