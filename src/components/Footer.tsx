import React from 'react';
import { Mail, Heart, Globe } from 'lucide-react';
import { FiberaMascot } from './FiberaMascot';
import { LegalDocType } from './LegalModals';
import { useTranslation } from '../i18n/useTranslation';

interface FooterProps {
  onOpenLegal?: (doc: LegalDocType) => void;
  onNavigateToTab?: (tab: 'feedback' | 'deletion') => void;
  onNavigatePage?: (page: 'home' | 'privacy' | 'terms' | 'deletion') => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenLegal, 
  onNavigateToTab, 
  onNavigatePage 
}) => {
  const { t, language, setLanguage } = useTranslation();

  const handleLegalClick = (doc: LegalDocType) => {
    if (onNavigatePage) {
      onNavigatePage(doc);
    } else if (onOpenLegal) {
      onOpenLegal(doc);
    }
  };

  const handleDeletionClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigatePage) {
      onNavigatePage('deletion');
    } else if (onNavigateToTab) {
      onNavigateToTab('deletion');
      document.getElementById('destek-istek')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand & Mascot */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl shadow-sm flex items-center justify-center overflow-hidden">
                <FiberaMascot size="sm" showCardFrame={true} animate={false} className="w-full h-full" />
              </div>
              <span className="font-display font-black text-2xl text-white tracking-tight">
                Fibera
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-800/80">
                {t.nav.categoryBadge}
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-sm">
              {t.footer.tagline}
            </p>

            {/* Official Support Email */}
            <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-700 mb-4">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.footer.supportTitle}</span>
              <a href="mailto:support@fibera.xyz" className="text-white hover:text-emerald-400 font-bold transition-colors">
                support@fibera.xyz
              </a>
            </div>

            {/* Footer Language Switcher */}
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'tr' ? 'Dil Seçimi / Language:' : 'Language:'}</span>
              <div className="inline-flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
                <button
                  type="button"
                  onClick={() => setLanguage('tr')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                    language === 'tr' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Türkçe
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                    language === 'en' ? 'bg-emerald-600 text-white shadow-2xs' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#ozellikler" className="hover:text-emerald-400 transition-colors">
                  {t.footer.featuresLink}
                </a>
              </li>
              <li>
                <a href="#nasil-calisir" className="hover:text-emerald-400 transition-colors">
                  {t.footer.howItWorksLink}
                </a>
              </li>
              <li>
                <a href="#sss" className="hover:text-emerald-400 transition-colors">
                  {language === 'tr' ? 'Sıkça Sorulan Sorular' : 'Frequently Asked Questions'}
                </a>
              </li>
              <li>
                <a
                  href="#destek-istek"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onNavigateToTab) {
                      onNavigateToTab('feedback');
                    }
                    document.getElementById('destek-istek')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  {t.footer.supportLink}
                </a>
              </li>
              <li>
                <a
                  href="#hesap-silme"
                  onClick={handleDeletionClick}
                  className="text-rose-400 hover:text-rose-300 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.footer.deletionLink}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalClick('privacy')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.footer.privacyLink}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalClick('terms')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.footer.termsLink}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleLegalClick('deletion')}
                  className="hover:text-emerald-400 transition-colors text-left cursor-pointer font-medium"
                >
                  {t.footer.deletionPolicyLink}
                </button>
              </li>
              <li className="pt-2 text-xs text-slate-500 leading-relaxed">
                {t.footer.complianceNote}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{t.footer.copyright}</p>
            <p className="text-[11px] text-slate-600 mt-0.5">{t.footer.developerInfo}</p>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <span>{t.footer.designedWith}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>{t.footer.fairyEnding}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
