'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'counting' | 'reveal'>('counting');
  const text = 'BV-THON';

  useEffect(() => {
    // Animate progress from 0 → 100
    const duration = 1800;
    const interval = 18;
    let current = 0;
    const step = 100 / (duration / interval);

    const timer = setInterval(() => {
      current += step;
      if (current >= 100) {
        current = 100;
        clearInterval(timer);
        setProgress(100);
        setTimeout(() => setPhase('reveal'), 200);
        setTimeout(onComplete, 900);
      } else {
        setProgress(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'reveal' || true ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            background: '#030303',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
        >
          {/* Logo text with staggered letter reveal */}
          <div style={{ display: 'flex', gap: '0.1em', overflow: 'hidden' }}>
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                  fontWeight: 900,
                  fontFamily: 'var(--font-primary)',
                  background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.5) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px',
                  display: 'inline-block',
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Sub label */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            style={{
              fontSize: '0.8rem',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              fontFamily: 'var(--font-secondary)',
              fontWeight: 600,
              marginTop: '-1.5rem',
            }}
          >
            BVIMIT · National Hackathon 2026
          </motion.p>

          {/* Progress bar container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{ width: 'min(340px, 80vw)', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
          >
            <div style={{
              height: '2px',
              background: 'rgba(255,255,255,0.08)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                  borderRadius: '2px',
                  width: `${progress}%`,
                  transition: 'width 0.1s linear',
                  boxShadow: '0 0 10px rgba(139,92,246,0.6)',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)', fontFamily: 'var(--font-secondary)', letterSpacing: '1px' }}>
              <span>Loading experience</span>
              <span>{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Loader;
