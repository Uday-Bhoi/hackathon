'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Cpu, Zap, Activity, Leaf, Wifi } from 'lucide-react';
import ElectricBorder from '@/components/ElectricBorder';

const tracks = [
  { title: 'Cloud Solutions & Architecture', icon: <Cpu />, desc: 'Design scalable, resilient systems and robust distributed cloud architectures for modern problems.' },
  { title: 'Cyber Security', icon: <Shield />, desc: 'Defend digital assets, ensure data privacy, and build tools to detect and neutralize threats.' },
  { title: 'Smart Cities & IoT', icon: <Wifi />, desc: 'Connect the world through smart devices, sensors, and automation for urban environments.' },
  { title: 'Healthcare Tech', icon: <Activity />, desc: 'Innovate life-changing solutions for patient wellness, diagnostics, and medical logistics.' },
  { title: 'FinTech / Payments', icon: <Zap />, desc: 'Reimagine digital payments, financial inclusion, and next-gen banking technology solutions.' },
  { title: 'Sustainable Development', icon: <Leaf />, desc: 'Engineer solutions for a greener, more equitable, and ethically responsible future.' },
];

const Tracks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scaleEffect = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);

  return (
    <section id="tracks" ref={ref} style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)', position: 'relative', overflow: 'hidden' }}>
      <motion.div style={{ scale: scaleEffect, opacity: opacityFade }}>
        {/* Header */}
        <div style={{ textAlign: 'right', marginBottom: 'clamp(2.5rem, 6vw, 5rem)' }}>
          <p style={{ letterSpacing: '4px', fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            Problem Domains
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-primary)', fontWeight: 900 }}>
            Exhilarating <span className="accent-gradient">Tracks</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: '1rem', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', fontFamily: 'var(--font-secondary)' }}>
            Choose a domain and build groundbreaking solutions.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {tracks.map((track, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{ cursor: 'pointer', position: 'relative', display: 'flex', height: '100%' }}
            >
              {/* Use explicit hex blue so ElectricBorder can parse it */}
              <ElectricBorder color="#3b82f6" speed={0.8} chaos={0.1} style={{ borderRadius: 16, width: '100%', display: 'flex' }}>
                <div
                  style={{
                    padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.background = 'rgba(59, 130, 246, 0.06)';
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  }}
                >
                  <div style={{ color: '#3b82f6', marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)' }}>
                    {React.cloneElement(track.icon as React.ReactElement<{ size?: number }>, { size: 26 })}
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', marginBottom: '0.9rem', fontFamily: 'var(--font-primary)', fontWeight: 800, color: 'var(--text-primary)' }}>{track.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, fontFamily: 'var(--font-secondary)', fontSize: 'clamp(0.85rem, 1.8vw, 0.97rem)' }}>{track.desc}</p>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tracks;
