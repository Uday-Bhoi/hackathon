'use client';

import React, { useState, useCallback } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Countdown from '@/components/Countdown';
import Tracks from '@/components/Tracks';
import Prizes from '@/components/Prizes';
import Evaluation from '@/components/Evaluation';
import Timeline from '@/components/Timeline';
import FunActivities from '@/components/FunActivities';
import Rules from '@/components/Rules';
import Chatbot from '@/components/Chatbot';
import Location from '@/components/Location';
import Footer from '@/components/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaderComplete = useCallback(() => {
    setLoaded(true);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader-wrapper"
            exit={{ opacity: 0, scale: 1.03 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
          >
            <Loader onComplete={handleLoaderComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page — shown after load */}
      <AnimatePresence>
        {loaded && (
          <motion.main
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: '100vh', position: 'relative' }}
          >
            {/* Scroll Progress Bar */}
            <motion.div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
                transformOrigin: '0%',
                scaleX,
                zIndex: 1001,
              }}
            />

            <Navbar />

            <Hero />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <About />
              <Countdown />
              <Tracks />
              <Prizes />
              <Evaluation />
              <Timeline />
              <FunActivities />
              <Rules />
              <Chatbot />

              {/* ===== REGISTER CTA ===== */}
              <section
                id="register"
                style={{
                  position: 'relative',
                  padding: 'clamp(5rem, 10vw, 10rem) clamp(2rem, 8vw, 8rem)',
                  overflow: 'hidden',
                }}
              >
                {/* Subtle radial glow behind */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%,-50%)',
                  width: '70vw',
                  height: '70vw',
                  maxWidth: '700px',
                  maxHeight: '700px',
                  background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
                  pointerEvents: 'none',
                  zIndex: 0,
                }} />

                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                  gap: 'clamp(3rem, 6vw, 6rem)',
                  alignItems: 'center',
                }}>
                  {/* Left — Headline + CTAs */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                  >
                    <p style={{
                      letterSpacing: '4px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--accent-primary)',
                      textTransform: 'uppercase',
                      marginBottom: '1.2rem',
                      fontFamily: 'var(--font-secondary)',
                    }}>
                      Aug 21–22, 2026 · Navi Mumbai
                    </p>
                    <h2 style={{
                      fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
                      fontFamily: 'var(--font-primary)',
                      fontWeight: 900,
                      lineHeight: 1.05,
                      marginBottom: '1.5rem',
                      letterSpacing: '-1px',
                    }}>
                      Ready to build{' '}
                      <span style={{
                        background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>
                        something real?
                      </span>
                    </h2>
                    <p style={{
                      fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.75,
                      maxWidth: '460px',
                      fontFamily: 'var(--font-secondary)',
                      marginBottom: '2.5rem',
                    }}>
                      ANTIGRAVITY is your chance to go from idea to working prototype in 24 hours — in front of industry experts, with real prizes on the line. No experience filter. Just build.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.04, boxShadow: '0 20px 45px -8px rgba(139,92,246,0.55)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          display: 'inline-block',
                          padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(2rem, 4vw, 3rem)',
                          background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
                          borderRadius: '10px',
                          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                          fontWeight: 800,
                          color: 'white',
                          fontFamily: 'var(--font-primary)',
                          boxShadow: '0 12px 30px -6px rgba(139,92,246,0.4)',
                          letterSpacing: '0.3px',
                        }}
                      >
                        Register on Devfolio →
                      </motion.a>
                      <motion.a
                        href="#tracks"
                        onClick={(e) => { e.preventDefault(); document.getElementById('tracks')?.scrollIntoView({ behavior: 'smooth' }); }}
                        whileHover={{ scale: 1.04, background: 'rgba(255,255,255,0.07)' }}
                        whileTap={{ scale: 0.97 }}
                        style={{
                          display: 'inline-block',
                          padding: 'clamp(0.85rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2.2rem)',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.12)',
                          borderRadius: '10px',
                          fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                          fontWeight: 600,
                          color: 'rgba(255,255,255,0.75)',
                          fontFamily: 'var(--font-primary)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        View Tracks
                      </motion.a>
                    </div>
                  </motion.div>

                  {/* Right — Quick Info Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    style={{
                      padding: 'clamp(2rem, 4vw, 3rem)',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '20px',
                      backdropFilter: 'blur(16px)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.8rem',
                    }}
                  >
                    {[
                      { label: 'Registration Deadline', value: 'August 18, 2026', note: "Don't miss the cutoff" },
                      { label: 'Registration Fee', value: '₹1,500', note: 'Per team of 4–5 members' },
                      { label: 'Total Prize Pool', value: '₹1,00,000+', note: 'Across all categories' },
                    ].map((item, i) => (
                      <div key={i} style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', paddingBottom: i < 2 ? '1.8rem' : 0 }}>
                        <p style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: 'rgba(255,255,255,0.35)',
                          letterSpacing: '2px',
                          textTransform: 'uppercase',
                          fontFamily: 'var(--font-secondary)',
                          marginBottom: '0.4rem',
                        }}>
                          {item.label}
                        </p>
                        <p style={{
                          fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
                          fontWeight: 900,
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-primary)',
                          marginBottom: '0.25rem',
                        }}>
                          {item.value}
                        </p>
                        <p style={{
                          fontSize: '0.82rem',
                          color: 'rgba(255,255,255,0.3)',
                          fontFamily: 'var(--font-secondary)',
                        }}>
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </section>

              <Location />
              <Footer />
            </div>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
