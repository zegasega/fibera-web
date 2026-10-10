import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  Calendar, 
  Activity, 
  Leaf, 
  RotateCw, 
  BellRing 
} from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

interface HeroProps {
  onOpenDownload: () => void;
  onNavigateToTab?: (tab: 'feedback' | 'deletion') => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onNavigateToTab }) => {
  const { t, language } = useTranslation();
  const [selectedSite, setSelectedSite] = useState<'sol_karin' | 'sag_karin' | 'sol_uyluk' | 'sag_uyluk'>('sol_karin');
  const [fiberCount, setFiberCount] = useState<number>(26); // Grams

  const siteNamesTR = {
    sol_karin: 'Sol Karın (Göbek Yanı)',
    sag_karin: 'Sağ Karın (Göbek Yanı)',
    sol_uyluk: 'Sol Uyluk (Üst Bacak)',
    sag_uyluk: 'Sağ Uyluk (Üst Bacak)',
  };

  const siteNamesEN = {
    sol_karin: 'Left Abdomen (Navel Side)',
    sag_karin: 'Right Abdomen (Navel Side)',
    sol_uyluk: 'Left Thigh (Upper Leg)',
    sag_uyluk: 'Right Thigh (Upper Leg)',
  };

  const currentSiteName = language === 'tr' ? siteNamesTR[selectedSite] : siteNamesEN[selectedSite];

  return (
    <section id="hero" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-emerald-100/60 via-teal-50/40 to-cyan-100/40 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-emerald-200/30 blur-3xl rounded-full -z-10 pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-cyan-200/30 blur-3xl rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & High-Conversion Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Trust Pill / Category Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs sm:text-sm font-semibold mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] mb-6">
              {t.hero.title1}{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>{' '}
              {t.hero.title2}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl font-normal">
              {t.hero.subtitle}
            </p>

            {/* CTAs: Store Buttons (Google Play & App Store) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              {/* Google Play Store Button */}
              <button
                id="hero-google-play-btn"
                onClick={onOpenDownload}
                className="group flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-[#0F172A] hover:bg-slate-800 text-white shadow-md hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer border border-slate-700"
              >
                <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186A2.22 2.22 0 0 1 3 20.613V3.387c0-.598.224-1.15.609-1.573z" fill="#00E5FF"/>
                  <path d="M17.184 8.608L5.27 1.874a2.203 2.203 0 0 0-1.661-.06l10.183 10.186 3.392-3.392z" fill="#FFD400"/>
                  <path d="M3.609 22.186c.49.256 1.071.298 1.661-.06l11.914-6.734-3.392-3.392L3.609 22.186z" fill="#FF3A44"/>
                  <path d="M20.573 10.536l-3.389-1.928-3.392 3.392 3.392 3.392 3.389-1.928c.957-.547.957-2.381 0-2.928z" fill="#00F076"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-slate-300 tracking-wider">
                    {t.hero.googlePlay}
                  </div>
                  <div className="text-base font-extrabold text-white tracking-wide">
                    {t.hero.googlePlayAction}
                  </div>
                </div>
                <span className="ml-1 text-[11px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 px-2 py-0.5 rounded-full">
                  {t.hero.soon}
                </span>
              </button>

              {/* App Store Button */}
              <button
                id="hero-app-store-btn"
                onClick={onOpenDownload}
                className="group flex items-center justify-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer"
              >
                <svg className="w-6 h-6 shrink-0 fill-current text-slate-900" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77.99.08 2.03-.51 2.68-1.27z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">
                    {t.hero.appStore}
                  </div>
                  <div className="text-base font-extrabold text-slate-900 tracking-wide">
                    {t.hero.appStoreAction}
                  </div>
                </div>
                <span className="ml-1 text-[11px] font-semibold bg-cyan-50 text-cyan-700 border border-cyan-200 px-2 py-0.5 rounded-full">
                  {t.hero.soon}
                </span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 pt-2 border-t border-slate-200/70 w-full">
              <div className="inline-flex items-center gap-2 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.hero.trustPrivacy}</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="inline-flex items-center gap-2 font-medium text-slate-700">
                <Lock className="w-4 h-4 text-teal-600 shrink-0" />
                <span>{t.hero.trustHealthData}</span>
              </div>
              <span className="hidden sm:inline text-slate-300">•</span>
              <div className="inline-flex items-center gap-2 text-slate-500 text-xs">
                <span>{t.hero.trustMeds}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive App Mock-up Screen Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Ambient Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-3xl blur-xl -z-10" />

            <div className="relative w-full max-w-md flex flex-col items-center">
              {/* Realistic Mobile Mockup Screen Card */}
              <div
                id="hero-app-mockup"
                className="w-full bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-emerald-100/90 relative z-0 transition-transform duration-300 hover:shadow-emerald-900/10"
              >
                {/* Mobile Card Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-sm flex items-center justify-center text-white">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 leading-tight">{t.hero.cycleTitle}</div>
                      <div className="text-[10px] text-slate-500">{t.hero.cycleSubtitle}</div>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    <BellRing className="w-3 h-3 text-emerald-600" />
                    {t.hero.daysLeft}
                  </span>
                </div>

                {/* Section 1: İğne Doz Sayacı & Rotasyon */}
                <div className="bg-gradient-to-br from-emerald-50/70 via-teal-50/50 to-white p-3.5 rounded-2xl border border-emerald-100/70 mb-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      {t.hero.trackerTitle}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-lg border border-emerald-100 shadow-2xs">
                      {t.hero.dayNum}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-extrabold text-slate-900">
                        {t.hero.lastSite}
                      </div>
                      <div className="text-xs font-semibold text-emerald-700 mt-0.5 flex items-center gap-1">
                        <RotateCw className="w-3 h-3 text-emerald-600" />
                        {currentSiteName}
                      </div>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Interactive Site Rotator Pills */}
                  <div className="mt-3 pt-2.5 border-t border-emerald-100/60">
                    <div className="text-[10px] font-medium text-slate-500 mb-1.5">
                      {t.hero.nextRotationPrompt}
                    </div>
                    <div className="grid grid-cols-2 gap-1.5">
                      {(['sol_karin', 'sag_karin', 'sol_uyluk', 'sag_uyluk'] as const).map((site) => (
                        <button
                          key={site}
                          type="button"
                          onClick={() => setSelectedSite(site)}
                          className={`text-[11px] py-1 px-2 rounded-lg text-left transition-all font-medium flex items-center justify-between ${
                            selectedSite === site
                              ? 'bg-emerald-600 text-white shadow-2xs font-semibold'
                              : 'bg-white/80 text-slate-600 hover:bg-white border border-slate-100'
                          }`}
                        >
                          <span className="truncate">
                            {site === 'sol_karin'
                              ? language === 'tr' ? 'Sol Karın' : 'Left Abdomen'
                              : site === 'sag_karin'
                              ? language === 'tr' ? 'Sağ Karın' : 'Right Abdomen'
                              : site === 'sol_uyluk'
                              ? language === 'tr' ? 'Sol Uyluk' : 'Left Thigh'
                              : language === 'tr' ? 'Sağ Uyluk' : 'Right Thigh'}
                          </span>
                          {selectedSite === site && <span className="w-1.5 h-1.5 rounded-full bg-white ml-1 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 2: Günlük Lif & Protein Skoru */}
                <div className="bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 mb-3.5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-xs font-bold text-slate-800">{t.hero.fiberScoreTitle}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                        %{Math.round((fiberCount / 30) * 100)}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        {fiberCount}g / {t.hero.fiberGoalText}
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.round((fiberCount / 30) * 100))}%` }}
                    />
                  </div>

                  {/* Quick Fiber Adjuster Demo */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span>{t.hero.addMeal}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => setFiberCount(prev => Math.max(10, prev - 3))}
                        className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-600 hover:bg-slate-100 text-[10px] font-bold cursor-pointer"
                      >
                        -3g
                      </button>
                      <button
                        type="button"
                        onClick={() => setFiberCount(prev => Math.min(35, prev + 3))}
                        className="px-2 py-0.5 bg-emerald-100 border border-emerald-200 rounded text-emerald-800 hover:bg-emerald-200 text-[10px] font-bold cursor-pointer"
                      >
                        {t.hero.fiberOption}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Section 3: Semptom & Yan Etki Durumu */}
                <div className="flex items-center justify-between text-xs px-2 py-1.5 bg-white rounded-xl border border-slate-100 text-slate-600">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-cyan-600" />
                    <span className="font-medium">{t.hero.comfortTitle}</span>
                  </div>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    {t.hero.comfortStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
