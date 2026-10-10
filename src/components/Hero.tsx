import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: '48px',
        paddingBottom: '60px',
        borderBottom: '1px solid #2B2B2B'
      }}
    >
      {/* Background Subtle Gradient & Angled Accent */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '55%',
          height: '100%',
          background: 'radial-gradient(circle at 75% 30%, rgba(243, 107, 33, 0.12) 0%, rgba(23, 23, 23, 0) 70%)',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Column: Headline, Supporting Text & CTAs */}
          <div className="hero-content">
            {/* Badges Row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '18px' }}>
              <div className="badge-dark" style={{ borderLeftColor: '#F36B21' }}>
                <span style={{ color: '#F36B21', fontWeight: 800 }}>BIKE & SCOOTER RENTAL</span>
              </div>
              <div className="badge-green">
                <ShieldCheck size={14} />
                <span>Government of Kerala Authorized</span>
              </div>
            </div>

            {/* Eyebrow */}
            <div style={{
              fontSize: '0.86rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#F36B21',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ width: '20px', height: '2px', backgroundColor: '#F36B21' }}></span>
              <span>RIDE PAYYANUR • PAYYANUR, KERALA</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              textTransform: 'uppercase'
            }}>
              YOUR RIDE,<br />
              <span style={{ color: '#F36B21' }}>YOUR FREEDOM.</span>
            </h1>

            {/* Tagline Callout */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#242424',
              padding: '6px 14px',
              borderRadius: '4px',
              borderLeft: '3px solid #F36B21',
              marginBottom: '18px'
            }}>
              <Sparkles size={16} color="#F36B21" />
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.02rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
                color: '#FFFFFF'
              }}>
                {businessInfo.tagline}
              </span>
            </div>

            {/* Supporting Text */}
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.65,
              color: '#D4D4D4',
              marginBottom: '30px',
              maxWidth: '540px'
            }}>
              Explore Payyanur and nearby destinations at your own pace with bike and scooter rental options from Ride Payyanur.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="hero-cta-group" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}>
              <a
                href="#fleet"
                id="hero-explore-fleet-btn"
                className="btn-primary"
                style={{
                  padding: '15px 30px',
                  fontSize: '1rem',
                  letterSpacing: '0.04em'
                }}
              >
                <span>Explore Our Fleet</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I would like to enquire about renting a bike or scooter in Payyanur.')}`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-enquire-btn"
                className="btn-whatsapp"
                style={{
                  padding: '15px 28px',
                  fontSize: '1rem'
                }}
              >
                <MessageCircle size={19} />
                <span>WhatsApp to Enquire</span>
              </a>
            </div>

            {/* Fleet Quick Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
              paddingTop: '20px',
              borderTop: '1px solid #2B2B2B'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#F36B21" />
                <span style={{ fontSize: '0.84rem', color: '#D4D4D4', fontWeight: 500 }}>Well-Maintained Fleet</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#F36B21" />
                <span style={{ fontSize: '0.84rem', color: '#D4D4D4', fontWeight: 500 }}>Helmets Provided</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="#F36B21" />
                <span style={{ fontSize: '0.84rem', color: '#D4D4D4', fontWeight: 500 }}>Instant Documentation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="#F36B21" />
                <span style={{ fontSize: '0.84rem', color: '#D4D4D4', fontWeight: 500 }}>Ajwa Tower, Payyanur</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
              border: '2px solid #333333'
            }}>
              <img
                src="/hero-banner.jpg"
                alt="Ride Payyanur bikes and scooters on Kerala coastal road"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* Gradient Overlay at Bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(23,23,23,0.95) 0%, rgba(23,23,23,0) 100%)',
                pointerEvents: 'none'
              }} />

              {/* Floating Information Pill */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '16px',
                right: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'rgba(23, 23, 23, 0.92)',
                backdropFilter: 'blur(8px)',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid rgba(243, 107, 33, 0.4)'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.72rem',
                    color: '#F36B21',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Featured In Fleet
                  </div>
                  <div style={{
                    color: '#FFFFFF',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.98rem',
                    fontWeight: 800
                  }}>
                    Scooters & Motorcycles Ready to Rent
                  </div>
                </div>

                <a
                  href="#fleet"
                  style={{
                    backgroundColor: '#F36B21',
                    color: '#FFFFFF',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    flexShrink: 0
                  }}
                >
                  View All (7)
                </a>
              </div>
            </div>

            {/* Corner Badge */}
            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '20px',
              backgroundColor: '#16A34A',
              color: '#FFFFFF',
              padding: '6px 14px',
              borderRadius: '4px',
              fontSize: '0.78rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <ShieldCheck size={15} />
              <span>Govt Authorised</span>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Grid CSS */}
      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .hero-content {
            order: 1;
          }
          .hero-visual {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
};
