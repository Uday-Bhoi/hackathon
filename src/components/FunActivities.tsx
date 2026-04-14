'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Gamepad2, Mic2, Users2, BrainCircuit, Music } from 'lucide-react';

const activities = [
  { title: 'Rapid Fire Quiz', icon: <BrainCircuit />, desc: 'Quick-fire tech questions with immediate prizes for the fastest and sharpest minds.' },
  { title: 'Logo Guess', icon: <Gamepad2 />, desc: 'Identify famous tech brands from pixelated or scrambled versions — test your visual memory.' },
  { title: 'Memory Match', icon: <Music />, desc: 'Study an image for 30 seconds and recall as many items as possible under pressure.' },
  { title: 'Open Mic', icon: <Mic2 />, desc: 'Step up to the microphone and showcase your non-coding talents — singing, spoken word, or comedy.' },
  { title: 'Flash Mob', icon: <Users2 />, desc: 'Spontaneous group energy, dance, and celebration to fuel the hackathon spirit through the night.' },
];

const FunActivities = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="fun" ref={ref} style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)', position: 'relative' }}>
      <motion.div style={{ y: yParallax }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          <p style={{ letterSpacing: '4px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Side Events
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'var(--font-primary)', fontWeight: 900 }}>
            Beyond <span className="accent-gradient">Coding</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '0.8rem', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontFamily: 'var(--font-secondary)', maxWidth: '500px' }}>
            Take a break from the keyboard and recharge with our curated side events.
          </p>
        </motion.div>

        {/* Horizontal list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
          {activities.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ x: 6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(1rem, 3vw, 2rem)',
                padding: 'clamp(1.2rem, 2.5vw, 1.8rem) clamp(1.2rem, 3vw, 2rem)',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '14px',
                backdropFilter: 'blur(8px)',
                transition: 'border-color 0.3s, background 0.3s',
                cursor: 'default',
              }}
              onMouseOver={e => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.3)';
                e.currentTarget.style.background = 'rgba(139,92,246,0.05)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.025)';
              }}
            >
              {/* Number + Icon */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.2)',
                  fontFamily: 'var(--font-primary)',
                  minWidth: '28px',
                  letterSpacing: '1px',
                }}>
                  0{idx + 1}
                </span>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(139,92,246,0.1)',
                  border: '1px solid rgba(139,92,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-primary)',
                  flexShrink: 0,
                }}>
                  {React.cloneElement(act.icon as React.ReactElement<{ size?: number }>, { size: 22 })}
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 700, fontFamily: 'var(--font-primary)', marginBottom: '0.35rem' }}>
                  {act.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', lineHeight: 1.55, fontFamily: 'var(--font-secondary)' }}>
                  {act.desc}
                </p>
              </div>

              {/* Subtle arrow */}
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '1.2rem', flexShrink: 0 }}>→</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FunActivities;
