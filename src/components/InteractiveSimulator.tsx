import React, { useState } from 'react';
import { 
  Sparkles, 
  Salad, 
  Droplets, 
  CheckCircle2, 
  ShieldCheck, 
  RotateCw 
} from 'lucide-react';
import { FiberaMascot } from './FiberaMascot';
import { useTranslation } from '../i18n/useTranslation';

export const InteractiveSimulator: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedMed, setSelectedMed] = useState<'Ozempic' | 'Wegovy' | 'Mounjaro' | 'Zepbound'>('Ozempic');
  const [currentDose, setCurrentDose] = useState<string>('0.5 mg');
  const [dayOfWeekTR, setDayOfWeekTR] = useState<string>('Pazartesi');
  const [dayOfWeekEN, setDayOfWeekEN] = useState<string>('Monday');
  const [injectionSite, setInjectionSite] = useState<'sol_karin' | 'sag_karin' | 'sol_uyluk' | 'sag_uyluk'>('sol_karin');
  const [dailyFiberIntake, setDailyFiberIntake] = useState<number>(24);

  const medDoseOptions: Record<string, string[]> = {
    Ozempic: ['0.25 mg', '0.5 mg', '1.0 mg', '2.0 mg'],
    Wegovy: ['0.25 mg', '0.5 mg', '1.0 mg', '1.7 mg', '2.4 mg'],
    Mounjaro: ['2.5 mg', '5.0 mg', '7.5 mg', '10.0 mg', '12.5 mg', '15.0 mg'],
    Zepbound: ['2.5 mg', '5.0 mg', '7.5 mg', '10.0 mg', '12.5 mg', '15.0 mg'],
  };

  const daysTR = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const daysEN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const getRotationRecommendationTR = () => {
    switch (injectionSite) {
      case 'sol_karin':
        return { next: 'Sağ Karın', benefit: 'Karın bölgesinde doku iyileşmesini sağlar, emilimi dengeler.' };
      case 'sag_karin':
        return { next: 'Sol Uyluk (Üst Bacak)', benefit: 'Bulantı hassasiyetini hafifletmek için bacak rotasyonu idealdir.' };
      case 'sol_uyluk':
        return { next: 'Sağ Uyluk (Üst Bacak)', benefit: 'Bacak kas üstü yağ dokusunu dinlendirir.' };
      case 'sag_uyluk':
        return { next: 'Sol Karın', benefit: 'Döngüyü baştan güvenle başlatır.' };
    }
  };

  const getRotationRecommendationEN = () => {
    switch (injectionSite) {
      case 'sol_karin':
        return { next: 'Right Abdomen', benefit: 'Allows tissue recovery in the abdominal area and ensures balanced absorption.' };
      case 'sag_karin':
        return { next: 'Left Thigh (Upper Leg)', benefit: 'Rotating to thighs is optimal to reduce stomach sensitivity and nausea.' };
      case 'sol_uyluk':
        return { next: 'Right Thigh (Upper Leg)', benefit: 'Rests subcutaneous adipose tissue above leg muscles.' };
      case 'sag_uyluk':
        return { next: 'Left Abdomen', benefit: 'Restarts rotation cycle smoothly and safely.' };
    }
  };

  const recommendation = language === 'tr' ? getRotationRecommendationTR() : getRotationRecommendationEN();
  const currentDay = language === 'tr' ? dayOfWeekTR : dayOfWeekEN;
  const targetFiber = 30; // grams
  const fiberRatio = Math.min(100, Math.round((dailyFiberIntake / targetFiber) * 100));

  const sitesTR = [
    { id: 'sol_karin', name: 'Sol Karın' },
    { id: 'sag_karin', name: 'Sağ Karın' },
    { id: 'sol_uyluk', name: 'Sol Uyluk' },
    { id: 'sag_uyluk', name: 'Sağ Uyluk' },
  ];

  const sitesEN = [
    { id: 'sol_karin', name: 'Left Abdomen' },
    { id: 'sag_karin', name: 'Right Abdomen' },
    { id: 'sol_uyluk', name: 'Left Thigh' },
    { id: 'sag_uyluk', name: 'Right Thigh' },
  ];

  const sites = language === 'tr' ? sitesTR : sitesEN;

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-3xl p-6 sm:p-10 border border-emerald-100 shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>{t.simulator.badge}</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900">
                {t.simulator.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {t.simulator.subtitle}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-3 bg-white px-4 py-2.5 rounded-2xl border border-emerald-100 shadow-xs">
              <FiberaMascot size="sm" showBanner={false} animate={true} className="w-10 h-10" />
              <div className="text-xs">
                <div className="font-bold text-slate-800">{t.simulator.fairyBeside}</div>
                <div className="text-emerald-600 font-semibold">{t.simulator.fairyGoal}</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Config Controls */}
            <div className="lg:col-span-6 space-y-5 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
              {/* Medication Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  {t.simulator.step1Med}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {(['Ozempic', 'Wegovy', 'Mounjaro', 'Zepbound'] as const).map((med) => (
                    <button
                      key={med}
                      type="button"
                      onClick={() => {
                        setSelectedMed(med);
                        setCurrentDose(medDoseOptions[med][0]);
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedMed === med
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {med}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dose & Injection Day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {t.simulator.step2Dose}
                  </label>
                  <select
                    value={currentDose}
                    onChange={(e) => setCurrentDose(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer"
                  >
                    {medDoseOptions[selectedMed].map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {t.simulator.step3Day}
                  </label>
                  <select
                    value={currentDay}
                    onChange={(e) => {
                      if (language === 'tr') {
                        setDayOfWeekTR(e.target.value);
                      } else {
                        setDayOfWeekEN(e.target.value);
                      }
                    }}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/30 cursor-pointer"
                  >
                    {(language === 'tr' ? daysTR : daysEN).map((d) => (
                      <option key={d} value={d}>
                        {t.simulator.everyDay} {d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Last Injection Site */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                  {t.simulator.step4LastSite}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {sites.map((site) => (
                    <button
                      key={site.id}
                      type="button"
                      onClick={() => setInjectionSite(site.id as any)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                        injectionSite === site.id
                          ? 'bg-teal-600 text-white shadow-xs'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <span>{site.name}</span>
                      {injectionSite === site.id && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Daily Fiber Intake Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                    <Salad className="w-3.5 h-3.5 text-emerald-600" />
                    {t.simulator.step5Fiber}
                  </label>
                  <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {dailyFiberIntake} {t.simulator.grams}
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={dailyFiberIntake}
                  onChange={(e) => setDailyFiberIntake(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>{t.simulator.fiberLow}</span>
                  <span className="font-semibold text-emerald-600">{t.simulator.fiberIdeal}</span>
                  <span>{t.simulator.fiberHigh}</span>
                </div>
              </div>
            </div>

            {/* Right Live Recommendation Outcome Card */}
            <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-white to-slate-50 p-6 sm:p-7 rounded-2xl border border-emerald-200/90 shadow-sm">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      {selectedMed[0]}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">{selectedMed} • {currentDose}</div>
                      <div className="text-[11px] text-slate-500">{t.simulator.everyDay} {currentDay}</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                    {t.simulator.activeTracking}
                  </span>
                </div>

                {/* Next Recommended Site */}
                <div className="bg-emerald-50/80 border border-emerald-200/80 rounded-2xl p-4 mb-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-1">
                    <RotateCw className="w-3.5 h-3.5 text-emerald-600" />
                    {t.simulator.recommendedNext}
                  </div>
                  <div className="text-lg font-extrabold text-slate-900 mb-1">
                    👉 {recommendation.next}
                  </div>
                  <p className="text-xs text-slate-600">
                    {recommendation.benefit}
                  </p>
                </div>

                {/* Fiber Status Result */}
                <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-800">{t.simulator.fiberBalanceLevel}</span>
                    <span className="text-xs font-extrabold text-emerald-700">
                      %{fiberRatio} ({dailyFiberIntake}g / 30g)
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-2">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        fiberRatio >= 80 ? 'bg-emerald-500' : fiberRatio >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${fiberRatio}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dailyFiberIntake < 20 ? (
                      <span className="text-amber-700 font-medium">
                        {t.simulator.fiberWarning}
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-medium">
                        {t.simulator.fiberOptimal}
                      </span>
                    )}
                  </p>
                </div>

                {/* Water Advice */}
                <div className="flex items-center gap-2.5 text-xs text-slate-600 bg-sky-50/70 p-3 rounded-xl border border-sky-100">
                  <Droplets className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    {t.simulator.waterAdvicePrefix} <strong>{t.simulator.waterAdviceHighlight}</strong> {t.simulator.waterAdviceSuffix}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  {t.simulator.algorithmTitle}
                </span>
                <span className="text-xs font-bold text-emerald-700">
                  {t.simulator.algorithmSub}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
