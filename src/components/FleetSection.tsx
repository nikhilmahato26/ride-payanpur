import { useState } from 'react';
import { MessageCircle, Phone, Gauge, Check, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { vehicles, createVehicleWhatsAppLink, businessInfo, fleetSummary } from '../data/vehicles';
import type { Vehicle } from '../data/vehicles';

export const FleetSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Scooter' | 'Motorcycle'>('All');

  const filteredVehicles = selectedCategory === 'All'
    ? vehicles
    : vehicles.filter(v => v.category === selectedCategory);

  const totalScooterUnits = vehicles
    .filter(v => v.category === 'Scooter')
    .reduce((sum, v) => sum + v.unitsAvailable, 0);

  const totalMotorcycleUnits = vehicles
    .filter(v => v.category === 'Motorcycle')
    .reduce((sum, v) => sum + v.unitsAvailable, 0);

  return (
    <section
      id="fleet"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#F9F9F9',
        borderBottom: '1px solid #E5E5E5'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 36px auto' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Transparent Pricing & Verified Fleet</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#171717',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            CHOOSE YOUR RIDE
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{
            fontSize: '1.08rem',
            color: '#555555',
            lineHeight: 1.6,
            marginBottom: '16px'
          }}>
            Brand new 2026 fleet with clear, fixed per-day rates. Every rental includes <strong>120 km/day</strong> driving limit!
          </p>

          {/* Key Fleet Highlights Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            backgroundColor: '#FFFFFF',
            padding: '8px 18px',
            borderRadius: '30px',
            border: '1px solid #E5E5E5',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#F36B21', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Zap size={14} color="#F36B21" /> 120 km / Day Limit
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D4D4D4' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#171717' }}>
              Starting @ ₹{fleetSummary.startingPrice}/Day
            </span>
            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#D4D4D4' }} />
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#16A34A', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ShieldCheck size={14} color="#16A34A" /> Brand New 2026 Fleet ({fleetSummary.totalVehicles} Bikes)
            </span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          id="fleet-category-filters"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '44px'
          }}
        >
          <button
            type="button"
            id="filter-all-btn"
            onClick={() => setSelectedCategory('All')}
            style={{
              padding: '10px 22px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderRadius: '4px',
              border: selectedCategory === 'All' ? '2px solid #F36B21' : '2px solid #D4D4D4',
              backgroundColor: selectedCategory === 'All' ? '#171717' : '#FFFFFF',
              color: selectedCategory === 'All' ? '#F36B21' : '#333333',
              boxShadow: selectedCategory === 'All' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            All Models ({vehicles.length} Models • {fleetSummary.totalVehicles} Units)
          </button>

          <button
            type="button"
            id="filter-scooters-btn"
            onClick={() => setSelectedCategory('Scooter')}
            style={{
              padding: '10px 22px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderRadius: '4px',
              border: selectedCategory === 'Scooter' ? '2px solid #F36B21' : '2px solid #D4D4D4',
              backgroundColor: selectedCategory === 'Scooter' ? '#171717' : '#FFFFFF',
              color: selectedCategory === 'Scooter' ? '#F36B21' : '#333333',
              boxShadow: selectedCategory === 'Scooter' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Scooters ({totalScooterUnits} Units)
          </button>

          <button
            type="button"
            id="filter-motorcycles-btn"
            onClick={() => setSelectedCategory('Motorcycle')}
            style={{
              padding: '10px 22px',
              fontFamily: 'var(--font-heading)',
              fontSize: '0.92rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              borderRadius: '4px',
              border: selectedCategory === 'Motorcycle' ? '2px solid #F36B21' : '2px solid #D4D4D4',
              backgroundColor: selectedCategory === 'Motorcycle' ? '#171717' : '#FFFFFF',
              color: selectedCategory === 'Motorcycle' ? '#F36B21' : '#333333',
              boxShadow: selectedCategory === 'Motorcycle' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            Motorcycles ({totalMotorcycleUnits} Unit)
          </button>
        </div>

        {/* Vehicle Cards Grid */}
        <div
          id="fleet-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredVehicles.map((vehicle: Vehicle) => {
            const whatsappUrl = createVehicleWhatsAppLink(vehicle.name, vehicle.pricePerDay);

            return (
              <div
                key={vehicle.id}
                id={`vehicle-card-${vehicle.id}`}
                className="vehicle-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  border: '1px solid #E5E5E5',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  position: 'relative'
                }}
              >
                {/* Image Container with Badges */}
                <div style={{
                  position: 'relative',
                  backgroundColor: '#F3F4F6',
                  height: '240px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid #ECECEC'
                }}>
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.name} bike rental in Payyanur`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="vehicle-image"
                  />

                  {/* Top Left Badges: Category & 2026 Model */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{
                      backgroundColor: vehicle.category === 'Motorcycle' ? '#171717' : '#F36B21',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}>
                      {vehicle.category}
                    </span>

                    <span style={{
                      backgroundColor: '#16A34A',
                      color: '#FFFFFF',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}>
                      {vehicle.modelYear} Model
                    </span>
                  </div>

                  {/* Top Right Highlight Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(23, 23, 23, 0.88)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <Gauge size={12} color="#F36B21" />
                    <span>{vehicle.engine}</span>
                  </div>

                  {/* Units Count Bottom Pill */}
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '12px',
                    backgroundColor: 'rgba(23, 23, 23, 0.9)',
                    backdropFilter: 'blur(4px)',
                    color: '#FFFFFF',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22C55E' }} />
                    <span>{vehicle.unitsAvailable} Available in Fleet</span>
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Name and Highlight */}
                  <div style={{ marginBottom: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.45rem',
                        fontWeight: 800,
                        color: '#171717',
                        marginBottom: '4px'
                      }}>
                        {vehicle.name}
                      </h3>
                    </div>
                    <div style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: '#F36B21'
                    }}>
                      {vehicle.highlight}
                    </div>
                  </div>

                  {/* Short Description */}
                  <p style={{
                    fontSize: '0.88rem',
                    color: '#666666',
                    lineHeight: 1.55,
                    marginBottom: '18px'
                  }}>
                    {vehicle.description}
                  </p>

                  {/* Specs Quick Pills */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px',
                    padding: '12px',
                    backgroundColor: '#F8F8F8',
                    borderRadius: '6px',
                    marginBottom: '16px',
                    fontSize: '0.78rem',
                    border: '1px solid #ECECEC'
                  }}>
                    <div>
                      <span style={{ color: '#888888', display: 'block', fontSize: '0.7rem' }}>Transmission</span>
                      <strong style={{ color: '#171717' }}>{vehicle.transmission}</strong>
                    </div>
                    <div>
                      <span style={{ color: '#888888', display: 'block', fontSize: '0.7rem' }}>Daily Limit</span>
                      <strong style={{ color: '#F36B21' }}>{vehicle.dailyKmLimit} km / day</strong>
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <span style={{ color: '#888888', display: 'block', fontSize: '0.7rem' }}>Ideal For</span>
                      <strong style={{ color: '#171717' }}>{vehicle.idealFor}</strong>
                    </div>
                  </div>

                  {/* Features Bullet Points */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginBottom: '20px'
                  }}>
                    {vehicle.features.map((feat, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#444444' }}>
                        <Check size={14} color="#16A34A" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Box */}
                  <div style={{
                    marginTop: 'auto',
                    backgroundColor: '#FFF8F4',
                    border: '1.5px solid #F36B21',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    boxShadow: '0 2px 6px rgba(243, 107, 33, 0.08)'
                  }}>
                    <div>
                      <div style={{
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        color: '#7C2D12',
                        fontWeight: 800
                      }}>
                        Rental Price
                      </div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: '1.75rem',
                          fontWeight: 900,
                          color: '#171717',
                          lineHeight: 1
                        }}>
                          ₹{vehicle.pricePerDay}
                        </span>
                        <span style={{ fontSize: '0.86rem', color: '#666666', fontWeight: 700 }}>
                          / day
                        </span>
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        backgroundColor: '#171717',
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '0.76rem',
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                        display: 'inline-block'
                      }}>
                        {vehicle.dailyKmLimit} km / Day
                      </div>
                      <div style={{ fontSize: '0.7rem', color: '#666666', marginTop: '3px' }}>
                        Helmet & Docs included
                      </div>
                    </div>
                  </div>

                  {/* Actions: Book on WhatsApp + Direct Call */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: '10px'
                  }}>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`book-whatsapp-${vehicle.id}`}
                      className="btn-whatsapp"
                      style={{
                        padding: '12px 14px',
                        fontSize: '0.86rem',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        fontWeight: 700
                      }}
                    >
                      <MessageCircle size={17} />
                      <span>Book @ ₹{vehicle.pricePerDay}/day</span>
                    </a>

                    <a
                      href={`tel:${businessInfo.primaryPhoneClean}`}
                      id={`call-vehicle-${vehicle.id}`}
                      className="btn-outline-dark"
                      style={{
                        padding: '12px 16px',
                        fontSize: '0.86rem',
                        borderRadius: '4px'
                      }}
                      title={`Call to enquire about ${vehicle.name}`}
                    >
                      <Phone size={16} color="#F36B21" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Fleet Notice */}
        <div style={{
          marginTop: '44px',
          padding: '18px 24px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid #E5E5E5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#FFF2EB',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles size={20} color="#F36B21" />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, color: '#171717' }}>
                Need Multi-Day or Weekly Rentals in Payyanur?
              </div>
              <div style={{ fontSize: '0.84rem', color: '#666666' }}>
                Special discounted packages available for long-term hires, wedding guests & corporate visits.
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I need a rental bike for multiple days. Please share your discounted weekly / multi-day rates.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: '11px 22px', fontSize: '0.86rem' }}
          >
            <span>Ask Multi-Day Rates</span>
          </a>
        </div>
      </div>

      <style>{`
        .vehicle-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 14px 30px rgba(0,0,0,0.12) !important;
          border-color: #F36B21 !important;
        }
        .vehicle-card:hover .vehicle-image {
          transform: scale(1.04);
        }
        @media (max-width: 640px) {
          #fleet-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
