'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trophy, Award, Medal, Sparkles } from 'lucide-react';
import LightRays from '@/components/LightRays';

const prizeData = [
  {
    position: 'Runner Up',
    prize: '₹25,000',
    subPrize: '+ Special Award ₹10,000',
    icon: <Medal size={36} />,
    color: '#a1a1aa',
    gradient: 'linear-gradient(135deg, #71717a, #a1a1aa)',
    glow: 'rgba(161,161,170,0.3)',
    rank: 2,
  },
  {
    position: 'Winner',
    prize: '₹50,000',
    subPrize: '+ Special Award ₹10,000',
    icon: <Trophy size={52} />,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #d97706, #fbbf24)',
    glow: 'rgba(251,191,36,0.4)',
    featured: true,
    rank: 1,
  },
  {
    position: '2nd Runner Up',
    prize: '₹15,000',
    subPrize: '+ Special Award ₹10,000',
    icon: <Award size={36} />,
    color: '#c2773a',
    gradient: 'linear-gradient(135deg, #92400e, #c2773a)',
    glow: 'rgba(194,119,58,0.3)',
    rank: 3,
  },
];

const Prizes = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section id="prizes" ref={ref} style={{ position: 'relative', padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)', overflow: 'hidden' }}>
      {/* LightRays Background */}
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={0.8}
        lightSpread={0.4}
        rayLength={2.5}
        followMouse={true}
        mouseInfluence={0.08}
        noiseAmount={0}
        distortion={0}
        pulsating={false}
        fadeDistance={1}
        saturation={1}
      />

      <motion.div style={{ y: yParallax, position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '1rem' }}>
            <Sparkles size={16} color="var(--accent-primary)" />
            <p style={{ letterSpacing: '4px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
              Prize Pool
            </p>
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-primary)', fontWeight: 900, marginBottom: '0.8rem' }}>
            Exciting <span className="accent-gradient">Prizes</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', fontFamily: 'var(--font-secondary)' }}>
            Total Prize Pool of <strong style={{ color: 'var(--accent-primary)' }}>₹1,00,000+</strong>
          </p>
        </motion.div>

        {/* Prize Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          alignItems: 'end',
        }}>
          {prizeData.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: p.featured ? -16 : 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7, type: 'spring', stiffness: 60 }}
              whileHover={{
                y: p.featured ? -26 : -10,
                scale: 1.04,
                boxShadow: `0 30px 60px -10px ${p.glow}`,
                transition: { duration: 0.3 }
              }}
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                border: p.featured
                  ? `2px solid ${p.color}55`
                  : '1px solid rgba(255,255,255,0.08)',
                background: p.featured
                  ? 'rgba(255,255,255,0.06)'
                  : 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(12px)',
                boxShadow: p.featured ? `0 20px 50px -10px ${p.glow}` : 'none',
              }}
            >
              {/* Top color accent bar */}
              <div style={{ height: '4px', background: p.gradient }} />

              {p.featured && (
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '-28px',
                  background: p.gradient,
                  color: '#000',
                  padding: '5px 40px',
                  transform: 'rotate(45deg)',
                  fontSize: '0.7rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-primary)',
                  letterSpacing: '1px',
                }}>
                  GOLD
                </div>
              )}

              <div style={{ padding: 'clamp(1.8rem, 4vw, 2.5rem)', textAlign: 'center' }}>
                {/* Icon with glow ring */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: p.featured ? '88px' : '72px',
                  height: p.featured ? '88px' : '72px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${p.color}22 0%, transparent 70%)`,
                  border: `2px solid ${p.color}44`,
                  color: p.color,
                  marginBottom: '1.5rem',
                  filter: `drop-shadow(0 0 12px ${p.glow})`,
                }}>
                  {p.icon}
                </div>

                <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '2px', color: p.color, textTransform: 'uppercase', marginBottom: '0.5rem', fontFamily: 'var(--font-primary)' }}>
                  {p.position}
                </p>

                <h3 style={{
                  fontSize: p.featured ? 'clamp(2.2rem, 5vw, 3rem)' : 'clamp(1.8rem, 4vw, 2.4rem)',
                  fontWeight: 900,
                  color: 'white',
                  fontFamily: 'var(--font-primary)',
                  marginBottom: '0.5rem',
                  textShadow: `0 0 30px ${p.glow}`,
                }}>
                  {p.prize}
                </h3>

                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontFamily: 'var(--font-secondary)' }}>
                  {p.subPrize}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Prizes;
