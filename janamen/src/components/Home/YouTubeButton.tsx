// components/YouTubeButton.tsx
import Link from 'next/link';
import React from 'react';

interface YouTubeButtonProps {
    href: string;
}

const YouTubeButton: React.FC<YouTubeButtonProps> = ({ href }) => {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center px-6 py-3 bg-white text-black font-bold shadow-lg transition-transform transform hover:scale-105"
        >
            <div className="absolute inset-0 w-full h-full bg-white clip-path-button"></div>
            <div className="relative flex items-center space-x-2 z-10">
                <img src="/youtube-icon.svg" alt="YouTube" width={24} height={24} />
                <span>YouTube</span>
            </div>
        </Link>
    );
};

export default YouTubeButton;
