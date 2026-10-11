import React from 'react';
import { ShieldCheck, Award, MapPin, Wrench, ThumbsUp, Clock, PhoneCall } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const WhyChooseUs: React.FC = () => {
  const trustPoints = [
    {
      icon: <ShieldCheck size={28} color="#16A34A" />,
      title: "Government of Kerala Authorized",
      description: "Operate with full peace of mind. We are officially recognized and authorized for bike and scooter rental operations in Payyanur."
    },
    {
      icon: <Award size={28} color="#F36B21" />,
      title: "GST Registered Business",
      description: `Official registered taxation with GSTIN: ${businessInfo.gstin}, guaranteeing transparent and verified business operations.`
    },
    {
      icon: <MapPin size={28} color="#F36B21" />,
      title: "Central Payyanur Location",
      description: "Conveniently situated at Payyanur New Bus Stand (Parking Area), Opp. Kokkanisseri Road, directly accessible upon arriving into town."
    },
    {
      icon: <Wrench size={28} color="#F36B21" />,
      title: "Meticulously Maintained Fleet",
      description: "Every scooter and motorcycle undergoes multi-point safety checks, regular oil changes, brake inspections, and tyre checks."
    },
    {
      icon: <ThumbsUp size={28} color="#F36B21" />,
      title: "Helmets & Safety Equipment",
      description: "Safety is our foremost priority. Sanitized, standard riding helmets are provided with your rental for a secure journey."
    },
    {
      icon: <Clock size={28} color="#F36B21" />,
      title: "Fast Handover & Easy Return",
      description: "No tedious paperwork. Quick license and ID confirmation gets you onto the road within minutes of reaching our desk."
    }
  ];

  return (
    <section
      id="why-us"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        borderBottom: '1px solid #2B2B2B'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Verified Trust</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            WHY RIDE WITH US?
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{ fontSize: '1.05rem', color: '#B3B3B3', lineHeight: 1.6 }}>
            Reliable two-wheelers, official authorization, and honest local hospitality in Payyanur.
          </p>
        </div>

        {/* 6 Trust Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {trustPoints.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#202020',
                borderRadius: '8px',
                padding: '28px',
                border: '1px solid #333333',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              className="why-card"
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '8px',
                backgroundColor: '#171717',
                border: '1px solid #333333',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px'
              }}>
                {item.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#FFFFFF',
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: '#AAAAAA',
                lineHeight: 1.6
              }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div style={{
          backgroundColor: '#262626',
          borderRadius: '10px',
          padding: '24px 30px',
          borderLeft: '4px solid #F36B21',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.2rem',
              fontWeight: 800,
              color: '#FFFFFF',
              marginBottom: '4px'
            }}>
              Ready to explore Northern Kerala?
            </div>
            <div style={{ fontSize: '0.88rem', color: '#BBBBBB' }}>
              Connect with Ride Payyanur today for transparent rates and vehicle availability.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`tel:${businessInfo.primaryPhoneClean}`}
              className="btn-outline-white"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <PhoneCall size={16} color="#F36B21" />
              <span>{businessInfo.primaryPhone}</span>
            </a>

            <a
              href={`https://wa.me/${businessInfo.whatsappClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: '10px 20px', fontSize: '0.85rem' }}
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .why-card:hover {
          transform: translateY(-4px);
          border-color: #F36B21 !important;
        }
      `}</style>
    </section>
  );
};
