import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';
import { businessInfo, vehicles } from '../data/vehicles';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: '#0F0F0F',
      color: '#FFFFFF',
      borderTop: '3px solid #F36B21',
      paddingTop: '70px',
      paddingBottom: '30px'
    }}>
      <div className="container">
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-grid">
          {/* Col 1: Brand & Overview */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '6px',
                overflow: 'hidden',
                backgroundColor: '#FFFFFF',
                padding: '2px',
                border: '2px solid #F36B21'
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
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  lineHeight: 1.1
                }}>
                  RIDE <span style={{ color: '#F36B21' }}>PAYYANUR</span>
                </div>
                <div style={{ fontSize: '0.68rem', color: '#999999', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Bike & Scooter Rental
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#9E9E9E', lineHeight: 1.6, marginBottom: '20px' }}>
              Your Ride, Your Freedom. Official two-wheeler rental agency in Payyanur offering reliable automatic scooters and motorcycles for exploring Northern Kerala.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#16A34A', fontSize: '0.78rem', fontWeight: 700 }}>
                <ShieldCheck size={16} /> Government of Kerala Authorized
              </div>
              <div style={{ fontSize: '0.78rem', color: '#AAAAAA' }}>
                <span style={{ color: '#F36B21', fontWeight: 700 }}>GSTIN:</span> {businessInfo.gstin}
              </div>
              <div style={{ fontSize: '0.78rem', color: '#AAAAAA' }}>
                <span style={{ color: '#F36B21', fontWeight: 700 }}>Tagline:</span> {businessInfo.tagline}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '16px',
              borderLeft: '3px solid #F36B21',
              paddingLeft: '10px'
            }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#B3B3B3' }}>
              <li><a href="#fleet" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Vehicle Fleet</a></li>
              <li><a href="#booking" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Instant Inquiry</a></li>
              <li><a href="#how-it-works" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Rental Process</a></li>
              <li><a href="#requirements" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Required Documents</a></li>
              <li><a href="#destinations" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Explore Payyanur</a></li>
              <li><a href="#why-us" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>Why Choose Us</a></li>
              <li><a href="#faqs" style={{ transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')} onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}>FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Fleet Models */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '16px',
              borderLeft: '3px solid #F36B21',
              paddingLeft: '10px'
            }}>
              Available Fleet
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: '#B3B3B3' }}>
              {vehicles.map((v) => (
                <li key={v.id}>
                  <a
                    href={`#vehicle-card-${v.id}`}
                    style={{ transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F36B21')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}
                  >
                    {v.name} ({v.category})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Storefront & Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.05rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              marginBottom: '16px',
              borderLeft: '3px solid #F36B21',
              paddingLeft: '10px'
            }}>
              Contact Us
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.86rem', color: '#BBBBBB' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={17} color="#F36B21" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{businessInfo.address}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} color="#F36B21" style={{ flexShrink: 0 }} />
                <a href={`tel:${businessInfo.primaryPhoneClean}`} style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  {businessInfo.primaryPhone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MessageCircle size={16} color="#25D366" style={{ flexShrink: 0 }} />
                <a href={`https://wa.me/${businessInfo.whatsappClean}`} target="_blank" rel="noopener noreferrer" style={{ color: '#FFFFFF', fontWeight: 700 }}>
                  {businessInfo.whatsappPhone}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#F36B21" style={{ flexShrink: 0 }} />
                <a href={`mailto:${businessInfo.email}`} style={{ color: '#FFFFFF' }}>
                  {businessInfo.email}
                </a>
              </div>
            </div>

            <div style={{ marginTop: '20px' }}>
              <button
                type="button"
                onClick={scrollToTop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#262626',
                  color: '#D4D4D4',
                  padding: '7px 14px',
                  borderRadius: '4px',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  border: '1px solid #333333'
                }}
              >
                <ArrowUp size={14} />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #222222',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.78rem',
          color: '#777777'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>RIDE PAYYANUR</strong>. All rights reserved. • Government Authorised • Government of Kerala Authorized
          </div>

          <div>
            Official Reference: <a href="https://ride-payyanur.grexa.site" target="_blank" rel="noopener noreferrer" style={{ color: '#F36B21' }}>{businessInfo.officialWebsite}</a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};
