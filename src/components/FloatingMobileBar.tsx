import React from 'react';
import { Phone, MessageCircle, Bike } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const FloatingMobileBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick mobile contact actions"
      id="floating-mobile-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#171717',
        borderTop: '2px solid #F36B21',
        padding: '10px 14px',
        boxShadow: '0 -4px 20px rgba(0,0,0,0.5)',
        display: 'none'
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr 0.8fr',
        gap: '8px',
        alignItems: 'center'
      }}>
        {/* Call Button */}
        <a
          href={`tel:${businessInfo.primaryPhoneClean}`}
          id="mobile-bottom-call-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: '#262626',
            color: '#FFFFFF',
            padding: '11px 8px',
            borderRadius: '6px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.84rem',
            fontWeight: 800,
            textTransform: 'uppercase',
            border: '1px solid #3E3E3E'
          }}
        >
          <Phone size={16} color="#F36B21" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I would like to enquire about renting a bike or scooter.')}`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: '#25D366',
            color: '#FFFFFF',
            padding: '11px 8px',
            borderRadius: '6px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.84rem',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}
        >
          <MessageCircle size={17} />
          <span>WhatsApp</span>
        </a>

        {/* Fleet Shortcut */}
        <a
          href="#fleet"
          id="mobile-bottom-fleet-btn"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            backgroundColor: '#F36B21',
            color: '#FFFFFF',
            padding: '11px 8px',
            borderRadius: '6px',
            fontFamily: 'var(--font-heading)',
            fontSize: '0.84rem',
            fontWeight: 800,
            textTransform: 'uppercase'
          }}
        >
          <Bike size={16} />
          <span>Fleet</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #floating-mobile-bar {
            display: block !important;
          }
          body {
            padding-bottom: 64px !important;
          }
        }
      `}</style>
    </aside>
  );
};
