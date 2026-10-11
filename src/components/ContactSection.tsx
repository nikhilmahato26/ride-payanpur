import { MapPin, Phone, MessageCircle, Mail, Clock, ShieldCheck, Navigation } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const ContactSection = () => {
  return (
    <section
      id="contact"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#F9F9F9',
        borderBottom: '1px solid #E5E5E5'
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px auto' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Find Us in Payyanur</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: '#171717',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            CONTACT & STOREFRONT
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{ fontSize: '1.05rem', color: '#666666', lineHeight: 1.6 }}>
            Visit our hub at Payyanur New Bus Stand (Parking Area) or reach out instantly via Phone or WhatsApp for rental rates and vehicle bookings.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '36px',
          alignItems: 'stretch'
        }} className="contact-grid">
          {/* Left: Complete Business Information Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '12px',
            padding: '36px',
            border: '1px solid #E5E5E5',
            boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Header with Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <span className="badge-green">
                <ShieldCheck size={14} /> Government of Kerala Authorized
              </span>
              <span className="badge-dark" style={{ borderLeftColor: '#F36B21' }}>
                Government Authorised
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.75rem',
              fontWeight: 900,
              color: '#171717',
              marginBottom: '6px'
            }}>
              RIDE PAYYANUR
            </h3>
            <div style={{ fontSize: '0.86rem', color: '#F36B21', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '24px' }}>
              Bike & Scooter Rental Hub
            </div>

            {/* Contact Details List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#FFF2EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={20} color="#F36B21" />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#888888', fontWeight: 700 }}>
                    Storefront Address
                  </span>
                  <div style={{ fontSize: '0.96rem', color: '#171717', fontWeight: 700, lineHeight: 1.45, marginTop: '2px' }}>
                    {businessInfo.address}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#666666', marginTop: '2px' }}>
                    Nearby Landmark: Opposite Kokkanisseri Road, Payyanur New Bus Stand parking area.
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#FFF2EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Phone size={20} color="#F36B21" />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#888888', fontWeight: 700 }}>
                    Primary Calling Phone
                  </span>
                  <div>
                    <a
                      href={`tel:${businessInfo.primaryPhoneClean}`}
                      id="contact-phone-link"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#171717'
                      }}
                    >
                      {businessInfo.primaryPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#E7F9EE',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MessageCircle size={20} color="#25D366" />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#888888', fontWeight: 700 }}>
                    Official WhatsApp Support
                  </span>
                  <div>
                    <a
                      href={`https://wa.me/${businessInfo.whatsappClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="contact-whatsapp-link"
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: '#16A34A'
                      }}
                    >
                      {businessInfo.whatsappPhone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Mail size={20} color="#333333" />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#888888', fontWeight: 700 }}>
                    Email Address
                  </span>
                  <div>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      id="contact-email-link"
                      style={{ fontSize: '0.96rem', color: '#171717', fontWeight: 600 }}
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Operating Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  backgroundColor: '#F3F4F6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Clock size={20} color="#333333" />
                </div>
                <div>
                  <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#888888', fontWeight: 700 }}>
                    Working Hours
                  </span>
                  <div style={{ fontSize: '0.96rem', color: '#171717', fontWeight: 700 }}>
                    {businessInfo.workingHours}
                  </div>
                </div>
              </div>
            </div>

            {/* GSTIN & Authorization Box */}
            <div style={{
              marginTop: 'auto',
              padding: '16px 20px',
              backgroundColor: '#171717',
              borderRadius: '8px',
              color: '#FFFFFF',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <span style={{ fontSize: '0.72rem', color: '#AAAAAA', textTransform: 'uppercase' }}>Signage GSTIN</span>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 800, color: '#F36B21' }}>
                  {businessInfo.gstin}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.72rem', color: '#AAAAAA', textTransform: 'uppercase' }}>Official URL</span>
                <div style={{ fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>
                  {businessInfo.officialWebsite}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Location Map / Navigation Guide Card */}
          <div style={{
            backgroundColor: '#171717',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid #333333',
            color: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ padding: '24px 28px', borderBottom: '1px solid #2B2B2B' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Navigation size={18} color="#F36B21" />
                <h4 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#FFFFFF'
                }}>
                  How to Reach Us
                </h4>
              </div>
              <p style={{ fontSize: '0.84rem', color: '#A3A3A3' }}>
                Payyanur New Bus Stand (Parking Area), Opp. Kokkanisseri Road, Payyanur, Kerala – 670307.
              </p>
            </div>

            {/* Embedded Google Map */}
            <div style={{ position: 'relative', height: '320px', backgroundColor: '#262626' }}>
              <iframe
                title="Ride Payyanur Parking Location Map"
                src={businessInfo.mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Transit Distances */}
            <div style={{ padding: '22px 28px', backgroundColor: '#1F1F1F', flexGrow: 1 }}>
              <div style={{ fontSize: '0.76rem', color: '#F36B21', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.06em', marginBottom: '10px' }}>
                Transit Proximity
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.82rem', marginBottom: '20px' }}>
                <div style={{ padding: '8px 12px', backgroundColor: '#262626', borderRadius: '4px' }}>
                  <div style={{ color: '#888' }}>Payyanur New Bus Stand</div>
                  <strong style={{ color: '#22C55E' }}>0 mins (In Parking Area)</strong>
                </div>
                <div style={{ padding: '8px 12px', backgroundColor: '#262626', borderRadius: '4px' }}>
                  <div style={{ color: '#888' }}>Payyanur Railway Stn</div>
                  <strong style={{ color: '#FFF' }}>~ 2.5 km (6 mins ride)</strong>
                </div>
              </div>

              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-get-directions-btn"
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
              >
                <Navigation size={16} />
                <span>Open Parking Location on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
