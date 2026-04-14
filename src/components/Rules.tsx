'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const rules = [
  'Each team must consist of 4–5 members.',
  'All participants must carry valid college ID cards.',
  'Teams must register before the deadline.',
  'Participants must develop original solutions during the hackathon.',
  'Pre-built projects are not allowed.',
  'Internet usage is allowed for research and development.',
  'Judges’ decisions will be final and binding.',
  'Participants must follow discipline and code of conduct on campus.',
  'Any misconduct will lead to disqualification.',
];

const judgingCriteria = [
  { title: 'Technology', desc: 'How technically impressive was the hack? Was the problem difficult? Clever techniques used?' },
  { title: 'Design', desc: 'Thought put into user experience and interface beauty/interaction.' },
  { title: 'Completion', desc: 'Does the hack work? Did the team achieve their goals?' },
  { title: 'Ideation', desc: 'Creativity and originality of the project idea.' },
  { title: 'Applicability', desc: 'How well the project fits the prize track and solve real issues.' },
];

const Rules = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="rules" ref={ref} style={{ padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)', position: 'relative' }}>
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade }}
      >
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'left', marginBottom: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: 'var(--font-primary)', fontWeight: 800 }}>
          Hackathon <span className="accent-gradient">Rulebook</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
          {/* Rules List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <AlertCircle style={{ color: 'var(--accent-primary)' }} /> Competition Rules
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {rules.map((rule, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--accent-secondary)', marginTop: '0.2rem', flexShrink: 0 }} />
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5 }}>{rule}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Judging Criteria */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Judging Criteria</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {judgingCriteria.map((item, idx) => (
                <div key={idx}>
                  <h4 style={{ color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', borderLeft: '4px solid var(--accent-secondary)' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                Note: Judges will not penalize for messy code or pitching skills. We value building and learning!
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Rules;
