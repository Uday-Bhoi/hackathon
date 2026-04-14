'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimeUnit = ({ value, label }: { value: number; label: string }) => {
  const formattedValue = value.toString().padStart(2, '0');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <div style={{
        fontSize: 'clamp(3rem, 8vw, 6rem)',
        fontWeight: 900,
        fontFamily: 'var(--font-primary)',
        background: 'linear-gradient(180deg, #ffffff 0%, #888888 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: 1,
        letterSpacing: '2px',
        filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
      }}>
        {formattedValue}
      </div>
      <div style={{
        fontSize: '0.8rem',
        fontWeight: 700,
        color: 'var(--text-secondary)',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        fontFamily: 'var(--font-secondary)'
      }}>
        {label}
      </div>
    </div>
  );
};

const Colon = () => (
  <div style={{
    fontSize: 'clamp(2rem, 6vw, 4rem)',
    fontWeight: 900,
    color: '#4b5563',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '2rem'
  }}>
    :
  </div>
);

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
    // Target date: August 21 of the current year (or next year if already passed)
    const now = new Date();
    let targetYear = now.getFullYear();
    let targetDate = new Date(`August 21, ${targetYear} 00:00:00`);
    
    // If we're past August 21st, set for next year (just in case)
    if (now.getTime() > targetDate.getTime()) {
      targetYear++;
      targetDate = new Date(`August 21, ${targetYear} 00:00:00`);
    }

    const updateTimer = () => {
      const currentTime = new Date().getTime();
      const difference = targetDate.getTime() - currentTime;

      if (difference <= 0) {
        setIsTimeUp(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  if (!isMounted) return null;

  return (
    <section id="countdown" style={{ padding: 'clamp(4rem, 7vw, 7rem) clamp(2rem, 8vw, 8rem)', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <h2 style={{
            color: '#dc2626',
            fontSize: '1.2rem',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-primary)'
          }}>
            {isTimeUp ? "Time's Up" : "Hackathon Starts In"}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1rem, 4vw, 3rem)'
          }}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <Colon />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <Colon />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <Colon />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
