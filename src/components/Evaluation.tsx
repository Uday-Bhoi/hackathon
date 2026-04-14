'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const criteria = [
  {
    label: 'Innovation',
    value: 25,
    desc: 'Originality of idea, creative use of technology, and novelty of the solution.',
    color: '#8b5cf6',
  },
  {
    label: 'Technical Implementation',
    value: 25,
    desc: 'Code quality, system design, architecture, and technical sophistication.',
    color: '#06b6d4',
  },
  {
    label: 'Impact',
    value: 20,
    desc: 'Real-world applicability, addressal of a genuine problem, and societal relevance.',
    color: '#f59e0b',
  },
  {
    label: 'Presentation',
    value: 15,
    desc: 'Clarity of pitch, demo quality, and ability to communicate the idea effectively.',
    color: '#22c55e',
  },
  {
    label: 'Feasibility',
    value: 15,
    desc: 'Technical viability, scalability, and potential for real-world deployment.',
    color: '#f43f5e',
  },
];

const Evaluation = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section
      id="evaluation"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)',
        position: 'relative',
      }}
    >
      <motion.div style={{ y: yParallax }}>
        {/* Header – left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 'clamp(2.5rem, 6vw, 5rem)', textAlign: 'left' }}
        >
          <p style={{
            letterSpacing: '4px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            marginBottom: '0.8rem',
          }}>
            Judging
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
          }}>
            Evaluation <span className="accent-gradient">Criteria</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            marginTop: '0.8rem',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            fontFamily: 'var(--font-secondary)',
            maxWidth: '500px',
          }}>
            Projects are scored across five dimensions by an expert panel.
          </p>
        </motion.div>

        {/* Two-column layout: criteria list + visual donut summary */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'start',
        }}>

          {/* Left: stacked criteria rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.2rem, 2.5vw, 1.8rem)' }}>
            {criteria.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
                style={{
                  padding: 'clamp(1.2rem, 2.5vw, 1.6rem) clamp(1.2rem, 3vw, 2rem)',
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '14px',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.3s',
                  cursor: 'default',
                }}
                onMouseOver={e => e.currentTarget.style.borderColor = `${item.color}44`}
                onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  <div>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                      fontWeight: 700,
                      fontFamily: 'var(--font-primary)',
                      marginBottom: '0.3rem',
                    }}>
                      {item.label}
                    </h3>
                    <p style={{
                      color: 'rgba(255,255,255,0.4)',
                      fontSize: 'clamp(0.8rem, 1.8vw, 0.88rem)',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-secondary)',
                      maxWidth: '340px',
                    }}>
                      {item.desc}
                    </p>
                  </div>
                  <span style={{
                    fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
                    fontWeight: 900,
                    color: item.color,
                    fontFamily: 'var(--font-primary)',
                    flexShrink: 0,
                    marginLeft: '1rem',
                    filter: `drop-shadow(0 0 8px ${item.color}55)`,
                  }}>
                    {item.value}%
                  </span>
                </div>

                {/* Progress bar */}
                <div style={{
                  height: '4px',
                  background: 'rgba(255,255,255,0.06)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  marginTop: '0.6rem',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${item.color}99, ${item.color})`,
                      borderRadius: '4px',
                      boxShadow: `0 0 8px ${item.color}66`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: visual summary panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              position: 'sticky',
              top: '120px',
            }}
          >
            <h3 style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 700,
              marginBottom: '2rem',
              fontFamily: 'var(--font-primary)',
              color: 'rgba(255,255,255,0.7)',
            }}>
              Score Breakdown
            </h3>

            {criteria.map((item, idx) => (
              <div key={idx} style={{ marginBottom: '1.4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-secondary)' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 800, color: item.color, fontFamily: 'var(--font-primary)' }}>
                    {item.value}pts
                  </span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px', overflow: 'hidden' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value * 4}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + idx * 0.1, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      background: item.color,
                      borderRadius: '6px',
                      boxShadow: `0 0 10px ${item.color}44`,
                    }}
                  />
                </div>
              </div>
            ))}

            <div style={{
              marginTop: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-secondary)', fontWeight: 600 }}>
                Total Score
              </span>
              <span style={{
                fontSize: '1.6rem',
                fontWeight: 900,
                fontFamily: 'var(--font-primary)',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                100pts
              </span>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(139,92,246,0.06)', borderRadius: '10px', border: '1px solid rgba(139,92,246,0.15)' }}>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontFamily: 'var(--font-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                Judges will not penalise for messy code or pitching skills — we value building and learning above all else.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Evaluation;
