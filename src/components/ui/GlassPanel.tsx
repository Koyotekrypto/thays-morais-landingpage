import React from 'react';

interface GlassPanelProps {
    readonly children: React.ReactNode;
    readonly className?: string;
    readonly showCorners?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
    children,
    className = '',
    showCorners = false,
}) => {
    return (
        <div className={`glass-panel relative overflow-hidden ${className}`}>
            {showCorners && (
                <>
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/50"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary/50"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary/50"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/50"></div>
                </>
            )}
            {children}
        </div>
    );
};

export default GlassPanel;
