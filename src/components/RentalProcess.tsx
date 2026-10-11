import React from 'react';
import { rentalSteps, rentalRequirements } from '../data/attractions';
import { ShieldCheck, FileText, CheckCircle2, HardHat, Key, Compass } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const RentalProcess: React.FC = () => {
  const stepIcons = [
    <Compass key="1" size={24} color="#F36B21" />,
    <FileText key="2" size={24} color="#F36B21" />,
    <Key key="3" size={24} color="#F36B21" />,
    <HardHat key="4" size={24} color="#F36B21" />
  ];

  return (
    <section
      id="how-it-works"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px auto' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Hassle-Free Process</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#171717',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            HOW RENTING WORKS
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{ fontSize: '1.05rem', color: '#666666' }}>
            Get on the road in minutes with our transparent, 4-step rental procedure in Payyanur.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '70px'
        }}>
          {rentalSteps.map((stepItem, idx) => (
            <div
              key={stepItem.step}
              style={{
                backgroundColor: '#F9F9F9',
                borderRadius: '8px',
                padding: '28px 24px',
                border: '1px solid #E5E5E5',
                position: 'relative',
                transition: 'transform 0.25s ease, border-color 0.25s ease'
              }}
              className="step-card"
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '18px'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E5E5E5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
                }}>
                  {stepIcons[idx]}
                </div>

                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: '#E5E5E5',
                  lineHeight: 1
                }}>
                  {stepItem.step}
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.22rem',
                fontWeight: 800,
                color: '#171717',
                marginBottom: '8px'
              }}>
                {stepItem.title}
              </h3>

              <p style={{
                fontSize: '0.88rem',
                color: '#666666',
                lineHeight: 1.55
              }}>
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Requirements Box (id="requirements") */}
        <div
          id="requirements"
          style={{
            backgroundColor: '#171717',
            color: '#FFFFFF',
            borderRadius: '12px',
            padding: '40px',
            border: '2px solid #333333',
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '32px'
          }}>
            <div>
              <div className="badge-green" style={{ marginBottom: '8px' }}>
                <ShieldCheck size={14} />
                <span>Verification Checklist</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.65rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#FFFFFF'
              }}>
                Rental Requirements & Policies
              </h3>
              <p style={{ color: '#A3A3A3', fontSize: '0.92rem' }}>
                Please carry these original documents when picking up your vehicle at Payyanur New Bus Stand (Parking Area).
              </p>
            </div>

            <div style={{
              backgroundColor: '#262626',
              padding: '10px 18px',
              borderRadius: '6px',
              borderLeft: '3px solid #16A34A',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <span style={{ fontSize: '0.72rem', color: '#999999', textTransform: 'uppercase' }}>Government License</span>
              <span style={{ color: '#16A34A', fontWeight: 800, fontSize: '0.92rem' }}>Government of Kerala Authorized</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}>
            {rentalRequirements.map((req, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#222222',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px solid #333333'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <CheckCircle2 size={18} color="#F36B21" />
                  <strong style={{ fontSize: '0.98rem', color: '#FFFFFF' }}>{req.title}</strong>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#BBBBBB', lineHeight: 1.5 }}>
                  {req.description}
                </p>
              </div>
            ))}
          </div>

          {/* Authorization Notice */}
          <div style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid #333333',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '14px',
            fontSize: '0.82rem',
            color: '#888888'
          }}>
            <span>
              Official Signage GSTIN: <strong style={{ color: '#F36B21' }}>{businessInfo.gstin}</strong>
            </span>
            <span>
              Authorization wording: <strong style={{ color: '#FFFFFF' }}>Government Authorised • Government of Kerala Authorized</strong>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        .step-card:hover {
          transform: translateY(-4px);
          border-color: #F36B21 !important;
        }
      `}</style>
    </section>
  );
};
