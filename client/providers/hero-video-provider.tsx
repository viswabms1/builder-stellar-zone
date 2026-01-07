import { createContext, useContext, useState, ReactNode } from 'react';

interface HeroVideoContextType {
    isHeroVideoInView: boolean;
    setIsHeroVideoInView: (value: boolean) => void;
}

const HeroVideoContext = createContext<HeroVideoContextType | undefined>(undefined);

export function HeroVideoProvider({ children }: { children: ReactNode }) {
    const [isHeroVideoInView, setIsHeroVideoInView] = useState(false);

    return (
        <HeroVideoContext.Provider value={{ isHeroVideoInView, setIsHeroVideoInView }}>
            {children}
        </HeroVideoContext.Provider>
    );
}

export function useHeroVideo() {
    const context = useContext(HeroVideoContext);
    if (context === undefined) {
        throw new Error('useHeroVideo must be used within a HeroVideoProvider');
    }
    return context;
}
