'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const faqs = [
  { question: 'Who can participate?', answer: 'Students currently enrolled in Engineering, MCA, or IT institutes across India (UG/PG) are eligible to participate.' },
  { question: 'What is the team size?', answer: 'Each team must consist of 4 to 5 members. Solo participation is not permitted.' },
  { question: 'Is there a registration fee?', answer: 'Yes, the registration fee is ₹1500 per team. Payment details will be shared after registration.' },
  { question: 'When does the hackathon start?', answer: 'The hackathon begins on August 21st, 2026 and runs for 24 hours until August 22nd, 2026.' },
  { question: 'What are the prizes?', answer: 'The total prize pool is ₹1,00,000+. Winner gets ₹50,000, Runner Up gets ₹25,000, and 2nd Runner Up gets ₹15,000, plus Special Category Awards of ₹10,000 each.' },
  { question: 'Where is it held?', answer: 'The event is held at BVIMIT (MCA), Sector No. 8, CBD Belapur, Navi Mumbai, Maharashtra 400614.' },
  { question: 'What tracks are available?', answer: 'This year\'s tracks include Cloud Solutions & Architecture, Cyber Security, Smart Cities & IoT, Healthcare Tech, FinTech / Payments, and Sustainable Development.' },
  { question: 'Can we use pre-built code?', answer: 'No, pre-built projects are not allowed. All solutions must be developed during the hackathon. Using open-source libraries and APIs is permitted.' },
  { question: 'Will food be provided?', answer: 'Yes! Meals including lunch, dinner, and breakfast (Day 2) will be provided to all participants throughout the event.' },
  { question: 'What should I bring?', answer: 'Bring your laptop, charger, valid college ID, and any hardware you need. A stable internet connection will be available on campus.' },
];

type Message = { role: 'user' | 'bot'; text: string };

function getBotResponse(input: string): string {
  const q = input.toLowerCase();
  for (const faq of faqs) {
    const keywords = faq.question.toLowerCase().split(' ').filter(w => w.length > 3);
    if (keywords.some(kw => q.includes(kw))) {
      return faq.answer;
    }
  }
  if (q.includes('hello') || q.includes('hi') || q.includes('hey')) {
    return 'Hey there! 👋 I\'m the ANTIGRAVITY hackathon assistant. Ask me anything about registration, tracks, prizes, venue, or the schedule!';
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone')) {
    return 'You can reach us at admin.mca@bharatividyapeeth.edu or visit the Location section at the bottom of this page for phone numbers.';
  }
  return "I'm not sure about that specific query. Try asking about registration, team size, prizes, tracks, venue, or the schedule. You can also reach us at admin.mca@bharatividyapeeth.edu.";
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Hi! I\'m your ANTIGRAVITY hackathon assistant. Ask me anything about the event — registration, prizes, tracks, venue, and more!' }
  ]);
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { role: 'user', text: trimmed };
    const botMsg: Message = { role: 'bot', text: getBotResponse(trimmed) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput('');
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '58px',
          height: '58px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          zIndex: 1100,
          boxShadow: '0 8px 25px -5px rgba(139,92,246,0.6)',
        }}
        aria-label="Toggle chatbot"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen
            ? <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.span>
            : <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={22} /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              bottom: 'calc(2rem + 70px)',
              right: '2rem',
              width: 'min(380px, calc(100vw - 2rem))',
              maxHeight: '520px',
              background: 'rgba(10,10,14,0.96)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '20px',
              zIndex: 1100,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '1.1rem 1.4rem',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'rgba(139,92,246,0.08)',
            }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Bot size={18} color="white" />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', fontFamily: 'var(--font-primary)' }}>ANTIGRAVITY Assistant</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                  Online · Ask me anything
                </div>
              </div>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    gap: '0.5rem',
                    alignItems: 'flex-end',
                  }}
                >
                  {msg.role === 'bot' && (
                    <div style={{ width: '26px', height: '26px', borderRadius: '8px', background: 'rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Bot size={13} color="var(--accent-primary)" />
                    </div>
                  )}
                  <div style={{
                    maxWidth: '80%',
                    padding: '0.7rem 1rem',
                    borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? 'linear-gradient(135deg, var(--accent-primary), #7c3aed)' : 'rgba(255,255,255,0.06)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    color: msg.role === 'user' ? 'white' : 'rgba(255,255,255,0.85)',
                    fontFamily: 'var(--font-secondary)',
                    border: msg.role === 'bot' ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick suggest pills */}
            <div style={{ padding: '0 1.2rem 0.6rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {['Prizes 🏆', 'Registration', 'Venue', 'Tracks'].map((s) => (
                <button
                  key={s}
                  onClick={() => { setInput(s); }}
                  style={{
                    background: 'rgba(139,92,246,0.1)',
                    border: '1px solid rgba(139,92,246,0.25)',
                    color: 'rgba(255,255,255,0.65)',
                    borderRadius: '20px',
                    padding: '0.3rem 0.75rem',
                    fontSize: '0.75rem',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-secondary)',
                    transition: 'all 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = 'rgba(139,92,246,0.2)'}
                  onMouseOut={e => e.currentTarget.style.background = 'rgba(139,92,246,0.1)'}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '0.9rem 1.2rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              gap: '0.6rem',
              alignItems: 'center',
            }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about prizes, tracks, rules…"
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: '10px',
                  padding: '0.65rem 1rem',
                  color: 'white',
                  fontSize: '0.88rem',
                  outline: 'none',
                  fontFamily: 'var(--font-secondary)',
                }}
              />
              <motion.button
                onClick={sendMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, var(--accent-primary), #7c3aed)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Send size={15} color="white" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
