'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(3rem, 6vw, 4rem)',
      zIndex: 1,
      background: 'transparent',
    }}>
      <motion.div
        style={{ y: yParallax, opacity: opacityFade, zIndex: 1, width: '100%', maxWidth: '1400px', padding: '0 clamp(1.5rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        {/* Event Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '0.4rem 1rem',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '50px',
            fontSize: 'clamp(0.7rem, 2vw, 0.82rem)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ background: '#FFC107', color: '#000', padding: '1px 8px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 800 }}>LIVE</span>
          <span style={{ color: 'rgba(255,255,255,0.7)' }}>21–22 August 2026 · Navi Mumbai</span>
        </motion.div>

        {/* Main Heading */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            style={{
              letterSpacing: '5px',
              fontWeight: 600,
              fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
              color: 'rgba(255,255,255,0.45)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem'
            }}
          >
            BVIMIT Presents
          </motion.p>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 12vw, 8rem)',
            lineHeight: 0.95,
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            color: 'var(--text-primary)',
            letterSpacing: '-3px',
            background: 'linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Hackathon
          </h1>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.55)',
          maxWidth: '520px',
          lineHeight: 1.6,
          fontFamily: 'var(--font-secondary)',
          fontWeight: 400,
        }}>
          25 Years of Excellence · A 24-hour national hackathon challenging students to code, create, and collaborate.
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '0.5rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 12px 30px -5px rgba(139, 92, 246, 0.5)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--font-primary)',
              boxShadow: '0 8px 20px -5px rgba(139, 92, 246, 0.4)',
              letterSpacing: '0.3px'
            }}
          >
            Register Your Team →
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)',
              background: 'rgba(255,255,255,0.04)',
              color: 'rgba(255,255,255,0.85)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '10px',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-primary)',
              backdropFilter: 'blur(8px)',
            }}
            onClick={() => document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Problem Statements
          </motion.button>
        </motion.div>

        {/* Stats Rail */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{
            display: 'flex',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            width: '100%',
          }}
        >
          {[
            { value: '24hrs', label: 'Grand Finale' },
            { value: '150+', label: 'Teams' },
            { value: '₹1L+', label: 'Prize Pool' },
            { value: 'Aug 2026', label: 'Navi Mumbai' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
              style={{ textAlign: 'center' }}
            >
              <div style={{ fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-primary)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: 'clamp(0.7rem, 2vw, 0.82rem)', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginTop: '4px' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
