import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { PrivacyBanner } from './components/PrivacyBanner';
import { Footer } from './components/Footer';
import { QuotesSection } from './components/QuotesSection';
import { ERPModule } from './components/ERPModule';
import { WiseMindModule } from './components/WiseMindModule';
import { CalendarModule } from './components/CalendarModule';
import { ChatModule } from './components/ChatModule';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <QuotesSection />
        <WiseMindModule />
        <ERPModule />
        <ChatModule />
        <CalendarModule />
        <PrivacyBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
