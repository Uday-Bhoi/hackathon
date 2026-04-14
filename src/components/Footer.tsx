'use client';

import React from 'react';
import Link from 'next/link';
import { Instagram, X, Linkedin, MessageSquare, Terminal, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '6rem 2rem 4rem', 
      background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05))',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      zIndex: 2
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{ 
                background: 'var(--accent-primary)', 
                padding: '8px', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Terminal size={24} color="white" />
              </div>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-primary)' }}>
                BVIMIT<span style={{ color: 'var(--accent-primary)' }}>.</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1rem', maxWidth: '300px', fontFamily: 'var(--font-secondary)' }}>
              Empowering the next generation of innovators at the BVIMIT National Level Hackathon. 25 Years of Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-primary)' }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Link href="#about" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>About Us</Link>
              <Link href="#tracks" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Themes</Link>
              <Link href="#timeline" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Schedule</Link>
              <Link href="#faq" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}>Support</Link>
            </div>
          </div>

          {/* Contact & Registration */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, fontFamily: 'var(--font-primary)' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><MapPin size={16} /> Navi Mumbai, India</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}><Mail size={16} /> contact@bvimit.edu</p>
              <div style={{ display: 'flex', gap: '1.2rem', marginTop: '0.5rem' }}>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'transform 0.3s' }}><Instagram size={22} /></a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'transform 0.3s' }}><X size={22} /></a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'transform 0.3s' }}><Linkedin size={22} /></a>
                <a href="#" style={{ color: 'var(--text-secondary)', transition: 'transform 0.3s' }}><MessageSquare size={22} /></a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.05)', 
          textAlign: 'center',
          paddingTop: '3rem'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', opacity: 0.8, fontFamily: 'var(--font-secondary)' }}>
            © 2026 BVIMIT National Level Hackathon. Made with Passion for Innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
