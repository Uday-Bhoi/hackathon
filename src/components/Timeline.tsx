'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const events = [
  { time: '12:00 PM', title: 'Registration & Welcome Kit', desc: 'Check-in, collect your kit, and meet your fellow hackers.', day: 1 },
  { time: '12:30 PM', title: 'Inauguration Ceremony', desc: 'Kick-off with an opening address from industry leaders.', day: 1 },
  { time: '01:00 PM', title: 'Problem Statement Release', desc: 'Tracks and challenges are officially unveiled.', day: 1 },
  { time: '01:30 PM', title: 'Hackathon Starts', desc: 'The 24-hour development marathon begins!', day: 1, highlight: true },
  { time: '05:00 PM', title: 'Mentor Interaction', desc: 'Get expert guidance and strategic advice for your project.', day: 1 },
  { time: '07:30 PM', title: 'Dinner', desc: 'Fuel up with a hot meal before the intense night ahead.', day: 1 },
  { time: '10:00 PM', title: 'Midnight Coding Session', desc: 'Push through the night with energy and determination.', day: 1 },
  { time: '07:30 AM', title: 'Breakfast', desc: 'Recharge and prepare for the final stretch.', day: 2 },
  { time: '09:00 AM', title: 'Final Development Phase', desc: 'Last chance to polish your prototype and documentation.', day: 2 },
  { time: '10:00 AM', title: 'Project Submission', desc: 'Submit final commits and complete your project writeup.', day: 2 },
  { time: '10:30 AM', title: 'Final Presentation', desc: 'Present your innovation to the judges with confidence.', day: 2 },
  { time: '11:30 AM', title: 'Jury Evaluation', desc: 'Demonstrate your tech to an expert panel of evaluators.', day: 2 },
  { time: '12:30 PM', title: 'Prize Distribution', desc: 'Winners are announced and prizes are awarded.', day: 2 },
  { time: '01:00 PM', title: 'Closing Ceremony', desc: 'The hackathon concludes on a high note — until next year!', day: 2 },
];

const day1 = events.filter(e => e.day === 1);
const day2 = events.filter(e => e.day === 2);

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scaleLine = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      id="timeline"
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) clamp(2rem, 8vw, 8rem)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div style={{ y: yParallax }}>
        {/* Header – center aligned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 7vw, 6rem)' }}
        >
          <p style={{
            letterSpacing: '4px',
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--accent-primary)',
            textTransform: 'uppercase',
            marginBottom: '0.8rem',
          }}>
            Event Schedule
          </p>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontFamily: 'var(--font-primary)',
            fontWeight: 900,
          }}>
            Hackathon <span className="accent-gradient">Timeline</span>
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            marginTop: '0.8rem',
            fontSize: 'clamp(0.9rem, 2vw, 1.05rem)',
            fontFamily: 'var(--font-secondary)',
          }}>
            A 24-hour journey from idea to prototype — across two action-packed days.
          </p>
        </motion.div>

        {/* Two-column day layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'start',
        }}>
          {[
            { label: 'Day 1 — Aug 21', events: day1, color: 'var(--accent-primary)' },
            { label: 'Day 2 — Aug 22', events: day2, color: 'var(--accent-secondary)' },
          ].map((day, dayIdx) => (
            <div key={dayIdx}>
              {/* Day header */}
              <motion.div
                initial={{ opacity: 0, x: dayIdx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2rem',
                }}
              >
                <div style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: day.color,
                  boxShadow: `0 0 12px ${day.color}`,
                  flexShrink: 0,
                }} />
                <span style={{
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  color: day.color,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-primary)',
                }}>
                  {day.label}
                </span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.07)' }} />
              </motion.div>

              {/* Events column with animated line */}
              <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                {/* Static track */}
                <div style={{
                  position: 'absolute',
                  left: '6px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '2px',
                }} />
                {/* Animated fill */}
                <motion.div style={{
                  position: 'absolute',
                  left: '6px',
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  background: day.color,
                  borderRadius: '2px',
                  scaleY: scaleLine,
                  originY: 0,
                  opacity: 0.5,
                }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
                  {day.events.map((event, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: dayIdx === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ delay: idx * 0.06, duration: 0.45 }}
                      style={{ position: 'relative', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                    >
                      {/* Dot */}
                      <div style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '8px',
                        width: event.highlight ? '13px' : '8px',
                        height: event.highlight ? '13px' : '8px',
                        borderRadius: '50%',
                        background: event.highlight ? day.color : 'rgba(255,255,255,0.2)',
                        boxShadow: event.highlight ? `0 0 15px ${day.color}` : 'none',
                        border: event.highlight ? `3px solid rgba(139,92,246,0.25)` : 'none',
                        transform: event.highlight ? 'translateX(-2px)' : 'none',
                        zIndex: 2,
                        transition: 'all 0.3s',
                      }} />

                      {/* Card */}
                      <motion.div
                        whileHover={{ x: 4, borderColor: 'rgba(139,92,246,0.25)' }}
                        style={{
                          flex: 1,
                          padding: 'clamp(0.9rem, 2vw, 1.2rem) clamp(1rem, 2.5vw, 1.5rem)',
                          background: event.highlight
                            ? 'rgba(139,92,246,0.08)'
                            : 'rgba(255,255,255,0.02)',
                          border: event.highlight
                            ? '1px solid rgba(139,92,246,0.2)'
                            : '1px solid rgba(255,255,255,0.05)',
                          borderRadius: '12px',
                          backdropFilter: 'blur(8px)',
                          cursor: 'default',
                          transition: 'border-color 0.3s',
                        }}
                      >
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          marginBottom: '0.3rem',
                          flexWrap: 'wrap',
                        }}>
                          <span style={{
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: day.color,
                            fontFamily: 'var(--font-primary)',
                            background: `${day.color}18`,
                            padding: '2px 8px',
                            borderRadius: '20px',
                            border: `1px solid ${day.color}33`,
                            letterSpacing: '0.3px',
                          }}>
                            {event.time}
                          </span>
                          <h3 style={{
                            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                            fontWeight: event.highlight ? 800 : 700,
                            fontFamily: 'var(--font-primary)',
                            color: event.highlight ? 'var(--text-primary)' : 'rgba(255,255,255,0.85)',
                          }}>
                            {event.title}
                          </h3>
                        </div>
                        <p style={{
                          color: 'rgba(255,255,255,0.38)',
                          fontSize: 'clamp(0.78rem, 1.8vw, 0.85rem)',
                          lineHeight: 1.5,
                          fontFamily: 'var(--font-secondary)',
                        }}>
                          {event.desc}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
