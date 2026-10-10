import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Fleet', href: '#fleet' },
    { label: 'Booking Inquiry', href: '#booking' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Requirements', href: '#requirements' },
    { label: 'Explore Payyanur', href: '#destinations' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="top-banner" style={{
        backgroundColor: '#0F0F0F',
        color: '#D4D4D4',
        fontSize: '0.78rem',
        borderBottom: '1px solid #262626',
        padding: '6px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#16A34A', fontWeight: 700 }}>
              <ShieldCheck size={14} /> Government of Kerala Authorized
            </span>
            <span style={{ color: '#666' }}>|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: '#F36B21', fontWeight: 600 }}>GSTIN:</span> {businessInfo.gstin}
            </span>
            <span style={{ color: '#666' }} className="hide-mobile">|</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }} className="hide-mobile">
              <MapPin size={13} color="#F36B21" /> {businessInfo.locationShort}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#E5E5E5', fontWeight: 600, letterSpacing: '0.04em' }}>
              {businessInfo.tagline}
            </span>
            <a
              href={`mailto:${businessInfo.email}`}
              className="hide-mobile"
              style={{ color: '#A3A3A3', transition: 'color 0.2s' }}
            >
              {businessInfo.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backgroundColor: isScrolled ? '#171717EE' : '#171717',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: '2px solid #F36B21',
          transition: 'all 0.3s ease',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
        }}
      >
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: isScrolled ? '10px' : '14px',
          paddingBottom: isScrolled ? '10px' : '14px',
          transition: 'padding 0.2s ease'
        }}>
          {/* Logo & Brand Identity */}
          <a
            href="#"
            id="brand-logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              border: '2px solid #F36B21',
              flexShrink: 0
            }}>
              <img
                src="/logo.jpg"
                alt="Ride Payyanur Logo"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>

            <div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'baseline',
                gap: '4px'
              }}>
                <span>RIDE</span>
                <span style={{ color: '#F36B21' }}>PAYYANUR</span>
              </div>
              <div style={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#A3A3A3',
                lineHeight: 1.2
              }}>
                Bike & Scooter Rental
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#EDEDED',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  padding: '6px 2px',
                  position: 'relative',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#EDEDED')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Quick Actions */}
          <div className="desktop-actions" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <a
              href={`tel:${businessInfo.primaryPhoneClean}`}
              id="nav-call-btn"
              className="btn-outline-white"
              style={{
                padding: '9px 15px',
                fontSize: '0.82rem',
                borderWidth: '1.5px'
              }}
              title="Call Ride Payyanur"
            >
              <Phone size={14} color="#F36B21" />
              <span>Call Us</span>
            </a>

            <a
              href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I would like to enquire about renting a bike or scooter.')}`}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-btn"
              className="btn-whatsapp"
              style={{
                padding: '9px 16px',
                fontSize: '0.82rem'
              }}
            >
              <MessageCircle size={15} />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-nav-toggle-btn"
            style={{
              color: '#FFFFFF',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#262626',
              display: 'none'
            }}
          >
            {isMobileMenuOpen ? <X size={24} color="#F36B21" /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            style={{
              backgroundColor: '#171717',
              borderTop: '1px solid #262626',
              padding: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: '#FFFFFF',
                    fontSize: '1rem',
                    fontWeight: 600,
                    padding: '8px 0',
                    borderBottom: '1px solid #262626'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`tel:${businessInfo.primaryPhoneClean}`}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={18} />
                <span>Call {businessInfo.primaryPhone}</span>
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageCircle size={18} />
                <span>WhatsApp ({businessInfo.whatsappPhone})</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Responsive CSS for Navbar */}
      <style>{`
        @media (max-width: 960px) {
          .desktop-nav, .desktop-actions {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
