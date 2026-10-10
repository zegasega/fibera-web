import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { MedicalDisclaimer } from './components/MedicalDisclaimer';
import { SupportAndDeletionForm } from './components/SupportAndDeletionForm';
import { Footer } from './components/Footer';
import { LegalModals, LegalDocType } from './components/LegalModals';
import { DownloadModal } from './components/DownloadModal';

// Dedicated Separate Pages
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { AccountDeletionPage } from './pages/AccountDeletionPage';

export type AppPage = 'home' | 'privacy' | 'terms' | 'deletion';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>('privacy');
  const [formActiveTab, setFormActiveTab] = useState<'feedback' | 'deletion'>('feedback');

  const navigateTo = (page: AppPage, sectionId?: string) => {
    setCurrentPage(page);
    let newPath = '/';
    let newHash = '';
    if (page === 'privacy') {
      newPath = '/privacy';
      newHash = '#privacy';
    } else if (page === 'terms') {
      newPath = '/terms';
      newHash = '#terms';
    } else if (page === 'deletion') {
      newPath = '/account-deletion';
      newHash = '#account-deletion';
    }

    try {
      window.history.pushState({ page }, '', newPath);
    } catch {
      window.location.hash = newHash;
    }

    if (page === 'home') {
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenLegal = (doc: LegalDocType) => {
    // Open dedicated page directly for professional experience
    navigateTo(doc);
  };

  const handleNavigateToTab = (tab: 'feedback' | 'deletion') => {
    if (tab === 'deletion') {
      navigateTo('deletion');
      return;
    }

    if (currentPage !== 'home') {
      navigateTo('home', 'destek-istek');
    }
    setFormActiveTab(tab);
    const element = document.getElementById('destek-istek');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Synchronize with URL pathname and hash on initial mount and browser back/forward
  useEffect(() => {
    const handleLocation = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (pathname.includes('/privacy') || hash === '#privacy' || hash === '#gizlilik') {
        setCurrentPage('privacy');
      } else if (pathname.includes('/terms') || hash === '#terms' || hash === '#kosullar') {
        setCurrentPage('terms');
      } else if (
        pathname.includes('/account-deletion') ||
        pathname.includes('/delete-account') ||
        hash === '#account-deletion' ||
        hash === '#delete-account' ||
        hash === '#hesap-silme'
      ) {
        setCurrentPage('deletion');
      } else {
        setCurrentPage('home');
      }
    };

    handleLocation();
    window.addEventListener('popstate', handleLocation);
    window.addEventListener('hashchange', handleLocation);
    return () => {
      window.removeEventListener('popstate', handleLocation);
      window.removeEventListener('hashchange', handleLocation);
    };
  }, []);

  // 1. Separate Dedicated Page: Privacy Policy (Gizlilik Politikası)
  if (currentPage === 'privacy') {
    return (
      <PrivacyPolicyPage
        onNavigateHome={() => navigateTo('home')}
        onNavigatePage={navigateTo}
      />
    );
  }

  // 2. Separate Dedicated Page: Terms of Service (Kullanım Koşulları)
  if (currentPage === 'terms') {
    return (
      <TermsOfServicePage
        onNavigateHome={() => navigateTo('home')}
        onNavigatePage={navigateTo}
      />
    );
  }

  // 3. Separate Dedicated Page: Account Deletion (Hesap Silme ve Veri Saklama)
  if (currentPage === 'deletion') {
    return (
      <AccountDeletionPage
        onNavigateHome={() => navigateTo('home')}
        onNavigatePage={navigateTo}
      />
    );
  }

  // 4. Main Landing Page
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        onOpenDownload={() => setDownloadModalOpen(true)}
        onNavigateToTab={handleNavigateToTab}
        currentPage={currentPage}
        onNavigatePage={navigateTo}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenDownload={() => setDownloadModalOpen(true)}
          onNavigateToTab={handleNavigateToTab}
        />

        {/* 3. Interactive Dose & Fiber Simulator Widget */}
        <InteractiveSimulator />

        {/* 4. Core Features Grid */}
        <Features />

        {/* 5. How It Works Step-by-Step */}
        <HowItWorks />

        {/* 6. Frequently Asked Questions (FAQ) Accordion */}
        <FAQ onNavigateToTab={handleNavigateToTab} />

        {/* 7. Medical Disclaimer Banner */}
        <MedicalDisclaimer />

        {/* 7. Interactive Support & Account Deletion Form */}
        <SupportAndDeletionForm
          activeTab={formActiveTab}
          onTabChange={setFormActiveTab}
        />
      </main>

      {/* 8. Footer */}
      <Footer
        onOpenLegal={handleOpenLegal}
        onNavigateToTab={handleNavigateToTab}
        onNavigatePage={navigateTo}
      />

      {/* 9. Download App Store Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />

      {/* 10. Fallback Legal Modal if invoked */}
      <LegalModals
        isOpen={legalModalOpen}
        activeDoc={activeLegalDoc}
        onClose={() => setLegalModalOpen(false)}
        onSelectDoc={setActiveLegalDoc}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
