import React from 'react';
import type { LogoProps } from '~/interface/LogoProps';

export const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
    const textColor = variant === 'light' ? 'text-white' : 'text-gray-900';
    const fillColor = variant === 'light' ? 'fill-white' : 'fill-gray-900';

    return (
        <div className="flex items-center gap-2">
            <div className="w-8 h-8">
                <svg viewBox="0 0 24 24" className={`w-full h-full ${fillColor}`}>
                    <path d="M12 2L2 20h20L12 2z" />
                </svg>
            </div>
            <span className={`text-2xl font-semibold ${textColor}`}>Adakrei</span>
        </div>
    );
};

export default Logo;
