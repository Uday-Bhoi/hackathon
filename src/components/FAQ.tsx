'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: 'Who can participate?', answer: 'Students currently enrolled in Engineering, MCA, or IT institutes across India (UG/PG).' },
  { question: 'What is the team size?', answer: 'Each team must consist of 4 to 5 members.' },
  { question: 'Is there a registration fee?', answer: 'Yes, the registration fee is ₹1500 per team.' },
  { question: 'What is the total duration?', answer: 'The hackathon is a 24-hour sprint starting from August 21st, 2026.' },
  { question: 'What are the benefits?', answer: 'Exciting cash prizes, certificates for all, industry mentorship, and great networking opportunities.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="faq" ref={ref} style={{ padding: '8rem 2rem', position: 'relative' }}>
      <motion.div 
        style={{ y: yParallax, opacity: opacityFade, maxWidth: '800px', margin: '0 auto' }}
      >
        <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', fontFamily: 'var(--font-primary)', fontWeight: 800 }}>
          Got <span className="accent-gradient">Questions?</span>
        </h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-card" style={{ overflow: 'hidden' }}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                style={{
                  width: '100%',
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '1.1rem',
                  fontWeight: 600
                }}
              >
                {faq.question}
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 2rem 1.5rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
