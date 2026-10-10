import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  FileText, 
  AlertTriangle, 
  ShieldCheck, 
  CreditCard, 
  Lock, 
  Printer, 
  ChevronRight,
  Trash2,
  Mail
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface TermsOfServicePageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: 'home' | 'privacy' | 'terms' | 'deletion') => void;
}

export const TermsOfServicePage: React.FC<TermsOfServicePageProps> = ({ 
  onNavigateHome, 
  onNavigatePage 
}) => {
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = language === 'tr' 
      ? 'Kullanım Koşulları | Fibera GLP-1 & Sağlık Takibi' 
      : 'Terms of Service | Fibera GLP-1 & Health Tracker';
  }, [language]);

  const handlePrint = () => {
    window.print();
  };

  const currentDoc = t.legal.terms;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 px-3 py-1.5 rounded-xl transition-colors cursor-pointer border border-slate-200/80"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{language === 'tr' ? 'Ana Sayfaya Dön' : 'Back to Home'}</span>
            </button>

            <span className="hidden sm:inline text-slate-300">/</span>

            <span className="hidden sm:inline text-xs font-semibold text-slate-500">
              {language === 'tr' ? 'Yasal Belgeler' : 'Legal Documents'}
            </span>
            <span className="hidden sm:inline text-slate-300">/</span>
            <span className="text-xs font-bold text-teal-800">
              {language === 'tr' ? 'Kullanım Koşulları' : 'Terms of Service'}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-xl p-0.5 border border-slate-200 shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage('tr')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'tr'
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  language === 'en'
                    ? 'bg-teal-700 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
            </div>

            {/* Print Button */}
            <button
              onClick={handlePrint}
              title={language === 'tr' ? 'Sayfayı Yazdır veya PDF Olarak Kaydet' : 'Print or Save as PDF'}
              className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">{language === 'tr' ? 'Yazdır / PDF' : 'Print / PDF'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {/* Header Hero Card */}
        <div className="bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-semibold mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>{language === 'tr' ? 'Resmi Kullanıcı Sözleşmesi' : 'Official User Agreement'}</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              {currentDoc.title}
            </h1>
            <p className="text-teal-100/90 text-sm sm:text-base font-normal max-w-2xl leading-relaxed mb-6">
              {currentDoc.intro}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-teal-200/80 pt-4 border-t border-teal-800/80">
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Son Güncelleme:' : 'Last Updated:'}</span>{' '}
                <strong className="text-white">{currentDoc.lastUpdated}</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Geliştirici:' : 'Developer:'}</span>{' '}
                <strong className="text-white">zegasega</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'Faturalandırma Altyapısı:' : 'Billing Platform:'}</span>{' '}
                <strong className="text-white">Google Play Store In-App Billing</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'İletişim:' : 'Contact:'}</span>{' '}
                <a href="mailto:support@fibera.xyz" className="text-teal-300 underline font-semibold hover:text-white">
                  support@fibera.xyz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Prominent Medical Warning Box */}
        <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-5 mb-10 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm uppercase tracking-wide text-amber-950 mb-1">
              {language === 'tr' ? 'Tıbbi Tavsiye Niteliği Taşımaması Hakkında Önemli Uyarı' : 'Crucial Notice: Not Medical Advice'}
            </h3>
            <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
              {currentDoc.medicalWarning}
            </p>
          </div>
        </div>

        {/* Content Layout: Sticky TOC + Document Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 sticky top-20 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hidden lg:block">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              {language === 'tr' ? 'Koşul Başlıkları' : 'Terms Table of Contents'}
            </h2>
            <nav className="space-y-1">
              {currentDoc.sections.map((sec) => (
                <a
                  key={sec.number}
                  href={`#terms-section-${sec.number}`}
                  className="flex items-center justify-between text-xs font-medium text-slate-600 hover:text-teal-700 hover:bg-teal-50 px-2.5 py-1.5 rounded-lg transition-colors group"
                >
                  <span className="truncate">
                    {sec.number}. {sec.title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-600 shrink-0" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {language === 'tr' ? 'Diğer Yasal Sayfalar' : 'Other Legal Pages'}
              </div>
              <button
                type="button"
                onClick={() => onNavigatePage('privacy')}
                className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 px-2.5 py-2 rounded-lg transition-colors cursor-pointer border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.legal.tabs.privacy}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-slate-400" />
              </button>

              <button
                type="button"
                onClick={() => onNavigatePage('deletion')}
                className="w-full text-left flex items-center justify-between text-xs font-semibold text-rose-700 hover:bg-rose-50 px-2.5 py-2 rounded-lg transition-colors cursor-pointer border border-rose-100"
              >
                <div className="flex items-center gap-2">
                  <Trash2 className="w-3.5 h-3.5 text-rose-600" />
                  <span>{t.legal.tabs.deletion}</span>
                </div>
                <ChevronRight className="w-3 h-3 text-rose-400" />
              </button>
            </div>
          </aside>

          {/* Full Terms Body Content */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
            {/* Render Each Terms Section */}
            {currentDoc.sections.map((sec) => (
              <section
                key={sec.number}
                id={`terms-section-${sec.number}`}
                className="pt-6 border-t border-slate-200/80 scroll-mt-24 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-xl bg-teal-100 text-teal-900 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {sec.number}
                  </span>
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-3 text-slate-600 text-sm sm:text-base leading-relaxed pl-1 sm:pl-10">
                  {sec.content.map((paragraph, pIdx) => {
                    const isMedicalDisclaimer = sec.number === '1';
                    const isBilling = sec.number === '3';

                    if (isMedicalDisclaimer) {
                      return (
                        <div
                          key={pIdx}
                          className="bg-amber-50/70 border-l-4 border-amber-500 p-3.5 rounded-r-xl text-amber-950 text-sm font-medium leading-relaxed my-2"
                        >
                          {paragraph}
                        </div>
                      );
                    }

                    if (isBilling && paragraph.includes('Google Play')) {
                      return (
                        <div
                          key={pIdx}
                          className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl text-slate-800 text-sm leading-relaxed"
                        >
                          <div className="flex items-center gap-2 font-bold text-slate-900 mb-1">
                            <CreditCard className="w-4 h-4 text-emerald-600" />
                            <span>Google Play In-App Billing</span>
                          </div>
                          {paragraph}
                        </div>
                      );
                    }

                    return (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </section>
            ))}

            {/* Support and Contact Box */}
            <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {language === 'tr' ? 'Koşullar ve Lisans Soruları' : 'Terms & Licensing Inquiries'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'tr'
                      ? 'Geliştirici zegasega ile iletişime geçin:'
                      : 'Reach out to developer zegasega directly:'}
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@fibera.xyz"
                className="px-4 py-2 rounded-xl bg-teal-800 hover:bg-teal-900 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                support@fibera.xyz
              </a>
            </div>

            {/* Bottom Cross-Navigation */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                type="button"
                onClick={() => onNavigatePage('privacy')}
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'tr' ? '← Gizlilik Politikası Sayfası' : '← Privacy Policy Page'}</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigatePage('deletion')}
                className="font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'tr' ? 'Hesap Silme ve Veri Saklama Sayfası →' : 'Account Deletion & Data Retention Page →'}</span>
              </button>
            </div>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-white">Fibera</span> • {language === 'tr' ? 'Bireysel Geliştirici zegasega' : 'Developer zegasega'}
            <p className="text-slate-500 mt-0.5">support@fibera.xyz • {currentDoc.lastUpdated}</p>
          </div>
          <button
            onClick={onNavigateHome}
            className="text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
          >
            {language === 'tr' ? 'Ana Sayfaya Dön ↑' : 'Back to Home ↑'}
          </button>
        </div>
      </footer>
    </div>
  );
};
