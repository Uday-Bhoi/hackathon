'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import PixelSnow from './PixelSnow';
import Particles from './Particles';

type Theme = 'pixel' | 'particles';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({ theme: 'pixel', setTheme: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('pixel');

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  // Handle SSR hydration mismatch by only rendering the background after mount
  const [mounted, setMounted] = useState(false);
  // eslint-disable-next-line
  useEffect(() => setMounted(true), []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {mounted && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
          {theme === 'pixel' ? (
            <PixelSnow 
              color="#ffffff"
              flakeSize={0.01}
              minFlakeSize={1.25}
              pixelResolution={200}
              speed={1.25}
              density={0.3}
              direction={125}
              brightness={1}
              depthFade={8}
              farPlane={20}
              gamma={0.4545}
              variant="square"
            />
          ) : (
            <Particles
              particleColors={["#ffffff"]}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
              pixelRatio={1}
            />
          )}
        </div>
      )}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
