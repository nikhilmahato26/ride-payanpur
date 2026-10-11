import { useState } from 'react';
import { Calendar, Clock, Bike, MessageCircle, Phone, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { vehicles, businessInfo, createCustomBookingWhatsAppLink } from '../data/vehicles';

export const QuickBookingWidget = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]?.name || 'TVS Jupiter');
  const [duration, setDuration] = useState('1 Day');
  const [pickupDate, setPickupDate] = useState('');
  const [notes, setNotes] = useState('');

  const currentVehicleObj = vehicles.find(v => v.name === selectedVehicle);

  const handleSubmitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const link = createCustomBookingWhatsAppLink({
      vehicleName: selectedVehicle,
      duration: duration,
      pickupDate: pickupDate || 'Earliest available date',
      notes: notes.trim() ? notes.trim() : undefined,
      pricePerDay: currentVehicleObj?.pricePerDay
    });
    window.open(link, '_blank');
  };

  return (
    <section
      id="booking"
      style={{
        paddingTop: '75px',
        paddingBottom: '85px',
        backgroundColor: '#171717',
        color: '#FFFFFF',
        position: 'relative',
        borderBottom: '1px solid #2B2B2B'
      }}
    >
      <div className="container">
        <div className="booking-layout" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.25fr',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Left Info Column */}
          <div>
            <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '14px' }}>
              <span>Instant WhatsApp Booking</span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.2vw, 2.7rem)',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '14px'
            }}>
              PLAN YOUR TRIP <br />
              <span style={{ color: '#F36B21' }}>IN PAYYANUR</span>
            </h2>

            <div className="accent-line" />

            <p style={{
              color: '#D4D4D4',
              fontSize: '1.02rem',
              lineHeight: 1.6,
              marginBottom: '26px'
            }}>
              Planning a visit to Kavvayi backwaters, Ezhimala hills, or exploring Payyanur town? Reserve a brand new 2026 bike or scooter with transparent per-day pricing and a 120 km/day limit.
            </p>

            {/* Quick Benefits Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Zap size={18} color="#F36B21" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.92rem' }}>120 km / Day Limit Included</strong>
                  <span style={{ color: '#A3A3A3', fontSize: '0.82rem' }}>Generous daily allowance perfect for town travels and coastal day trips.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <CheckCircle2 size={18} color="#F36B21" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.92rem' }}>Brand New 2026 Registered Fleet</strong>
                  <span style={{ color: '#A3A3A3', fontSize: '0.82rem' }}>Freshly delivered, impeccably maintained scooters and Royal Enfield 350.</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <ShieldCheck size={18} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block', fontSize: '0.92rem' }}>Government of Kerala Authorized</strong>
                  <span style={{ color: '#A3A3A3', fontSize: '0.82rem' }}>Quick verification with valid Driving License and Government ID.</span>
                </div>
              </div>
            </div>

            {/* Direct Call Quick Link */}
            <div style={{
              padding: '16px 20px',
              backgroundColor: '#222222',
              borderRadius: '8px',
              border: '1px solid #333333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: '#999999', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prefer talking directly?</span>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {businessInfo.primaryPhone}
                </div>
              </div>
              <a
                href={`tel:${businessInfo.primaryPhoneClean}`}
                id="booking-call-cta"
                className="btn-outline-white"
                style={{ padding: '8px 16px', fontSize: '0.82rem' }}
              >
                <Phone size={14} color="#F36B21" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Form Card */}
          <div style={{
            backgroundColor: '#222222',
            borderRadius: '12px',
            padding: '36px',
            border: '2px solid #333333',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-14px',
              right: '24px',
              backgroundColor: '#F36B21',
              color: '#FFFFFF',
              padding: '4px 14px',
              borderRadius: '4px',
              fontSize: '0.74rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.06em'
            }}>
              Instant WhatsApp Connect
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              fontWeight: 800,
              marginBottom: '6px'
            }}>
              Quick Rental Reservation
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#A3A3A3', marginBottom: '24px' }}>
              Select your vehicle and dates to send your booking message directly on WhatsApp.
            </p>

            <form onSubmit={handleSubmitWhatsApp}>
              {/* Select Vehicle */}
              <div style={{ marginBottom: '18px' }}>
                <label
                  htmlFor="booking-vehicle"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#E5E5E5',
                    marginBottom: '8px'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Bike size={15} color="#F36B21" />
                    Select Vehicle
                  </span>
                  {currentVehicleObj && (
                    <span style={{ color: '#F36B21', fontSize: '0.82rem', fontWeight: 800 }}>
                      ₹{currentVehicleObj.pricePerDay}/day • 120 km limit
                    </span>
                  )}
                </label>
                <select
                  id="booking-vehicle"
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '13px 16px',
                    borderRadius: '6px',
                    backgroundColor: '#171717',
                    border: '1px solid #444444',
                    color: '#FFFFFF',
                    fontSize: '0.94rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.name}>
                      {v.name} ({v.modelYear} Model) — ₹{v.pricePerDay}/day ({v.unitsAvailable} in stock)
                    </option>
                  ))}
                </select>
              </div>

              {/* Grid: Date & Duration */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '18px'
              }}>
                <div>
                  <label
                    htmlFor="booking-date"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#E5E5E5',
                      marginBottom: '8px'
                    }}
                  >
                    <Calendar size={15} color="#F36B21" />
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="booking-date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      backgroundColor: '#171717',
                      border: '1px solid #444444',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none',
                      colorScheme: 'dark'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="booking-duration"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      color: '#E5E5E5',
                      marginBottom: '8px'
                    }}
                  >
                    <Clock size={15} color="#F36B21" />
                    Rental Duration
                  </label>
                  <select
                    id="booking-duration"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '6px',
                      backgroundColor: '#171717',
                      border: '1px solid #444444',
                      color: '#FFFFFF',
                      fontSize: '0.9rem',
                      fontFamily: 'inherit',
                      outline: 'none'
                    }}
                  >
                    <option value="1 Day">1 Day (120 km limit)</option>
                    <option value="2 Days">2 Days (240 km limit)</option>
                    <option value="3 to 5 Days">3 to 5 Days (Multi-day package)</option>
                    <option value="1 Week">1 Week (Weekly special)</option>
                    <option value="Long Term / Monthly">Long Term Hire</option>
                  </select>
                </div>
              </div>

              {/* Special Note */}
              <div style={{ marginBottom: '22px' }}>
                <label
                  htmlFor="booking-notes"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    color: '#E5E5E5',
                    marginBottom: '8px'
                  }}
                >
                  Trip Purpose or Special Request (Optional)
                </label>
                <input
                  type="text"
                  id="booking-notes"
                  placeholder="e.g. Kavvayi beach trip, need 2 helmets, etc."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '6px',
                    backgroundColor: '#171717',
                    border: '1px solid #444444',
                    color: '#FFFFFF',
                    fontSize: '0.9rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Pricing & Km Policy Notice */}
              <div style={{
                backgroundColor: 'rgba(243, 107, 33, 0.1)',
                border: '1px solid rgba(243, 107, 33, 0.35)',
                padding: '12px 14px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                color: '#FFB285',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <Zap size={18} color="#F36B21" style={{ flexShrink: 0 }} />
                <span>
                  <strong>120 km/day driving limit</strong> included with all rentals. Clean helmet provided complimentary.
                </span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="booking-submit-whatsapp-btn"
                className="btn-whatsapp"
                style={{
                  width: '100%',
                  padding: '15px',
                  fontSize: '0.96rem',
                  justifyContent: 'center',
                  borderRadius: '6px'
                }}
              >
                <MessageCircle size={19} />
                <span>Book on WhatsApp {currentVehicleObj ? `(@ ₹${currentVehicleObj.pricePerDay}/day)` : ''}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .booking-layout {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};
