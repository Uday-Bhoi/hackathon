'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Activities', href: '#fun' },
    { name: 'Rules', href: '#rules' },
    { name: 'Location', href: '#location' },
  ];


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: isScrolled ? '0.8rem 2rem' : '1.2rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isScrolled ? 'rgba(3, 3, 3, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.12)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <Image src="/logo.png" alt="BVIMIT Logo" width={42} height={42} style={{ filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3))' }} />
        <div style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.8px', fontFamily: 'var(--font-primary)' }}>
          <span style={{ color: 'var(--accent-primary)' }}>BVI</span>
          <span style={{ color: 'white' }}>MIT</span>
        </div>
      </Link>

      {/* Desktop nav links – hidden on mobile */}
      <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <motion.div key={link.name} whileHover={{ y: -2 }}>
            <Link 
              href={link.href} 
              style={{ 
                fontSize: '1rem', 
                fontWeight: 500,
                color: 'var(--text-secondary)', 
                transition: 'all 0.3s ease',
                fontFamily: 'var(--font-secondary)',
                letterSpacing: '0.01em'
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'white')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        
        <div style={{ position: 'relative' }}>
          <button
            onClick={() => setIsThemeModalOpen(!isThemeModalOpen)}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50px',
              padding: '0.4rem 1rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Theme <span style={{ fontSize: '0.7rem' }}>▼</span>
          </button>

          <AnimatePresence>
            {isThemeModalOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 0.8rem)',
                  right: 0,
                  background: 'rgba(10, 10, 10, 0.95)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  padding: '0.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  minWidth: '150px',
                  zIndex: 1001,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                }}
              >
                {(['pixel', 'particles'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => {
                      setTheme(t);
                      setIsThemeModalOpen(false);
                    }}
                    style={{
                      background: theme === t ? 'rgba(139, 92, 246, 0.2)' : 'transparent',
                      color: theme === t ? 'var(--accent-primary)' : 'var(--text-primary)',
                      border: 'none',
                      padding: '0.6rem 1rem',
                      borderRadius: '8px',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                    }}
                    onMouseOver={(e) => {
                      if (theme !== t) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    }}
                    onMouseOut={(e) => {
                      if (theme !== t) e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    {t.charAt(0).toUpperCase() + t.slice(1)} {theme === t && '✓'}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link 
            href="#register" 
            style={{ 
              padding: '0.75rem 1.75rem', 
              background: 'linear-gradient(135deg, var(--accent-primary) 0%, #7c3aed 100%)', 
              borderRadius: '12px', 
              fontSize: '1rem', 
              fontWeight: 700,
              color: 'white',
              fontFamily: 'var(--font-primary)',
              boxShadow: '0 8px 20px -6px rgba(139, 92, 246, 0.5)',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            Register
          </Link>
        </motion.div>
      </div>

      {/* Mobile hamburger – shown on mobile only */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="mobile-menu-btn"
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          display: 'none',
          padding: '4px'
        }}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '60px',
              left: 0,
              right: 0,
              background: 'rgba(3,3,3,0.97)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              zIndex: 999,
              padding: '1.5rem 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  fontFamily: 'var(--font-secondary)',
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                marginTop: '0.5rem',
                padding: '0.9rem',
                background: 'linear-gradient(135deg, var(--accent-primary) 0%, #7c3aed 100%)',
                borderRadius: '10px',
                textAlign: 'center',
                fontWeight: 700,
                color: 'white',
                fontFamily: 'var(--font-primary)',
              }}
            >
              Register Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
