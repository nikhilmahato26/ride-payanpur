import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const ContactBar = () => {
  return (
    <section
      id="quick-contact-bar"
      style={{
        backgroundColor: '#F36B21',
        color: '#FFFFFF',
        padding: '16px 0',
        boxShadow: '0 6px 20px rgba(243, 107, 33, 0.25)',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container">
        <div className="contact-bar-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          alignItems: 'center'
        }}>
          {/* Item 1: Primary Call */}
          <a
            href={`tel:${businessInfo.primaryPhoneClean}`}
            id="bar-call-link"
            className="contact-bar-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#171717',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Phone size={18} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, fontWeight: 700 }}>
                Call To Book
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.02rem', fontWeight: 800 }}>
                {businessInfo.primaryPhone}
              </div>
            </div>
          </a>

          {/* Item 2: WhatsApp */}
          <a
            href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I would like to enquire about bike and scooter rental availability.')}`}
            target="_blank"
            rel="noopener noreferrer"
            id="bar-whatsapp-link"
            className="contact-bar-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#171717',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MessageCircle size={19} color="#25D366" />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, fontWeight: 700 }}>
                WhatsApp Direct
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.02rem', fontWeight: 800 }}>
                {businessInfo.whatsappPhone}
              </div>
            </div>
          </a>

          {/* Item 3: Location */}
          <a
            href="#contact"
            id="bar-location-link"
            className="contact-bar-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#171717',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <MapPin size={18} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, fontWeight: 700 }}>
                Rental Station
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.94rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Payyanur New Bus Stand
              </div>
            </div>
          </a>

          {/* Item 4: Email */}
          <a
            href={`mailto:${businessInfo.email}`}
            id="bar-email-link"
            className="contact-bar-item"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#FFFFFF',
              padding: '8px 12px',
              borderRadius: '6px',
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
              transition: 'background-color 0.2s ease, transform 0.2s ease'
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#171717',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Mail size={18} color="#FFFFFF" />
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', opacity: 0.9, fontWeight: 700 }}>
                Email Inquiries
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.88rem', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {businessInfo.email}
              </div>
            </div>
          </a>
        </div>
      </div>

      <style>{`
        .contact-bar-item:hover {
          background-color: rgba(0, 0, 0, 0.25) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};
