import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ContactBar } from './components/ContactBar';
import { FleetSection } from './components/FleetSection';
import { QuickBookingWidget } from './components/QuickBookingWidget';
import { RentalProcess } from './components/RentalProcess';
import { AttractionsSection } from './components/AttractionsSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';

export function App() {
  return (
    <div className="ride-payyanur-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Quick Contact & Action Bar */}
        <ContactBar />

        {/* Fleet Section */}
        <FleetSection />

        {/* Interactive Booking Inquiry Assistant */}
        <QuickBookingWidget />

        {/* How It Works & Requirements */}
        <RentalProcess />

        {/* Explore Payyanur & Local Routes */}
        <AttractionsSection />

        {/* Why Choose Us & Trust Badges */}
        <WhyChooseUs />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Contact & Storefront Information */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Bar for Travelers */}
      <FloatingMobileBar />
    </div>
  );
}

export default App;
