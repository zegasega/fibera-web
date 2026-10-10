import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, Sparkles, ShieldCheck, Globe } from 'lucide-react';
import { FiberaMascot } from './FiberaMascot';
import { useTranslation } from '../i18n/useTranslation';

interface NavbarProps {
  onOpenDownload: () => void;
  onNavigateToTab?: (tab: 'feedback' | 'deletion') => void;
  currentPage?: 'home' | 'privacy' | 'terms' | 'deletion';
  onNavigatePage?: (page: 'home' | 'privacy' | 'terms' | 'deletion', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenDownload, 
  onNavigateToTab, 
  currentPage = 'home',
  onNavigatePage 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage, toggleLanguage } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#hesap-silme') {
      if (onNavigatePage) {
        onNavigatePage('deletion');
        return;
      }
      if (onNavigateToTab) {
        onNavigateToTab('deletion');
        document.getElementById('destek-istek')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    if (onNavigatePage && currentPage !== 'home') {
      const targetId = href.replace('#', '');
      onNavigatePage('home', targetId);
      return;
    }

    if (href === '#destek-istek' && onNavigateToTab) {
      onNavigateToTab('feedback');
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-emerald-100/60'
          : 'bg-white/60 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Badge */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigatePage) {
                onNavigatePage('home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
            aria-label="Fibera"
          >
            <div className="w-10 h-10 rounded-2xl shadow-sm group-hover:shadow-md transition-all duration-300 flex items-center justify-center overflow-hidden">
              <FiberaMascot size="sm" showCardFrame={true} animate={false} className="w-full h-full" />
            </div>

            <div className="flex items-center gap-2">
              <span className="font-display font-black text-2xl tracking-tight bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 bg-clip-text text-transparent">
                Fibera
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80 shadow-2xs">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                {t.nav.categoryBadge}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a
              href="#ozellikler"
              onClick={(e) => handleLinkClick(e, '#ozellikler')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors py-1"
            >
              {t.nav.features}
            </a>
            <a
              href="#nasil-calisir"
              onClick={(e) => handleLinkClick(e, '#nasil-calisir')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors py-1"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#sss"
              onClick={(e) => handleLinkClick(e, '#sss')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors py-1"
            >
              {language === 'tr' ? 'S.S.S.' : 'FAQ'}
            </a>
            <a
              href="#destek-istek"
              onClick={(e) => handleLinkClick(e, '#destek-istek')}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition-colors py-1"
            >
              {t.nav.support}
            </a>
            <a
              href="#hesap-silme"
              onClick={(e) => handleLinkClick(e, '#hesap-silme')}
              className="text-sm font-semibold text-slate-700 hover:text-rose-600 transition-colors py-1 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-rose-500" />
              {t.nav.deleteAccount}
            </a>
          </nav>

          {/* Right Action Cluster: Language Switcher, Logo Button, Download CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-slate-100/90 hover:bg-slate-200/70 p-1 rounded-full border border-slate-200/80 transition-colors">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'tr'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Türkçe"
              >
                <span>TR</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  language === 'en'
                    ? 'bg-white text-emerald-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English"
              >
                <span>EN</span>
              </button>
            </div>

            <button
              id="navbar-download-btn"
              onClick={onOpenDownload}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-sm hover:shadow-md hover:shadow-emerald-600/20 active:scale-[0.98] transition-all cursor-pointer"
            >
              <ArrowDownToLine className="w-4 h-4 text-emerald-100" />
              <span>{t.nav.downloadApp}</span>
            </button>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Lang Button */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-bold flex items-center gap-1 cursor-pointer"
              aria-label={t.nav.langSwitchLabel}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>{language.toUpperCase()}</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/80 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-white/95 backdrop-blur-xl border-b border-emerald-100 px-6 py-5 shadow-xl transition-all animate-fadeIn"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {t.nav.langSwitchLabel}
              </span>
              <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setLanguage('tr')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                    language === 'tr' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  Türkçe
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold cursor-pointer ${
                    language === 'en' ? 'bg-white text-emerald-800 shadow-2xs' : 'text-slate-600'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <a
              href="#ozellikler"
              onClick={(e) => handleLinkClick(e, '#ozellikler')}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100"
            >
              {t.nav.features}
            </a>
            <a
              href="#nasil-calisir"
              onClick={(e) => handleLinkClick(e, '#nasil-calisir')}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100"
            >
              {t.nav.howItWorks}
            </a>
            <a
              href="#sss"
              onClick={(e) => handleLinkClick(e, '#sss')}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100"
            >
              {language === 'tr' ? 'Sıkça Sorulan Sorular (S.S.S.)' : 'Frequently Asked Questions (FAQ)'}
            </a>
            <a
              href="#destek-istek"
              onClick={(e) => handleLinkClick(e, '#destek-istek')}
              className="text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100"
            >
              {t.nav.support}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigatePage) onNavigatePage('privacy');
              }}
              className="text-left text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100 cursor-pointer"
            >
              {t.footer.privacyLink}
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigatePage) onNavigatePage('terms');
              }}
              className="text-left text-base font-semibold text-slate-800 hover:text-emerald-600 py-1.5 border-b border-slate-100 cursor-pointer"
            >
              {t.footer.termsLink}
            </button>
            <a
              href="#hesap-silme"
              onClick={(e) => handleLinkClick(e, '#hesap-silme')}
              className="text-base font-semibold text-rose-600 hover:text-rose-700 py-1.5 flex items-center justify-between"
            >
              <span>{t.nav.deleteAccount}</span>
              <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full border border-rose-200">
                Google Play Policy
              </span>
            </a>

            <div className="pt-2 space-y-2">
              <button
                id="mobile-download-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDownload();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                <ArrowDownToLine className="w-5 h-5 text-emerald-100" />
                <span>{t.nav.downloadApp}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
