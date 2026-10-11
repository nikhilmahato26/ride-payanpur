import React from 'react';
import { attractions } from '../data/attractions';
import { MapPin, Clock, Bike, MessageCircle, Compass } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const AttractionsSection: React.FC = () => {
  return (
    <section
      id="destinations"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#F9F9F9',
        borderBottom: '1px solid #E5E5E5'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 48px auto' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Local Travel Guide</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#171717',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            EXPLORE PAYYANUR & BEYOND
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.6 }}>
            Payyanur in Northern Kerala is blessed with pristine beaches, peaceful backwaters, and winding coastal highways best explored on two wheels.
          </p>
        </div>

        {/* Featured Coastal Ride Banner */}
        <div style={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '50px',
          boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
          border: '1px solid #E5E5E5'
        }}>
          <img
            src="/kavvayi-payyanur.jpg"
            alt="Scenic ride across Kavvayi backwaters and coastal bridge in Payyanur"
            style={{
              width: '100%',
              height: '340px',
              objectFit: 'cover',
              display: 'block'
            }}
          />

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(23, 23, 23, 0.92) 0%, rgba(23, 23, 23, 0.2) 60%, rgba(0,0,0,0.4) 100%)',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '30px'
          }}>
            <div style={{ maxWidth: '650px', color: '#FFFFFF' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#F36B21',
                padding: '4px 10px',
                borderRadius: '4px',
                fontSize: '0.74rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                marginBottom: '10px'
              }}>
                <Compass size={14} /> Must-Visit Route
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                marginBottom: '8px'
              }}>
                Kavvayi Backwaters Island Bridge Ride
              </h3>
              <p style={{ fontSize: '0.94rem', color: '#E0E0E0', lineHeight: 1.5, marginBottom: '16px' }}>
                Just a 10-minute scooter ride from our Payyanur New Bus Stand hub. Cruise along the backwaters, view traditional houseboats, and enjoy the cool Malabar sea breeze.
              </p>
              <a
                href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I want to rent a scooter for exploring Kavvayi backwaters. Please share rates and details.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.84rem' }}
              >
                <MessageCircle size={16} />
                <span>Rent Scooter for Kavvayi Ride</span>
              </a>
            </div>
          </div>
        </div>

        {/* Destinations Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {attractions.map((spot) => (
            <div
              key={spot.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '8px',
                padding: '24px',
                border: '1px solid #E5E5E5',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                transition: 'transform 0.2s ease, border-color 0.2s ease'
              }}
              className="destination-card"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px'
              }}>
                <span style={{
                  backgroundColor: '#FFF2EB',
                  color: '#F36B21',
                  fontSize: '0.74rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  padding: '3px 8px',
                  borderRadius: '3px'
                }}>
                  {spot.tag}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: '#666666', fontWeight: 600 }}>
                  <Clock size={13} color="#F36B21" />
                  <span>{spot.rideTime}</span>
                </div>
              </div>

              <h4 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.25rem',
                fontWeight: 800,
                color: '#171717',
                marginBottom: '8px'
              }}>
                {spot.name}
              </h4>

              <p style={{
                fontSize: '0.86rem',
                color: '#666666',
                lineHeight: 1.5,
                marginBottom: '16px',
                flexGrow: 1
              }}>
                {spot.description}
              </p>

              <div style={{
                paddingTop: '12px',
                borderTop: '1px solid #F0F0F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.78rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#444444' }}>
                  <Bike size={14} color="#F36B21" />
                  <span><strong>Fit:</strong> {spot.recommendedVehicle}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: '#888888' }}>
                  <MapPin size={12} />
                  <span>{spot.distance}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .destination-card:hover {
          transform: translateY(-3px);
          border-color: #F36B21 !important;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08) !important;
        }
      `}</style>
    </section>
  );
};
