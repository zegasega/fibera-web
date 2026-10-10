import React from 'react';
import { Pill, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '../i18n/useTranslation';

export const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  const icons = [
    <Pill className="w-6 h-6 text-emerald-600" />,
    <HeartPulse className="w-6 h-6 text-teal-600" />,
    <Sparkles className="w-6 h-6 text-cyan-600" />,
  ];

  return (
    <section id="nasil-calisir" className="py-20 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-200">
            <span>{t.howItWorks.badge}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Subtle connecting horizontal line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 -translate-y-12 -z-0" />

          {t.howItWorks.steps.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all duration-300 relative z-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {icons[index]}
                  </div>
                  <span className="font-display font-black text-3xl text-slate-200">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
