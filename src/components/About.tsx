'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)',
        position: 'relative',
        background: 'transparent',
      }}
    >
      <motion.div style={{ y: yParallax }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ textAlign: 'left' }}
        >
          {/* Label */}
          <p style={{
            letterSpacing: '4px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}>
            About the Event
          </p>

          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
            marginBottom: '2rem',
            lineHeight: 1.1,
          }}>
            About <span className="accent-gradient">Hackathon</span>
          </h2>

          {/* Divider */}
          <div style={{
            width: '60px',
            height: '3px',
            background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary))',
            borderRadius: '2px',
            marginBottom: '2.5rem',
          }} />

          {/* Prose description */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.4rem',
            color: 'rgba(255,255,255,0.65)',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            lineHeight: 1.85,
            fontFamily: 'var(--font-secondary)',
          }}>
            <p>
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>ANTIGRAVITY</strong> is the flagship national-level hackathon hosted by{' '}
              <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 700 }}>Bharati Vidyapeeth&apos;s Institute of Management &amp; Information Technology (MCA)</strong>, Navi Mumbai — celebrating{' '}
              <em style={{ color: 'var(--accent-primary)' }}>25 Years of Excellence</em> in technical education.
            </p>

            <p>
              This year&apos;s edition brings together <strong style={{ color: 'rgba(255,255,255,0.9)' }}>150+ teams</strong> from across India for a{' '}
              <strong style={{ color: 'rgba(255,255,255,0.9)' }}>24-hour sprint</strong> of innovation, problem-solving, and collaboration. Students from Engineering, MCA, and IT institutes — regardless of their tier or city — are encouraged to participate and showcase their ideas.
            </p>

            <p>
              The hackathon spans multiple domains including Cyber Security, Cloud Solutions, Healthcare Tech, FinTech, Smart Cities &amp; IoT, and Sustainable Development. Teams are challenged to build production-ready prototypes that address real-world problems within the 24-hour window.
            </p>

            <p>
              With a total prize pool exceeding <strong style={{ color: 'var(--accent-primary)' }}>₹1,00,000</strong>, exclusive mentorship from industry professionals, networking opportunities, and certificates for all participants — ANTIGRAVITY is more than just a competition. It&apos;s a launchpad for the next generation of tech leaders.
            </p>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'flex',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            flexWrap: 'wrap',
            marginTop: '3.5rem',
            paddingTop: '2.5rem',
            borderTop: '1px solid rgba(255,255,255,0.07)',
          }}>
            {[
              { value: '150+', label: 'Teams' },
              { value: '₹1L+', label: 'Prize Pool' },
              { value: '24hrs', label: 'Duration' },
              { value: 'Aug 2026', label: 'Navi Mumbai' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 900, color: 'var(--accent-primary)', fontFamily: 'var(--font-primary)' }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: '4px' }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
