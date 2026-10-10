import React, { useEffect } from 'react';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  AlertTriangle, 
  Server, 
  CheckCircle2, 
  Mail, 
  Printer, 
  ExternalLink,
  ChevronRight,
  Database,
  Trash2,
  FileText
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onNavigatePage: (page: 'home' | 'privacy' | 'terms' | 'deletion') => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ 
  onNavigateHome, 
  onNavigatePage 
}) => {
  const { t, language, setLanguage } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = language === 'tr' 
      ? 'Gizlilik Politikası | Fibera GLP-1 & Sağlık Takibi' 
      : 'Privacy Policy | Fibera GLP-1 & Health Tracker';
  }, [language]);

  const handlePrint = () => {
    window.print();
  };

  const currentDoc = t.legal.privacy;

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
            <span className="text-xs font-bold text-emerald-800">
              {language === 'tr' ? 'Gizlilik Politikası' : 'Privacy Policy'}
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
                    ? 'bg-emerald-600 text-white shadow-2xs'
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
                    ? 'bg-emerald-600 text-white shadow-2xs'
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
        <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.legal.complianceBadge}</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              {currentDoc.title}
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base font-normal max-w-2xl leading-relaxed mb-6">
              {currentDoc.intro}
            </p>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-emerald-200/80 pt-4 border-t border-emerald-800/80">
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
                <span className="text-slate-300">{language === 'tr' ? 'Uygulama:' : 'App:'}</span>{' '}
                <strong className="text-white">Fibera</strong>
              </div>
              <span>•</span>
              <div>
                <span className="text-slate-300">{language === 'tr' ? 'İletişim:' : 'Contact:'}</span>{' '}
                <a href="mailto:support@fibera.xyz" className="text-emerald-300 underline font-semibold hover:text-white">
                  support@fibera.xyz
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Guarantee Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="bg-emerald-50/90 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wide text-emerald-950 mb-1">
                {language === 'tr' ? 'Google Play Sağlık Güvencesi' : 'Google Play Health Guarantee'}
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed">
                {currentDoc.summaryNote}
              </p>
            </div>
          </div>

          <div className="bg-sky-50/90 border border-sky-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <Server className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wide text-sky-950 mb-1">
                {language === 'tr' ? 'HTTPS / TLS 1.3 & Güvenli Sunucu Altyapısı' : 'HTTPS / TLS 1.3 & Secure Server Systems'}
              </h3>
              <p className="text-xs text-sky-800 leading-relaxed">
                {language === 'tr' 
                  ? 'Verileriniz aktarım sırasında TLS 1.3 ve sunucu veritabanlarında beklemede güçlü şifreleme ile korunur.'
                  : 'Your data is secured in transit via TLS 1.3 and at rest via strong encryption within secure database and server systems.'}
              </p>
            </div>
          </div>

          <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <AlertTriangle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-xs uppercase tracking-wide text-amber-950 mb-1">
                {language === 'tr' ? 'Tıbbi Sorumluluk Reddi' : 'Medical Disclaimer'}
              </h3>
              <p className="text-xs text-amber-800 leading-relaxed">
                {language === 'tr'
                  ? 'Fibera tanı veya tıbbi tedavi sağlamaz. Tüm ilaç ve doz değişiklikleri hekim kontrolünde olmalıdır.'
                  : 'Fibera does not provide diagnoses or clinical care. All medication changes must be supervised by your doctor.'}
              </p>
            </div>
          </div>
        </div>

        {/* Content Layout: Quick Table of Contents Sidebar + Full Document Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="lg:col-span-4 sticky top-20 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hidden lg:block">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-3">
              {language === 'tr' ? 'İçindekiler' : 'Table of Contents'}
            </h2>
            <nav className="space-y-1">
              {currentDoc.sections.map((sec) => (
                <a
                  key={sec.number}
                  href={`#section-${sec.number}`}
                  className="flex items-center justify-between text-xs font-medium text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 px-2.5 py-1.5 rounded-lg transition-colors group"
                >
                  <span className="truncate">
                    {sec.number}. {sec.title}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-600 shrink-0" />
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-5 border-t border-slate-100 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                {language === 'tr' ? 'Diğer Yasal Sayfalar' : 'Other Legal Pages'}
              </div>
              <button
                type="button"
                onClick={() => onNavigatePage('terms')}
                className="w-full text-left flex items-center justify-between text-xs font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-50 px-2.5 py-2 rounded-lg transition-colors cursor-pointer border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-teal-600" />
                  <span>{t.legal.tabs.terms}</span>
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

          {/* Full Policy Body Content */}
          <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
            {/* Agreement Notice */}
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-slate-700 text-sm leading-relaxed">
              <p className="font-semibold text-slate-900">{currentDoc.agreement}</p>
            </div>

            {/* Render Each Policy Section with Anchor */}
            {currentDoc.sections.map((sec) => (
              <section
                key={sec.number}
                id={`section-${sec.number}`}
                className="pt-6 border-t border-slate-200/80 scroll-mt-24 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-extrabold text-xs flex items-center justify-center shrink-0">
                    {sec.number}
                  </span>
                  <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight">
                    {sec.title}
                  </h2>
                </div>

                <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed pl-1 sm:pl-10">
                  {sec.content.map((paragraph, pIdx) => {
                    const isMedicalDisclaimer = sec.number === '1';
                    const isGooglePlayBadge = paragraph.includes('Google Play') || paragraph.includes('Google Play Sağlık');

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

                    if (isGooglePlayBadge) {
                      return (
                        <div
                          key={pIdx}
                          className="bg-emerald-50/80 border-l-4 border-emerald-600 p-3.5 rounded-r-xl text-emerald-950 text-sm font-medium leading-relaxed my-2"
                        >
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

            {/* Direct Official Contact Box */}
            <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {language === 'tr' ? 'Gizlilik & Veri Hakları Talepleri' : 'Privacy & Data Rights Requests'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {language === 'tr'
                      ? 'Geliştirici zegasega ile doğrudan iletişime geçin:'
                      : 'Contact the individual developer zegasega directly:'}
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@fibera.xyz"
                className="px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                support@fibera.xyz
              </a>
            </div>

            {/* Bottom Cross-Navigation */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <button
                type="button"
                onClick={() => onNavigatePage('terms')}
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'tr' ? '← Kullanım Koşulları Sayfası' : '← Terms of Service Page'}</span>
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
            className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer"
          >
            {language === 'tr' ? 'Ana Sayfaya Dön ↑' : 'Back to Home ↑'}
          </button>
        </div>
      </footer>
    </div>
  );
};
