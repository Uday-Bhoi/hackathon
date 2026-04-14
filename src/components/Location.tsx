'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" style={{ position: 'relative', width: '100%', minHeight: '700px', overflow: 'hidden' }}>
      {/* Background Map Frame */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <iframe 
          title="BVIMIT Location Map"
          width="100%" 
          height="100%" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Bharati%20Vidyapeeth's%20Institute%20of%20Management%20%26%20Information%20Technology,%20Navi%20Mumbai&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          style={{ 
            border: 0, 
            filter: 'grayscale(100%) invert(92%) contrast(83%) drop-shadow(0 0 0px #000)',
            opacity: 0.6
          }} 
        />
      </div>

      {/* Dark Overlay Mask for Text Readability */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(to right, rgba(3,3,3,0.98) 0%, rgba(3,3,3,0.85) 45%, rgba(3,3,3,0.2) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }} />

      {/* Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '6rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '700px',
        pointerEvents: 'none' 
      }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '600px', pointerEvents: 'auto' }}
        >
          <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-primary)' }}>Where It <span className="accent-gradient">Happens</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem', fontFamily: 'var(--font-secondary)' }}>
            Join us at Bharati Vidyapeeth’s Institute of Management & Information Technology. A vibrant campus ready to host 24 hours of non-stop innovation.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', transition: 'transform 0.3s' }}>
              <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                <MapPin size={24} />
              </div>
              <div style={{ paddingTop: '5px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', fontFamily: 'var(--font-primary)' }}>BVIMIT</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontFamily: 'var(--font-secondary)', fontSize: '0.95rem', opacity: 0.9 }}>
                  Bharati Vidyapeeth’s Institute of Management & Information Technology (MCA),<br/>
                  Sector No. 8, CBD Belapur, Navi Mumbai,<br/>
                  Maharashtra 400614
                </p>
                <a 
                  href="https://maps.app.goo.gl/VqdJurdQtHCUCEoZ6" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '0.8rem', 
                    fontSize: '0.9rem', 
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-secondary)',
                    fontWeight: 600
                  }}
                >
                  View on Google Maps →
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', transition: 'transform 0.3s' }}>
              <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                <Mail size={24} />
              </div>
              <div style={{ paddingTop: '5px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'var(--font-primary)' }}>Email</h4>
                <a href="mailto:admin.mca@bharatividyapeeth.edu" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)', fontSize: '0.95rem', opacity: 0.9 }}>
                  admin.mca@bharatividyapeeth.edu
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start', transition: 'transform 0.3s' }}>
              <div style={{ padding: '12px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px', color: 'var(--accent-secondary)' }}>
                <Phone size={24} />
              </div>
              <div style={{ paddingTop: '5px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.4rem', fontFamily: 'var(--font-primary)' }}>Phone</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontFamily: 'var(--font-secondary)', fontSize: '0.95rem', opacity: 0.9 }}>
                  +91 95034 65636<br/>
                  +91 81048 45914
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
