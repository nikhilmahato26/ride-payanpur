import { useState } from 'react';
import { faqs } from '../data/faqs';
import type { FAQItem } from '../data/faqs';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { businessInfo } from '../data/vehicles';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faqs"
      style={{
        paddingTop: '80px',
        paddingBottom: '90px',
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5'
      }}
    >
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge-dark" style={{ borderLeftColor: '#F36B21', marginBottom: '12px' }}>
            <span>Help & Answers</span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.6rem)',
            color: '#171717',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="accent-line accent-line-center" />

          <p style={{ fontSize: '1.02rem', color: '#666666' }}>
            Everything you need to know about renting a scooter or bike with Ride Payyanur.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq: FAQItem, idx: number) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                style={{
                  border: isOpen ? '1px solid #F36B21' : '1px solid #E5E5E5',
                  borderRadius: '8px',
                  backgroundColor: isOpen ? '#FFFBF8' : '#FAFAFA',
                  overflow: 'hidden',
                  transition: 'all 0.2s ease'
                }}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  id={`faq-btn-${idx}`}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '16px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    outline: 'none'
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: isOpen ? '#F36B21' : '#171717',
                    transition: 'color 0.2s ease'
                  }}>
                    {faq.question}
                  </span>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: isOpen ? '#F36B21' : '#ECECEC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.2s ease'
                  }}>
                    <ChevronDown
                      size={18}
                      color={isOpen ? '#FFFFFF' : '#171717'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 22px 24px',
                    fontSize: '0.94rem',
                    color: '#555555',
                    lineHeight: 1.6,
                    borderTop: '1px solid rgba(243, 107, 33, 0.15)',
                    paddingTop: '16px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div style={{
          marginTop: '36px',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#F9F9F9',
          borderRadius: '8px',
          border: '1px solid #EAEAEA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#555555', fontSize: '0.9rem' }}>
            Have a question not answered here?
          </span>
          <a
            href={`https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent('Hello Ride Payyanur, I have a question regarding rentals.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
